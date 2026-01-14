const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
    try {
        const dbPath = path.resolve(__dirname, '../../db.json');
        const raw = fs.readFileSync(dbPath, 'utf-8');
        const db = JSON.parse(raw);
        const users = db.users || [];
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(users)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: String(err) })
        };
    }
};
