import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'


const Cart = () => {
  const navigate = useNavigate()        //navigate to home
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    if (userCart?.length > 0) {
      setCartTotal(userCart?.map(item => item.totalPrice).reduce((a1, a2) => a1 + a2))
    }
  }, [userCart])


  const handleDecrement = (product) => {
    if (product?.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout =(product)=>{
    dispatch(emptyCart())
    alert("Order confirmed... Thank you for Shopping...")
    //redirect to home
    navigate("/")

  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
        {
          userCart?.length > 0 ?
            <>
              <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
              <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-2 border rounded p-5 shadow'>
                  <table className='table-auto w-full'>
                    <thead>
                      <tr>
                        <td className='font-semibold'>#</td>
                        <td className='font-semibold'>Name</td>
                        <td className='font-semibold'>Image</td>
                        <td className='font-semibold'>Quantity</td>
                        <td className='font-semibold'>Price</td>
                        <td className='font-semibold'>...</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        userCart?.map((product, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{product?.title}</td>
                            <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                            <td>
                              <div className='flex'>
                                <button onClick={() => handleDecrement(product)} className='font-bold'>-</button>
                                <input style={{ width: '40px' }} className='border p-1 rounded mx-2' value={product?.quantity} type="text" readOnly />
                                <button onClick={() => dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                              </div>
                            </td>
                            <td>$ {product?.totalPrice}</td>
                            <td><button onClick={() => dispatch(removeCartItem(product?.id))} className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className='float-right mt-5'>
                    <button onClick={() => dispatch(emptyCart(product?.id))} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                    <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop more...</Link>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='border rounded p-5'>
                    <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$ {cartTotal}</span></h2>
                    <hr />
                    <button onClick={handleCheckout} className='bg-green-600 p-2 text-white w-full mt-4'>Checkout</button>
                  </div>

                </div>
              </div>
            </>
            :
            <div className='flex flex-col justify-center items-center'>
              <img width={'600px'} height={'50%'} src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
              <h1 className='text-3xl text-red-600 font-bold'>Your Cart is Empty !!!</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Cart