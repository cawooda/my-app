import { useState } from 'react';
import { Link } from 'react-router';

type Item = {
  id: number;
  name: string;
  path: string;
};

type MenuProps = {
  items: Item[];
};

function Menu({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen)
    return (
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                onClick={toggleMenu}
                viewTransition
                to={`${item.name.toLocaleLowerCase()}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMenu} aria-label="Close Menu">
          ✕
        </button>
      </nav>
    );
  else if (items.length === 0)
    return (
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`${item.path}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  else {
    return (
      <button onClick={toggleMenu} aria-label="Open Menu">
        ☰
      </button>
    );
  }
}
export default Menu;
