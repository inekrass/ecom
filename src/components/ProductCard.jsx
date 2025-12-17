import './ProductCard.css';

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__image-wrapper">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">{product.price.toLocaleString('ru-RU')} ₽</p>
      </div>
    </div>
  );
}

export default ProductCard;

