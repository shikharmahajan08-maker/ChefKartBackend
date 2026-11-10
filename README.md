# ChefKart Backend API

A RESTful backend service for the ChefKart web platform, built using **Node.js**, **Express**, and **MongoDB** (via Mongoose), with image management powered by **Cloudinary**.

---

## 👨‍💻 Author

- **Shikhar Mahajan**
- GitHub: [@shikharmahajan08-maker](https://github.com/shikharmahajan08-maker)
- Email: [shikharmahajan08@gmail.com](mailto:shikharmahajan08@gmail.com)

---

## 🔗 Related Repositories

- **Frontend Repository**: [ChefKartFrontend](https://github.com/shikharmahajan08-maker/ChefKartFrontend)

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (`jsonwebtoken`) & `bcryptjs`
- **File Uploads**: `multer` with `multer-storage-cloudinary`
- **Media Storage**: Cloudinary
- **Logging & Security**: `morgan`, `cors`, `http-errors`

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas connection URI)
- Cloudinary account credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shikharmahajan08-maker/ChefKartBackend.git
   cd ChefKartBackend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   PORT=8000
   JWT_SECRET=your_jwt_secret_key
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/chefkart
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Run the server:
   - In development mode (with auto-reload):
     ```bash
     npm run dev
     ```
   - In production mode:
     ```bash
     npm start
     ```

---

## 📡 API Routes Overview

| Route | Description |
|---|---|
| `/auth` | User authentication & registration |
| `/chef` | Chef profiles, listings & search |
| `/booking` | Booking creation & management |
| `/blog` | Blog posts & articles |
| `/testimonial` | Customer reviews & testimonials |
| `/gallery` | Image gallery management |
| `/food` & `/foodGall` | Food menu & category items |
| `/join` | Join as a chef / cook registration |
| `/investor` | Investor relations & inquiries |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
