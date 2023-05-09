import React, { useState } from 'react';
import Product from './Product';

const ProductsSection = () => {
    const [modelShort, setModelShort] = useState('canyon-comfort-scooter');

    console.log(modelShort);
    return (
        <>
            <Product modelShort={modelShort} stateChanger={setModelShort} />
        </>
    );
};

export default ProductsSection;