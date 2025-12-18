import { useEffect } from 'react';
import './ProductModal.css';

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__overlay"></div>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        
        <div className="modal__body">
          <div className="modal__image-wrapper">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal__image"
            />
          </div>
          
          <div className="modal__info">
            <h2 className="modal__title">{product.name}</h2>
            <p className="modal__description">{product.description}</p>
            <div className="modal__footer">
              <p className="modal__price">{product.price.toLocaleString('ru-RU')} ₽</p>
              <button className="modal__buy-button">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

