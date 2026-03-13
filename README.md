# 🐾 PetVerse - Pet Adoption & Marketplace Platform

**Live Site:** [PetVerse Client](https://sage-medovik-cde81e.netlify.app/)

PetVerse is a comprehensive pet adoption and marketplace platform that connects pet owners, adopters, and pet supply buyers in a safe and user-friendly environment. Built with modern React technologies, it provides a seamless experience for pet adoption, buying pet supplies, and managing listings.

---

## ✨ Key Features

• **🏠 Pet Adoption System** - Browse and adopt pets with detailed profiles, owner information, and adoption forms
• **🛒 Pet Supplies Marketplace** - Buy and sell pet food, accessories, and care products with advanced filtering and search
• **📝 Rich Text Editor** - Create detailed listings with formatted descriptions using MDEditor with markdown support
• **🔐 Secure Authentication** - Firebase-powered login system with Google OAuth integration and profile management
• **📊 Order Management** - Track orders, generate PDF reports, and manage buyer/seller interactions with smooth animations
• **🎨 Modern UI/UX** - Responsive design with Tailwind CSS, DaisyUI components, and interactive elements like tooltips and hover effects

---

## 🛠️ Technologies & Packages Used

### **Core Frontend Framework**
- **React 19.2.0** - Latest React with modern features including the new `use()` hook for context consumption
- **Vite 7.2.4** - Ultra-fast build tool providing instant hot module replacement and optimized production builds

### **Routing & Navigation**
- **React Router DOM 7.13.0** - Client-side routing with nested routes, protected routes, and navigation state management

### **Authentication & Backend**
- **Firebase 12.9.0** - Authentication service providing secure login, Google OAuth, and user profile management
- **Express.js Backend** - RESTful API running on port 3000 with MongoDB integration for data persistence

### **Rich Text & Form Handling**
- **@uiw/react-md-editor 4.0.11** - Full-featured markdown editor with preview for creating rich content descriptions
- **React Hook Form 7.71.1** - Performant form library with built-in validation and minimal re-renders

### **UI Components & Styling**
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for rapid UI development with custom color schemes
- **DaisyUI 5.5.18** - Component library providing pre-built UI elements and themes
- **Lucide React 0.563.0** - Modern icon library with consistent and customizable SVG icons

### **Animations & User Experience**
- **Framer Motion 12.36.0** - Production-ready motion library for smooth animations and page transitions
- **React Tooltip 5.30.0** - Elegant tooltip component for enhanced user interactions
- **React Toastify 11.0.5** - Beautiful notification system for user feedback

### **Data Management & API**
- **@tanstack/react-query 5.90.20** - Powerful data-fetching library for server state management and caching

### **Media & File Handling**
- **React Responsive Carousel 3.2.23** - Touch-friendly carousel component for image galleries and banners

### **PDF Generation & Reports**
- **jsPDF 4.1.0** & **jspdf-autotable 5.0.7** - Generate and download PDF reports for order management

### **Development Tools**
- **ESLint 9.39.1** - Code linting with React-specific rules and hooks validation
- **@vitejs/plugin-react 5.1.1** - React integration for Vite with Fast Refresh support

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase project setup
- MongoDB database (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aion-shahriar/PetVerse-Client.git
   cd PetVerse-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🏗️ Project Structure

```
src/
├── components/common/     # Reusable components (Navbar, Footer, Logo)
├── pages/                # Page components organized by feature
│   ├── HomePage/         # Banner, Categories, Recent Listings
│   ├── ListingsPage/     # Add, Update, My Listings, Details
│   ├── OrdersPage/       # Order management with animations
│   └── AuthPage/         # Login, Register, Social Auth
├── contexts/             # React Context for global state
├── hooks/                # Custom hooks (useAuth)
├── Routes/               # Route configuration and protection
├── firebase/             # Firebase configuration
└── layouts/              # Page layouts (Root, Auth)
```

---

## 🎯 Core Functionality

### Pet Adoption
- Browse available pets with detailed profiles
- Contact owners directly through the platform
- Free adoption process with zero pricing

### Marketplace
- List pet supplies with rich descriptions
- Advanced filtering by category and search
- Secure order placement and tracking

### User Management
- Firebase authentication with Google integration
- Profile management with photo upload
- Protected routes for authenticated features

### Order System
- Real-time order tracking
- PDF report generation for order history
- Animated UI feedback for better UX

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Developer:** Aion Shahriar  
**Repository:** [PetVerse-Client](https://github.com/aion-shahriar/PetVerse-Client)  
**Live Demo:** [PetVerse Platform](https://your-live-site-url.com)

---

*Built with ❤️ for pet lovers and their furry friends* 🐕🐱
