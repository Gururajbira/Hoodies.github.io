import React from 'react'
import pData from '../ProductData';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const ProductInfo = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <>
           

            {

                pData.map((cval) => {

                    if (id == cval.id) {

                        return (

                            <>
                                <h1 className='text-center cart-product-info my-5 text-info' > Product Info</h1>
                                <div className='container'>

                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <img src={cval.cover} height={"300"} width={'280'} alt='product-img' />
                                        </div>

                                        <div className='col-md-8'>
                                            <h1>{cval.name}</h1>
                                            <h3> Price : {cval.price} INR.</h3>
                                            {/* <p> Color : {cval.color} </p> */}
                                            <Badge bg="success">Color : {cval.color}</Badge>

                                            <p>{cval.description}</p>
                                            <button className='btn btn-secondary '> Add to Cart</button>

                                        </div>
                                    </div>

                                </div>

                            </>

                        )

                    }

                })

            }

        </>
    )
}

export default ProductInfo;