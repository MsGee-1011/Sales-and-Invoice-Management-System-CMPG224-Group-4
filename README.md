# Sales and Invoice Management System (SIMS)

A comprehensive web-based system for managing sales, invoices, customers, and products for small to medium-sized businesses.

## 👥 Team Members

| Role | Member | Responsibilities |
|------|--------|------------------|
| Project Manager | AN Ngcobo | Project coordination, documentation, team management |
| Backend Lead & System Architect | M Motsumi | Django architecture, system design, backend development |
| Backend Developer & Database Admin | L Phiri | PostgreSQL database, models, data management |
| Backend API Developer | Ratilodi Sego | REST API development, authentication |
| Frontend Lead & DevOps | Masego Mathikge | React application, deployment, integration |
| UI/UX Designer | Mbali Chauke | Interface design, user experience, Bootstrap styling |
| Frontend Feature Developer | SS Nkhoma | Page development, API integration |
| Quality Assurance Tester | AN Ngcobo | Testing, bug reporting, quality control |

## 🚀 Features

### Core Features (In Scope)
- ✅ **Customer Management** - CRUD operations for customer profiles
- ✅ **Product Management** - Inventory management with pricing
- ✅ **Sales Processing** - Record and track sales transactions  
- ✅ **Invoice Generation** - Automatic PDF invoice creation
- ✅ **Reporting & Analytics** - Sales reports and financial summaries
- ✅ **User Access Control** - Role-based permissions (Admin, Sales Staff, Accountant)

### Out of Scope
- ❌ External accounting system integration
- ❌ Online payment gateway integration
- ❌ Advanced inventory forecasting
- ❌ Mobile application development

## 🛠️ Tech Stack

### Backend
- **Python 3.8+** with **Django** & **Django REST Framework**
- **PostgreSQL** Database
- **JWT Authentication**
- **REST API Architecture**

### Frontend
- **React.js** with **TypeScript**
- **Bootstrap 5** for styling
- **Axios** for API calls
- **React Router** for navigation

### DevOps
- **Git** with **GitHub** for version control
- **Docker** for containerization
- **Postman** for API testing

## 📋 Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL
- Git

## 🏃‍♂️ Quick Start

### Backend Setup
```bash
cd backend
python -m venv venv

# Windows:
venv\Scripts\activate

# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
