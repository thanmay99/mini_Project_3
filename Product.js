import React, { useEffect, useState } from 'react';
import React,{useRef} from 'react';
import axios from 'axios';

const Product = ({ match }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products/${match.params.id}');
                setProduct(response.data);
        };
        fetchProduct();
    }, [match.params.id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;