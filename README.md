# ✈️ JetHue Navigation Bar with React Routing

This project was developed as part of a task to create a functional and stylish **navigation bar** using core web technologies and React. To elevate the experience, I designed a travel-themed website called **JetHue** and integrated **React Router DOM** to demonstrate smooth client-side navigation.

> 🔗 **Live Demo:** [https://sct-wd-1-delta.vercel.app/](https://sct-wd-1-delta.vercel.app/)

---

## 📌 Purpose

The primary goal was to:
- Create a working **navigation bar**
- Use **React Routing** to handle page transitions
- Design a visually engaging experience using a **custom layout** inspired by travel platforms

---

## 🔧 Technologies Used

| Category         | Tools/Libraries                     |
|------------------|--------------------------------------|
| Core Web         | ✅ HTML, ✅ CSS, ✅ JavaScript        |
| Frontend Framework | ⚛️ React (Vite)                   |
| Routing          | 🔄 React Router DOM                  |
| Styling          | 🎨 CSS Modules                       |
| Deployment       | 🌐 Vercel                            |

---

## ✨ Features

- ⚡ **Single Page Application (SPA)** with instant routing
- 📱 Fully responsive layout
- 🎯 Minimal and clean UI with a soft travel theme
- 🧭 Navigation bar with links to:
  - Home
  - Destinations (About)
  - FAQs (Dashboard)
  - Made by (Profile)
- 🌐 Smooth client-side navigation using `react-router-dom`
- 🗂️ Clean folder structure with separation of components and pages

---

## 📁 Folder Structure

```
project-root/
├── routing_nested/
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json       # Vercel routing for React Router
│   ├── package.json
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx / Navbar.css
│   │   ├── pages/
│   │   │   ├── Home.jsx / Home.css
│   │   │   ├── About.jsx / About.css
│   │   │   ├── Dashboard.jsx / Dashboard.css
│   │   │   └── Profile.jsx / Profile.css
│   │   ├── App.jsx
│   │   └── main.jsx
```

---

## 🛠 Deployment

The project is deployed via **Vercel** with a custom `vercel.json` file to enable SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🙌 Acknowledgements

- **React & Vite** — for building a fast, modern frontend
- **Vercel** — for seamless deployment

---

## 📬 Contact

**Rajan Kumar**  
[GitHub](https://github.com/rajankumar2511)

