import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div style={{ height: '300px' }} className='bg-violet-500 mt-6 container mx-auto w-full p-5 text-white'>
            <div className='flex justify-between'>

                {/* intro */}
                <div style={{ width: '400px' }}>
                    <h5 className='text-xl font-bold'><i class="fa-solid fa-truck-fast me-1"></i>
                        Daily cart</h5>
                    <p>Designed and built with all the love in the world <br /> by the Bootstrap team with the help of our <br /> contributors. <br /><br />
                        Code licensed MIT, docs CC BY 3.0. <br /><br />
                        Currently v5.3.3.</p>
                </div>

                {/* Links */}
                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                    <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart Page</Link>
                    <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist Page</Link>
                </div>

                {/* Guides */}
                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Guides</h5>
                    <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://react.dev/">React</a>
                    <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
                    <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React Router DOM</a>
                </div>

                {/* Contact */}
                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Contact Us</h5>
                    <div className='flex justify-between mt-3'>
                        <input type="text" placeholder='Email...' className='rounded form-control me-2' />
                        <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://x.com/?lang=en"><i className="fa-brands fa-twitter"></i></a>
                        <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                        <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                        <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                        <a style={{ textDecoration: 'none', color: 'white' }} target='_blank' href="https://github.com/"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            <p className='text-center mt-3'>Copyright &copy; January 2024 Batch,E cart. Built with React</p>
        </div>
    )
}

export default Footer