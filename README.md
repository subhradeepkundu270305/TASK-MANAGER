<div align="center">

# 📝 Task Manager – TODO LIST
### React + Vite | Local Storage Powered

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="55"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="55"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="55"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="55"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" height="55"/>

</div>

---

## 🚀 Project Overview

A modern **Task Manager (Todo List)** built using **React + Vite** with persistent state management via **Local Storage**.

The application allows users to manage daily tasks efficiently with real-time UI updates and persistent data storage.

---

## ✨ Features

### 🔹 Core Functionalities
- ➕ Add new tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- ✏ Edit existing tasks
- 📌 View pending tasks
- 👁 Toggle "Show Finished"
- 🔢 Live pending task counter
- 💾 Persistent storage using Local Storage

---

## 🧠 Technical Implementation

### 🔹 State Management
Uses React Hooks:
- `useState`
- `useEffect`

```javascript
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem('todos')
  return savedTodos ? JSON.parse(savedTodos) : []
})
```

### 🔹 Local Storage Sync

```javascript
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
```

✔ Data persists after refresh  
✔ No backend required  
✔ Pure frontend state persistence  

---

## 🖥 Interface Highlights

- Clean modern purple UI
- Responsive card-based layout
- Separate sections:
  - Home (Pending Tasks)
  - My Tasks
- Dynamic badge showing pending count
- Background visual aesthetic

---

## 📂 Project Structure

```
TODO-LIST/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── bg.jpg
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🛠 Tech Stack

| Technology | Role |
|------------|------|
| HTML5 | Structure |
| CSS3 | Styling & Layout |
| JavaScript (ES6+) | Logic |
| React | UI & State Management |
| Vite | Fast Dev Environment |

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/subhradeepkundu270305/TASK-MANAGER.git
```

Navigate into project:

```bash
cd TASK-MANAGER
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Vite runs at:

```
http://localhost:5173/
```

---

## 🎯 What This Project Demonstrates

✔ Strong understanding of React Hooks  
✔ Functional component architecture  
✔ Controlled inputs  
✔ Conditional rendering  
✔ Derived state (pendingCount)  
✔ Persistent storage integration  
✔ Clean UI structuring  

---

## 📈 Future Improvements

- Drag & drop task reordering
- Due dates & priorities
- Dark/Light mode toggle
- Backend integration (MongoDB / Firebase)
- Authentication system

---

## 👨‍💻 Author

**Subhradeep Kundu**  
CSE Student | Full Stack Developer | Building strong frontend foundations  

---

<div align="center">

### 💡 "Consistency in small projects builds scalable engineers."

</div>
