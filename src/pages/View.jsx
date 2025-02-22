import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { all } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
const usercart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.whishlistReducer)

  const [product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id);
  console.log(product);

  useEffect(() => {

    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts.find(item => item.id == id));
      setProduct(allProducts.find(item => item.id == id))
    }

  }, [])

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item => item?.id)
    if (existingProduct) {
      alert("Product already exists..")
    } else {
      dispatch(addToWishlist(product))
      alert("Product added to Wishlist")
    }
  }

  const handleCart = () => {
    const existingProduct = usercart?.find(item => item?.id)
    if (existingProduct) {
      alert("Product already exists..")
    } else {
      dispatch(addToWishlist(product))
      alert("Product added to Cart")
    }
  }

  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <div>
            <img src={product?.thumbnail} alt="" />
            <div className='flex justify-between mt-5'>
              <Link> <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button></Link>
              <Link><button onClick={handleCart} className='bg-green-600 rounded text-white p-2'>Add to Cart</button></Link>
            </div>
          </div>

          <div>
            <h3 className='font-bold'>PID: {product?.id}</h3>
            <h1 className='text-5xl font-bold'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <p>
              <span className='font-bold'>Description</span>: {product?.description}
            </p>
            <h3 className='font-bold mt-4'>Client Reviews</h3>
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map(item => (
                  <div key={item.date} className='shadow border rounded p-2 mb-2'>
                    <h5>
                      <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                    </h5>
                    <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
                  </div>
                ))
                :
                <div className='font-bolder text-red-600'>No Reviews Yet !!</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View