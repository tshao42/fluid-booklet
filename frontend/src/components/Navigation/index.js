import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = ({ routes }) => {
  const location = useLocation();

  return (
    <nav className="bg-gray-200 p-2">
      <ul className="flex space-x-1">
        {routes.map((route) => (
          <li key={route.path} className="flex-1">
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `flex items-center justify-center py-2 px-4 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-white text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {route.icon && <span className="mr-2">{route.icon}</span>}
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;