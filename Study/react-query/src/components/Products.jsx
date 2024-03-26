import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", checked],
    queryFn: async () => {
      console.log("fetching", checked);
      const res = await fetch(`data/${checked ? "sale_" : ""}products.json`);
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // Save cache for 5 minutes
  });

  if (isLoading) {
    console.log("Loading...");
    return <p>Loading...</p>;
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
