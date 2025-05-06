import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch(() => setError('에러 발생!'))
      .finally(() => setIsLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [isloading, error, products];
}
