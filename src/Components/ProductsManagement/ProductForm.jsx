import React from 'react';

const ProductForm = () => {
    const handleProductSubmit = e =>{
        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name , price, quantity);
        const newProduct ={
            name,
            price,
            quantity
        }
        console.log(newProduct);
    }

    return (
        <div>
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