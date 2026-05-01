# Deployment

## Server

Set these environment variables on the backend host:

- `MONGO_URI`
- `JWT_SECRET`
- `CLIENT_URL`
- `PORT`

Commands:

```bash
npm install
npm start
```

Import data from the server folder:

```bash
npm run import
npm run import:file -- data.json
npm run import:file -- customers.xlsx
```

The importer supports `.json`, `.xlsx`, and `.xls`. Customer password is generated from the last 4 digits of the account number.

## Client

Set this environment variable on the frontend host:

- `NEXT_PUBLIC_API_URL`

Commands:

```bash
npm install
npm run build
npm start
```
