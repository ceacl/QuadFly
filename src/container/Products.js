import React, { Component } from 'react'


class Products extends Component
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        console.log("Hola");
    }

    render() 
    {
        return (
            <div>
                Products
            </div>
        )
    }
}

export default Products;