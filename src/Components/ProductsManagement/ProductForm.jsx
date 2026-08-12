import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error ,setError] =useState('')

    const handleProductSubmit = e =>{
        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if(name.length === 0){
            setError('please provide a product name')
            return;
        }
        else if (price.length === 0) {
            setError('please input price')
            return;
        }
        else if (price < 0) {
            setError('price can not be negative')
            return;
        }
        else if (quantity.length === 0) {
            setError('how many quantity u want');
            return;
        }
        else{
            setError('');
        }
        // console.log(name , price, quantity);
        const newProduct ={
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        
            handleAddProduct(newProduct)
    }

    return (
        <div>
            <p><small style={{color:'red',fontSize: '20px'}}>{error}</small></p>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='product name'/>
                <br />
                <input type="text" name="price" placeholder='product price'/>
                <br />
                <input type="text" name="quantity" placeholder='product quantity'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;