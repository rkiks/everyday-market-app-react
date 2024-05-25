import React from 'react';
import './CategoryMenuItem.css';

function CategoryMenuItemComponent({ category, onSelectCategory }) {
  return (
    <button className="menu-item-container" onClick={() => onSelectCategory(category)}>
      {category}
    </button>
  );
}



export default CategoryMenuItemComponent;