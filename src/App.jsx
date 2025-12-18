import { useState } from 'react';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import SearchBar from './components/SearchBar';
import { mockProducts } from './api/mockApi';
import './App.css';

function App() {
  const [products] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Велосипед</h1>
        <SearchBar 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
      </header>
      
      <main className="app__main">
        <div className="app__products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))
          ) : (
            <div className="app__no-products">Товары не найдены</div>
          )}
        </div>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
