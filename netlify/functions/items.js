const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
    try {
        const dbPath = path.resolve(__dirname, '../../db.json');
        const raw = fs.readFileSync(dbPath, 'utf-8');
        const db = JSON.parse(raw);
        const items = db.items || [];
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: String(err) })
        };
    }
};
