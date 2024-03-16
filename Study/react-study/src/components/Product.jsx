import React, {useState, useEffect} from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  
  useEffect(() => {
    fetch(`data/${checked? 'sale_': ''}products.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Load data from network");
        setProducts(data);
      });
    return () => {
      console.log("Clean page");
    };
  }, [checked]);

  return (
    <div>
        <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
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
