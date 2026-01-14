# SPA

A Single Page Application (SPA) built with Angular and PrimeNG, featuring user authentication (login/register) using localStorage for data persistence. No backend required - fully static and deployable to GitHub Pages.

## Live Demo

🌐 [View Live Demo](https://njvinay.github.io/angular-primeng-app-with-auth-main/)

## Features

- User Registration and Login
- Client-side authentication with localStorage
- Responsive UI with PrimeNG components
- Form validation
- Route guards for protected pages

## Development

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`

### Build

```bash
ng build --configuration production
```

### Deployment

The project is configured with GitHub Actions for automatic deployment to GitHub Pages on every push to the main branch.

Manual deployment:
```bash
npx angular-cli-ghpages --dir=dist/angular-primeng-app
```

## Technologies Used

- Angular 18
- PrimeNG 17
- TypeScript
- RxJS
- localStorage for data persistence

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   ├── register/
│   │   └── home/
│   ├── guards/
│   ├── services/
│   └── interfaces/
├── assets/
└── styles.css
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
