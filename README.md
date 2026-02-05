# 🛒 Mini Tech Shop

A modern **React-based e-commerce demo** featuring a product slider, product grid, and a fully functional shopping cart. Built to practice real-world front‑end patterns, state management, and clean UX.

---

## ✨ Features

* 🎠 **Swiper slider** with autoplay, navigation & pagination
* 🧩 **Products grid** with responsive layout
* 🛍️ **Shopping cart**

  * Add / remove products
  * Increase / decrease quantity
  * Automatic total price calculation
* 🧠 **Global cart state** via React Context
* 🔗 **Product details routing** with React Router
* 🔔 **Toast notifications** (React Hot Toast)  
* 📱 **Responsive design** (mobile → desktop)

---

## 🧑‍💻 Tech Stack

* **React** (functional components & hooks)
* **React Router DOM** – routing
* **React Context API** – cart state management
* **Swiper.js** – product carousel
* **React Hot Toast** – toast notifications for cart actions  
* **CSS** – custom styling


---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/mini-tech-shop.git
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the development server

```
npm run dev
```

The app will start on:
👉 `http://localhost:5173`

---

## 🛒 Cart Logic Overview

* Products are stored in a global cart context
* If a product already exists in the cart:

  * quantity is increased
* Decreasing quantity stops at `1`
* Total price is calculated dynamically using `reduce()`

---

## 📸 Screens & UI

* Swiper slider for **Top Products**
* Grid layout for browsing all products
* Dedicated cart page with quantity controls

---

## 🔮 Future Improvements

* 💾 Persist cart in `localStorage`
* ❤️ Wishlist functionality
* 💳 Checkout page
* ⭐ Product ratings

---

## 📌 Purpose of the Project

This project is built for:

* Practicing **real e-commerce UI patterns**
* Improving **React state management** skills
* Preparing for **front-end developer internships / junior roles**

---

## 🧠 Author

**Anatoli Hadzhiev**
Front‑End Developer (React)

---

⭐ If you like this project, feel free to star it and use it as a base for bigger ideas!
