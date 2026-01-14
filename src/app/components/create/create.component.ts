import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent {
    createForm: FormGroup;
    currentUser: any;
    isLoading: boolean = false;

    constructor(
        private fb: FormBuilder,
        private itemService: ItemService,
        private authService: AuthService,
        private router: Router
    ) {
        this.createForm = this.fb.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });

        // Get current user from localStorage or auth service
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            this.currentUser = JSON.parse(loggedInUser);
        }
    }

    onSubmit() {
        if (this.createForm.valid && this.currentUser) {
            const itemData = {
                title: this.createForm.value.title,
                content: this.createForm.value.content,
                author: this.currentUser.fullName
            };
            this.isLoading = true;
            this.itemService.createItem(itemData).subscribe({
                next: () => {
                    this.isLoading = false;
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    this.isLoading = false;
                    console.error('Error creating item:', err);
                }
            });
        }
    }
}
