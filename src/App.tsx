import { ThemeProvider } from './ThemeContext';

import './App.css';
import Menu from './components/Menu';
import menuItems from './appConfig/menuItems';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />

      <article className="prose lg:prose-xl">
        <h1>Welcome to your New App</h1>
        <p>
          A simple app to get you started with React, TypeScript, and Tailwind
          CSS.
        </p>
      </article>
    </ThemeProvider>
  );
}
