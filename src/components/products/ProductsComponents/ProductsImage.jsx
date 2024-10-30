import React from 'react'

export const ProductsImage = (props) => {
     const {image}= props;
    return (
        <div>
            <img src={image} alt= "no image"/>
        </div>
    );
};


