# Node.js REST API

A lightweight RESTful API built with Node.js and Express. Designed for learning and prototyping purposes.

---

## Tech Stack

- **Runtime:** Node.js >= 10
- **Framework:** Express
- **Other:** body-parser, cors, dotenv

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` as needed:

```env
PORT=3000
NODE_ENV=development
```

### 4. Start the server

```bash
npm start
```

The server will be available at `http://localhost:3000`.

---

## Project Structure

```
.
├── index.js                  # Entry point
├── .env.example              # Environment variable template
├── src/
│   ├── config/
│   │   └── app.js            # App configuration (port, CORS, etc.)
│   ├── controllers/
│   │   └── exampleController.js  # Route handler logic
│   ├── middleware/
│   │   ├── errorHandler.js   # Global error handling middleware
│   │   └── notFound.js       # 404 handler
│   ├── routes/
│   │   └── index.js          # Route definitions
│   └── tests/                # Test files
└── package.json
```

---

## API Reference

All endpoints are prefixed with `/api`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api` | Health check |
| `GET` | `/api/accounts/:user` | Get a resource by ID |
| `POST` | `/api/accounts` | Create a new resource |
| `DELETE` | `/api/accounts/:user` | Delete a resource |
| `POST` | `/api/accounts/:user/transactions` | Add a nested resource |
| `DELETE` | `/api/accounts/:user/transactions/:id` | Remove a nested resource |

### Example request

```bash
curl http://localhost:3000/api
```

### Example response

```json
{ "message": "API is running" }
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npm run lint` | Lint the source code |
| `npm run format` | Format the source code with Prettier |

---

## Error Handling

All errors are returned in a consistent JSON format:

```json
{
  "error": "Description of what went wrong"
}
```

Common HTTP status codes used:

| Code | Meaning |
|------|---------|
| `200` | OK |
| `201` | Created |
| `204` | No Content |
| `400` | Bad Request — missing or invalid parameters |
| `404` | Not Found |
| `409` | Conflict — resource already exists |
| `500` | Internal Server Error |

---

## Notes

- Data is stored **in-memory** and resets on every server restart. Not intended for production use.
- CORS is enabled for `localhost` and `127.0.0.1` only.

---

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE)
