import React from 'react'
import ProductCard from './ProductCard';
// import ProductsCard from './ProductCard';
import pData from '../ProductData';




const Home = () => {
  return (
    <>

      <div className='Hoodie-home'> <img src={'./assets/images/Home_hoodies1.webp'} alt="Hoodies01" /></div>
      <h1 className='text-center Heading-style my-3 text-info'> Winter Special Hoodies</h1>
      <h2 className='text-center Heading-style-info my-3 text-info'> We provide Hoodies for men and women.</h2>
      <div className='container'>
        <div className='row'>

          {
            pData.map((cval, index) => {
              return (
                <ProductCard

                  id={cval.id}
                  name={cval.name}
                  price={cval.price}
                  cover={cval.cover}
                  color={cval.color}
                  rating={cval.rating}
                  item={cval}
                />

              )
            })
          }

        </div>
      </div>
      <div className='about-img'> <img src='./assets/images/about1.jpg' alt='about1-img' /> </div>

    </>
  )
}

export default Home;