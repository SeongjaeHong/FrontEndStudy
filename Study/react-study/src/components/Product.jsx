import React, { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  }, [checked]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    setError();
    return <p>{error}</p>;
  }

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only hot sale</label>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
