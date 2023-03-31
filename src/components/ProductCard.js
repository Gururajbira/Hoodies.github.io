import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style1.css';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart'

const ProductCard = (props) => {

    const { addItem } = useCart();

    return (
        <>
            <div className="col-md-4">
                <Card className='product-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.cover} height={'200'} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text> Rating : {props.rating}</Card.Text>
                        <div className='knowmore'>
                            <NavLink to={`/productinfo/${props.id}`}><Button variant="outline-secondary">Know More</Button></NavLink>
                            <Button className='addtocartbtn' variant="success" onClick={() => addItem(props.item)} >Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ProductCard