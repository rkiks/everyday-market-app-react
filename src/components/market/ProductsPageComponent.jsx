import React, { Component, useState } from 'react';
import CategoryMenuComponent from './CategoryMenuComponent';
import image1 from '../../assets/prod_1.jpg';
import image2 from '../../assets/prod_3.jpg';
import image3 from '../../assets/prod_4.png';
import image4 from '../../assets/prod_5.jpg';
import './ProductsPage.css'

const products = {
  Shampoo: [
    { name: 'Aloe Vera Shampoo', image: image1 }
    
  ],
  Vitamins: [
    { name: 'Vitamins', image: image2 },
   
  ],
  BathGoodies: [
    { name: 'Bath Set', image: image3 },
    
  ],
  Cologne: [
    { name: 'Cologne Set', image: image4 },
  ]
};

class ProductsPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null
    };
  }

  handleSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory } = this.state;
    const selectedProducts = selectedCategory ? products[selectedCategory] : [];

    return (
      <div>
        
        <CategoryMenuComponent onSelectCategory={this.handleSelectCategory} />
        {selectedCategory && (
          <div>
            <h3>{selectedCategory}</h3>
            <ul className='list'>
              {selectedProducts.map((product, index) => (
                <li key={index}>
                  <span><strong>{product.name}</strong></span>
                  <img src={product.image} className='image' alt='images' />
                  
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}



export default ProductsPageComponent;