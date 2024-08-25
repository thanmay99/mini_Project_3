import React, { useEffect, useState } from 'react';
import React, {useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Link to={'/product/${product.id}'}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;