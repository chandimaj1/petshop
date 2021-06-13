import React from 'react';
import './Cart.css';

import { Link } from 'react-router-dom';


function Cart() {
  return (
    <div className="cartContainer">
			<div className="heading-banner-area overlay-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-banner">
								<div className="heading-banner-title">
									<h2>Cart</h2>
								</div>
								<div className="breadcumbs pb-15">
									<ul>
										<li><a href="/">Home</a></li>
										<li>Cart</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


	<div className="shopping-cart-area  pt-80 pb-80">
				<div className="container">	
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="shopping-cart">
								<ul className="cart-page-menu row clearfix mb-30">



									<li className="active"><a href="#" data-toggle="tab">				<Link to='/cart'>cart </Link></a></li>
									<li><a href="#wishlist" data-toggle="tab"><Link to='/wishlist'> wishlist </Link></a></li>
									<li><a href="#check-out" data-toggle="tab"><Link to='/checkout'> Check out </Link></a></li>
									<li><a href="#order-complete" data-toggle="tab"><Link to='/order'>Order Complete </Link></a></li>
								</ul>

								<div className="tab-content">
									<div className="tab-pane active" id="shopping-cart">
										<form action="#">
											<div className="shop-cart-table">
												<div className="table-content table-responsive">
													<table>
														<thead>
															<tr>
																<th className="product-thumbnail">Product</th>
																<th className="product-price">Price</th>
																<th className="product-quantity">Quantity</th>
																<th className="product-subtotal">Total</th>
																<th className="product-remove">Remove</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td className="product-thumbnail  text-left">
																	<div className="single-product">
																		<div className="product-img">
																			<a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
																		</div>
																		<div className="product-info">
																			<h4 className="post-title"><a className="text-light-black" href="#">dummy product name</a></h4>
																			<p className="mb-0">Color :  Black</p>
																			<p className="mb-0">Size :     SL</p>
																		</div>
																	</div>
																</td>
																<td className="product-price">$56.00</td>
																<td className="product-quantity">
																	<div className="cart-plus-minus">
																		<input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
																	</div>
																</td>
																<td className="product-subtotal">$112.00</td>
																<td className="product-remove">
																	<a href="#"><i className="zmdi zmdi-close"></i></a>
																</td>
															</tr>
															<tr>
																<td className="product-thumbnail  text-left">
																	<div className="single-product">
																		<div className="product-img">
																			<a href="single-product.html"><img src="img/product/12.jpg" alt="" /></a>
																		</div>
																		<div className="product-info">
																			<h4 className="post-title"><a className="text-light-black" href="#">dummy product name</a></h4>
																			<p className="mb-0">Color :  Black</p>
																			<p className="mb-0">Size :     SL</p>
																		</div>
																	</div>
																</td>
																<td className="product-price">$56.00</td>
																<td className="product-quantity">
																	<div className="cart-plus-minus">
																		<input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
																	</div>
																</td>
																<td className="product-subtotal">$112.00</td>
																<td className="product-remove">
																	<a href="#"><i className="zmdi zmdi-close"></i></a>
																</td>
															</tr>
															<tr>
																<td className="product-thumbnail  text-left">
																	<div className="single-product">
																		<div className="product-img">
																			<a href="single-product.html"><img src="img/product/6.jpg" alt="" /></a>
																		</div>
																		<div className="product-info">
																			<h4 className="post-title"><a className="text-light-black" href="#">dummy product name</a></h4>
																			<p className="mb-0">Color :  Black</p>
																			<p className="mb-0">Size :     SL</p>
																		</div>
																	</div>
																</td>
																<td className="product-price">$56.00</td>
																<td className="product-quantity">
																	<div className="cart-plus-minus">
																		<input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
																	</div>
																</td>
																<td className="product-subtotal">$112.00</td>
																<td className="product-remove">
																	<a href="#"><i className="zmdi zmdi-close"></i></a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6 col-sm-6 col-xs-12">
													<div className="customer-login mt-30">
														<h4 className="title-1 title-border text-uppercase">coupon discount</h4>
														<p className="text-gray">Enter your coupon code if you have one!</p>
														<input type="text" placeholder="Enter your code here." />
														<button type="submit" data-text="apply coupon" className="button-one submit-button mt-15">apply coupon</button>
													</div>
												</div>
												<div className="col-md-6 col-sm-6 col-xs-12">
													<div className="customer-login payment-details mt-30">
														<h4 className="title-1 title-border text-uppercase">payment details</h4>
														<table>
															<tbody>
																<tr>
																	<td className="text-left">Cart Subtotal</td>
																	<td className="text-right">$155.00</td>
																</tr>
																<tr>
																	<td className="text-left">Cart Subtotal</td>
																	<td className="text-right">$15.00</td>
																</tr>
																<tr>
																	<td className="text-left">Vat</td>
																	<td className="text-right">$00.00</td>
																</tr>
																<tr>
																	<td className="text-left">Order Total</td>
																	<td className="text-right">$170.00</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12">
													<div className="customer-login mt-30">
														<h4 className="title-1 title-border text-uppercase">culculate shipping</h4>
														<p className="text-gray">Enter your coupon code if you have one!</p>
														<div className="row">
															<div className="col-md-4 col-sm-4 col-xs-12">
																<input type="text" placeholder="Country"   />
															</div>
															<div className="col-md-4 col-sm-4 col-xs-12">
																<input type="text" placeholder="Region / State"  />
															</div>
															<div className="col-md-4 col-sm-4 col-xs-12">
																<input type="text" placeholder="Post code" />
															</div>
														</div>
														<button type="submit" data-text="get a quote" className="button-one submit-button mt-15">get a quote</button>
													</div>											
												</div>
											</div>
										</form>		
									</div>
					
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>




		
    </div>
  );
}

export default Cart;
