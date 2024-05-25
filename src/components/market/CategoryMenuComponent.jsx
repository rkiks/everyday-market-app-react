import React from 'react';
import CategoryMenuItemComponent from './CategoryMenuItemComponent';

const categories = ['Shampoo', 'Vitamins', 'BathGoodies', 'Cologne'];

function CategoryMenuComponent({ onSelectCategory }) {
  return (
    <div>
      <h3>Categories</h3>
      {categories.map((category) => (
        <CategoryMenuItemComponent 
          key={category} 
          category={category} 
          onSelectCategory={onSelectCategory} 
        />
      ))}
    </div>
  );
}

export default CategoryMenuComponent;