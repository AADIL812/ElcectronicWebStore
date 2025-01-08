import React, { useState } from "react";

const FilterBar = ({ onBrandSearch, onPriceFilter }) => {
  const [brand, setBrand] = useState("");
  const [lowerPrice, setLowerPrice] = useState("");
  const [upperPrice, setUpperPrice] = useState("");

  const handleSearch = () => {
    onBrandSearch(brand);
  };

  const handlePriceFilter = () => {
    onPriceFilter(lowerPrice, upperPrice);
  };

  return (
    <div className="filter-bar">
      <div>
        <input
          type="text"
          placeholder="Search by brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Min Price"
          value={lowerPrice}
          onChange={(e) => setLowerPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={upperPrice}
          onChange={(e) => setUpperPrice(e.target.value)}
        />
        <button onClick={handlePriceFilter}>Filter</button>
      </div>
    </div>
  );
};

export default FilterBar;
