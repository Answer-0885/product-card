import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  title: string;
  origin?: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  // Форматирование цены
  const formatPrice = () => 
    new Intl.NumberFormat(undefined, { 
      style: 'currency', 
      currency 
    }).format(price / 100);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        {origin && <p className="product-origin">Страна: {origin}</p>}
        <p className="product-price">{formatPrice()}</p>
      </div>
    </div>
  );
};

export default ProductCard;