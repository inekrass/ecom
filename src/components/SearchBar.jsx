import './SearchBar.css';

function SearchBar({ value, onChange, placeholder = 'Искать в велосипеде' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;

