---
sidebar_position: 2
---

# Get Started

## Getting Started with Poll Automation System

This guide will help you set up Poll Automation System on your local machine for development.

You can clone the repository or directly download the setup file and run it to start the setup process.

## 🚀 Clone the Repository (Optional)
```bash
git clone https://github.com/continuousactivelearning/poll-question-gen.git
cd poll-question-gen
```

## ⚙️ Setup Using Installation Scripts
Poll Automation System uses a custom setup-unix.sh and setup-win.ps1 scripts to help initialize the development environment (both backend and frontend).

## 📦 Run the Setup
```bash
chmod +x scripts/setup-unix.sh
./scripts/setup-unix.sh
```

This script will:
- Check required dependencies
- Install backend dependencies
- Install frontend dependencies
- Set up .env files
- Installs the CLI

> 🛠️ The script is interactive and will guide you step-by-step.

## 🧪 Run in Development Mode
If you want to run services manually:

### 🖥 Frontend
```bash
poll-question-gen start frontend
```

### ⚙️ Backend
```bash
poll-question-gen start backend
```

## 📦 Build Docusaurus (Docs)
If you're contributing to the documentation:
```bash
poll-question-gen start docs
```

Visit: http://localhost:3000/docs
 