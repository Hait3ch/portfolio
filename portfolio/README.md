# 🎨 Modern Portfolio

A modern, responsive portfolio website built with React 18, Tailwind CSS, and Firebase.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for modern design
- **React Router v6** - Modern routing with latest syntax
- **Material-UI v5** - React component library
- **Firebase v10** - Backend services with modular API
- **Node.js 18** - Runtime environment

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── assets/        # Images and static files
│   ├── App.js         # Main app component
│   └── index.css      # Global styles with Tailwind
├── functions/         # Firebase Cloud Functions
├── public/           # Static files
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Features

### Modern Design
- **Responsive Layout** - Works perfectly on all devices
- **Dark Navigation** - Modern navbar with mobile menu
- **Smooth Animations** - Hover effects and transitions
- **Color-Coded Sections** - Visual hierarchy with custom colors

### TeamBuilder App
- **Player Management** - Add, edit, and delete players
- **Team Generation** - Automatic team balancing
- **Real-time Updates** - Firebase integration
- **Responsive Grid** - Adaptive layout for different screen sizes

### Contact Form
- **Modern Design** - Clean, accessible form
- **Email Integration** - Firebase Functions with Nodemailer
- **Validation** - Client-side form validation

### Projects Showcase
- **Custom Carousel** - Image gallery with navigation
- **Responsive Images** - Optimized for all devices
- **Interactive Elements** - Hover effects and transitions

## 🔥 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (if needed)

### 2. Environment Variables
Create a `.env` file in the portfolio directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 3. Deploy Functions
```bash
cd functions
npm install
npm run deploy
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
firebase deploy
```

## 🎯 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- **Functional Components** - All components use modern React patterns
- **Tailwind CSS** - Utility-first styling approach
- **ES6+ Features** - Modern JavaScript syntax
- **Async/Await** - Modern promise handling

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Single column layout
- **Tablet**: 2-column grid
- **Desktop**: 4-column grid for team sections

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue shades for main actions
- **Secondary**: Gray shades for secondary elements
- **Status Colors**: Green, blue, purple for different states

### Components
Custom component classes are defined in `src/index.css`:
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.btn-danger` - Danger/delete buttons
- `.card` - Content containers
- `.input-field` - Form inputs

## 🔧 Troubleshooting

### Common Issues
1. **Dependency Conflicts**: Use `--legacy-peer-deps` flag
2. **Firebase Errors**: Check environment variables
3. **Build Errors**: Clear node_modules and reinstall

### Getting Help
- Check the browser console for errors
- Verify Firebase configuration
- Ensure all dependencies are installed

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Material-UI Documentation](https://mui.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern web technologies**
