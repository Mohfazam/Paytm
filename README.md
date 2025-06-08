# 💸 Paytm Clone – Digital Wallet App

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.0+-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green)](https://www.mongodb.com/)

A full-stack digital wallet application inspired by Paytm that enables users to securely register, authenticate, check account balances, and transfer funds in real-time. Built with modern web technologies and focusing on security and user experience.

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based user signup and login
- 💰 **Balance Management** - Real-time account balance checking
- 🔄 **Instant Transfers** - Secure peer-to-peer money transfers
- 🛡️ **Transaction Security** - Protected with sessions and MongoDB transactions
- 📱 **Responsive Design** - Clean and modern React UI with TailwindCSS
- ⚡ **Real-time Updates** - Live balance and transaction updates

## 🛠️ Technology Stack

### Frontend
- **React** - Modern UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **TailwindCSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token for authentication
- **Zod** - TypeScript-first schema validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/paytm-clone.git
cd paytm-clone
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URL=mongodb://localhost:27017/paytmclone
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

## 📋 API Documentation

### Authentication

#### User Signup
```http
POST /api/v1/user/signup
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "securepassword123",
  "firstname": "John",
  "lastname": "Doe"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### User Signin
```http
POST /api/v1/user/signin
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Account Operations

#### Check Balance
```http
GET /api/v1/account/balance
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "balance": 1500.00
}
```

#### Transfer Money
```http
POST /api/v1/account/transfer
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "amount": 100,
  "to": "recipient_user_id"
}
```

**Response:**
```json
{
  "message": "Transfer successful"
}
```

## 🏗️ Project Structure

```
paytm-clone/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── package.json
│   └── index.html
└── README.md
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for password security
- **Input Validation** - Zod schema validation
- **Transaction Integrity** - MongoDB transactions for financial operations
- **CORS Protection** - Cross-origin request security

## 🖼️ Screenshots

> **Note:** Add screenshots of your application here showing:
> - Login/Signup pages
> - Dashboard with balance
> - Money transfer interface
> - Transaction history (if implemented)

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Vercel, Netlify, or Heroku
2. Set environment variables in your deployment platform
3. Update CORS settings for production URLs

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update API base URLs for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

Create a `.env.example` file in the backend directory:
```env
MONGO_URL=mongodb://localhost:27017/paytmclone
JWT_SECRET=your_secret_key_here
PORT=3000
NODE_ENV=development
```

## 🐛 Known Issues

- [ ] Add transaction history feature
- [ ] Implement email verification
- [ ] Add password reset functionality
- [ ] Mobile app version

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact: [your-email@example.com]

## 👨‍💻 Author

**Mohammed Sarwar Khan**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

**Built with ❤️ using React and Node.js**
