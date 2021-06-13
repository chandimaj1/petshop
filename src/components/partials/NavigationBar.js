import React from 'react';


import logo from './logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';



function NavigationBar() {
  return (
    <>
       <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" style={{ fontSize: '28px', 'marginTop' : '5px', fontWeight: '700'}}>
                <Link to='/'>

          Logo 

          	</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#">
                <Link to='/'>
                Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#">  <Link to='/shop'>
                Pets
                </Link></Nav.Link>

              <Nav.Link href="#">  <Link to='/about'>
                About
                </Link></Nav.Link>
              <Nav.Link href="/contact">  <Link to='/contact'>
                Contact
                </Link></Nav.Link>



            </Nav>

       
    


                   <Nav>
      <Nav.Link href="#deets">  <Link to='/login'>
                Account
                </Link></Nav.Link>
 
		<div className="mini-cart text-right">
									<ul>
										<li>

											<a className="cart-icon" href="#" style={{ padding: "3px"}}>
												
														 <Link to='/checkout'>
                	<i className="zmdi zmdi-shopping-cart"></i>
												<span>3</span>

                </Link>
                
											

											</a>
											<div className="mini-cart-brief text-left">
												<div className="cart-items">
													<p className="mb-0">You have <span>03 items</span> in your shopping bag</p>
												</div>
												<div className="all-cart-product clearfix">
													<div className="single-cart clearfix">
														<div className="cart-photo">
															<a href="#"><img src="img/cart/1.jpg" alt="" /></a>
														</div>
														<div className="cart-info">
															<h5><a href="#">dummy product name</a></h5>
															<p className="mb-0">Price : $ 100.00</p>
															<p className="mb-0">Qty : 02 </p>
															<span className="cart-delete"><a href="#"><i className="zmdi zmdi-close"></i></a></span>
														</div>
													</div>
													<div className="single-cart clearfix">
														<div className="cart-photo">
															<a href="#"><img src="img/cart/2.jpg" alt="" /></a>
														</div>
														<div className="cart-info">
															<h5><a href="#">dummy product name</a></h5>
															<p className="mb-0">Price : $ 300.00</p>
															<p className="mb-0">Qty : 01 </p>
															<span className="cart-delete"><a href="#"><i className="zmdi zmdi-close"></i></a></span>
														</div>
													</div>
												</div>
												<div className="cart-totals">
													<h5 className="mb-0">Total <span className="floatright">$500.00</span></h5>
												</div>
												<div className="cart-bottom  clearfix">

  <Link to='/cart'  className="button-one floatleft text-uppercase" data-text="View cart">
                View Cart
                </Link>

  <Link to='/checkout'  className="button-one floatright text-uppercase" data-text="Check out">
                Check out
                </Link>
												</div>
											</div>
										</li>
									</ul>
								</div>


    </Nav>

          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default NavigationBar;
