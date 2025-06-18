# 📝 Simple Blog Management System (Node.js + TypeScript)

This is a simple blog post management system built using **TypeScript** and **Object-Oriented Programming** principles. It allows you to add, update, delete, search, and filter blog posts directly in memory.

## 📦 Features

- Create blog posts with `id`, `title`, `content`, `author`, and `createdAt`
- Add and delete posts
- Update blog post content, title, or author
- Find posts by ID
- Get all posts or filter by:
  - Author name
  - Keyword in title/content
  - Most recent posts
- Prevent duplicate post IDs

## 🛠 Tech Stack

- Language: **TypeScript**
- Runtime: **Node.js**
- Design Pattern: **OOP (Object-Oriented Programming)**

---

## 📁 Project Structure

src/
├── index.ts # Entry point
├── demos/
│ └── classDemo.ts # class-based implementation
├── models/
│ └── BlogPost.ts # BlogPost class
└── managers/
└── BlogManager.ts # BlogManager class to manage posts

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/robsdagreat/code-2-connect.git
cd code-2-connect
run yarn install
after installation run: "yarn dev or npx ts-node src/index.ts"
