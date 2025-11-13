# 🚀 Shortly URL – Smart URL Shortener

## 🧾 Introduction
**Shortly URL** is a modern and efficient URL shortener web application designed to create, manage, and track short links easily.  
It helps users transform long URLs into short, shareable links while maintaining analytics for each shortened URL.

The project follows a **three-tier architecture** with:
- **Frontend:** Angular  
- **Backend:** Spring Boot  
- **Database:** MySQL  

This ensures scalability, security, and seamless performance for real-world use.

---

## 🎯 Objectives
- Shorten long and complex URLs into concise links  
- Provide user authentication and personalized dashboards  
- Offer RESTful APIs for link management  
- Ensure fast, reliable, and secure redirections  

---

## 🏗️ System Architecture

Angular (Frontend)
|
Spring Boot (Backend REST APIs)
|
MySQL (Database)

---

## ⚙️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | Angular, TypeScript, HTML, CSS |
| **Backend** | Spring Boot, Java, Maven |
| **Database** | MySQL |
| **Security** | Spring Security, JWT |
| **Build Tools** | Maven, npm |
| **Version Control** | Git & GitHub |

---

## 🧩 Features
✅ Shorten long URLs instantly  
✅ Redirect to the original link with a unique key  
✅ User authentication using JWT  
✅ REST API support for external integration  
✅ Clean and responsive UI built with Angular  

---

## 🔐 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/v1/auth/signup` | Register a new user |
| `POST` | `/api/v1/auth/login` | Authenticate and get JWT token |
| `POST` | `/api/v1/url/shorten` | Create a short URL |
| `GET` | `/api/v1/url/{shortCode}` | Redirect to the original URL |
| `GET` | `/api/v1/url/user/all` | Get all URLs for the logged-in user |

---

## 🧠 How It Works
1. The user enters a **long URL** in the frontend.  
2. The backend generates a **unique short code** and stores the mapping in the database.  
3. When someone visits the short URL, the backend redirects them to the **original long URL**.  
4. Each visit is **logged for analytics** (click count, timestamp, etc.).  

---

## ⚡ Setup Instructions

### 🖥️ Backend (Spring Boot)
```bash
cd Shortly-Url-Backend
mvn clean install
mvn spring-boot:run

Runs at: http://localhost:8080
🌐 Frontend (Angular)
cd Shortly-Url-Frontend
npm install
ng serve
Runs at: http://localhost:4200
🗄️ Database Setup
Create a MySQL database named shortly_url_db
Update credentials in application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/shortly_url_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
🧑‍💻 Team Members
Shreyash Bhagwan Gurav – Backend Development & Security
(Add teammates here if applicable)
📚 Future Enhancements
Add URL expiry feature
QR code generation for each short link
Custom short codes for premium users
Advanced analytics dashboard
🏁 Conclusion
Shortly URL simplifies the way users share and manage links while ensuring performance and security.
It demonstrates strong implementation of REST architecture, JWT authentication, and a clean integration between Angular and Spring Boot.
⭐ If you like this project, consider giving it a star on GitHub!

---

Would you like me to make a **GitHub-optimized version** with emojis, section dividers, and badges (like Java ☕ | Angular ⚡ | MySQL 🗄️ etc.) for a professional portfolio look?
