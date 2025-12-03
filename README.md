# My App

View Life Demo: [text](https://my-app-two-ebon-80.vercel.app/)

A modern, full-featured React application for contact management and dashboard functionality. Built with cutting-edge technologies including React 19, TypeScript, Vite, and Tailwind CSS for a fast, type-safe development experience.

## Features

- **Fast Development & Build** - Powered by Vite for lightning-fast HMR and optimized production builds
- **Type Safety** - Full TypeScript support for robust, maintainable code
- **Beautiful UI** - Tailwind CSS + DaisyUI for responsive, modern interfaces
- **Contact Management** - Create, read, update, and delete contacts with localStorage persistence
- **Component Architecture** - Modular, reusable components with clear separation of concerns
- **Client-Side Routing** - React Router v7 for seamless navigation with layout persistence
- **Persistent Navigation** - Menu appears on all pages via MainLayout wrapper
- **Dynamic Forms** - Contact form builds itself from structured FormField data
- **Theme System** - Context-based theming for light/dark mode support
- **Authentication Ready** - Includes Firebase integration and auth scaffolding
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Code Quality** - ESLint and Prettier configured for consistent code style

## Project Structure

```
src/
├── appConfig/          # Application configuration (menu items, etc.)
├── auth/               # Authentication components (Login, Register)
├── components/         # Reusable UI components
│   ├── ContactDisplay.tsx
│   ├── ContactLink.tsx
│   ├── ContactList.tsx
│   ├── Dashboard.tsx
│   └── Menu.tsx
├── data/              # Mock/sample data
├── features/          # API functions and business logic (api.ts)
├── forms/             # Form components (ContactForm.tsx)
├── layouts/           # Layout wrapper components
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx  # Main app layout with persistent menu
├── pages/             # Page components for routing
├── types/             # TypeScript type definitions
├── ThemeContext/      # Theme provider and context
├── App.tsx            # Main application component
├── AppRoutes.tsx      # Route configuration
├── main.tsx           # Application entry point
├── App.css            # Global styles
└── index.css          # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cawooda/my-app.git
cd my-app

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
# Build and type-check
npm run build

# Preview the production build
npm run preview
```

## 📚 Usage

### Navigation

The app includes a dashboard with a menu system for navigating between pages:

- **Home** - Landing page
- **Contacts** - Contact management interface
- **About** - Application information

### Contact Management

#### View Contacts

Navigate to the Contacts page to see all stored contacts.

#### Add a Contact

Click the "New" button to create a new contact via the contact form.

#### Edit a Contact

Click on a contact to view details and make edits.

#### Delete a Contact

Use the delete option from the contact display view.

Contacts are persisted to browser localStorage and will persist across sessions.

### Navigation & Layout

The app uses a `MainLayout` component that wraps all routes, ensuring the menu persists across page navigation. This provides a consistent user experience throughout the application.

### Dynamic Contact Form

The `ContactForm` component uses a structured data format to dynamically build form fields. Each field is defined as a `FormField` object containing metadata:

```typescript
type FormField = { name: string; value: string; type: string };
```

The form automatically generates input elements and textareas based on the field type, making it easy to add or modify fields without changing JSX.

## 🛠️ API Reference

### Contact API (`src/features/api.ts`)

#### `getAllContacts(): Contact[]`

Retrieves all contacts from storage. Initializes with dummy data if empty.

#### `getContact(id: string): Contact`

Retrieves a single contact by ID. Throws error if not found.

#### `createContact(newContact: Contact): Contact`

Creates and stores a new contact. Returns the created contact.

#### `updateContact(id: string, updatedContact: Partial<Contact>): Contact | null`

Updates an existing contact with new values.

#### `deleteContact(id: string): boolean`

Deletes a contact by ID. Returns true on success.

## 🏗️ Technology Stack

| Technology   | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 19.2.0  | UI library              |
| React Router | 7.9.6   | Client-side routing     |
| TypeScript   | 5.9.3   | Type safety             |
| Vite         | 7.2.4   | Build tool & dev server |
| Tailwind CSS | 4.1.17  | Utility-first CSS       |
| DaisyUI      | 5.5.5   | Component library       |
| Firebase     | 12.6.0  | Backend services        |
| ESLint       | 9.39.1  | Code linting            |
| Prettier     | 3.7.3   | Code formatting         |

## 📋 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## 🎨 Styling

This project uses Tailwind CSS with DaisyUI for a component library. Custom styles can be added to `src/App.css` and `src/index.css`.

### Tailwind Configuration

Tailwind is configured via `@tailwindcss/vite` for optimal performance. Refer to `tailwind.config.js` for customization options.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root for environment-specific configuration:

```env
VITE_API_URL=http://localhost:5173
```

### TypeScript Configuration

- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - App-specific TypeScript options
- `tsconfig.node.json` - Node/Vite build TypeScript options

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Build Errors

Ensure TypeScript builds correctly:

```bash
npm run build
```

### Dependencies Issues

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Code Quality

### Linting

```bash
npm run lint
```

### Formatting

The project uses Prettier for code formatting. Configure your IDE to format on save using the Prettier extension.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Andrew Cawood**

- GitHub: [@cawooda](https://github.com/cawooda)

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [DaisyUI Documentation](https://daisyui.com)

## 📞 Support

For questions or issues, please open an [issue](https://github.com/cawooda/my-app/issues) on GitHub.
