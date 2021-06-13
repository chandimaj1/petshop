import React from 'react';
import './Order.css';

import { Link } from 'react-router-dom';


function Order() {
  return (
    <div className="orderContainer">
			<div className="heading-banner-area overlay-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-banner">
								<div className="heading-banner-title">
									<h2>Order Complete</h2>
								</div>
								<div className="breadcumbs pb-15">
									<ul>
										<li><a href="/">Home</a></li>
										<li>Order</li>
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



									<li ><a href="#" data-toggle="tab">				<Link to='/cart'>cart </Link></a></li>
									<li><a href="#wishlist" data-toggle="tab"><Link to='/wishlist'> wishlist </Link></a></li>
									<li ><a href="#check-out" data-toggle="tab"><Link to='/checkout'> Check out </Link></a></li>
									<li className="active"><a href="#order-complete" data-toggle="tab"><Link to='/order'>Order Complete </Link></a></li>
								</ul>

								<div className="tab-content">
					



								<div className="tab-pane active" id="order-complete">
										<form action="#">
											<div className="thank-recieve bg-white mb-30">
												<p>Thank you. Your order has been received.</p>
											</div>
											<div className="order-info bg-white text-center clearfix mb-30">
												<div className="single-order-info">
													<h4 className="title-1 text-uppercase text-light-black mb-0">order no</h4>
													<p className="text-uppercase text-light-black mb-0"><strong>m 2653257</strong></p>
												</div>
												<div className="single-order-info">
													<h4 className="title-1 text-uppercase text-light-black mb-0">Date</h4>
													<p className="text-uppercase text-light-black mb-0"><strong>june 15, 2016</strong></p>
												</div>
												<div className="single-order-info">
													<h4 className="title-1 text-uppercase text-light-black mb-0">Total</h4>
													<p className="text-uppercase text-light-black mb-0"><strong>$ 170.00</strong></p>
												</div>
												<div className="single-order-info">
													<h4 className="title-1 text-uppercase text-light-black mb-0">payment method</h4>
													<p className="text-uppercase text-light-black mb-0"><a href="#"><strong>check payment</strong></a></p>
												</div>
											</div>
											<div className="shop-cart-table check-out-wrap">
												<div className="row">
													<div className="col-md-6 col-sm-6 col-sm-12">
														<div className="our-order payment-details pr-20">
															<h4 className="title-1 title-border text-uppercase mb-30">our order</h4>
															<table>
																<thead>
																	<tr>
																		<th><strong>Product</strong></th>
																		<th className="text-right"><strong>Total</strong></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Dummy Product Name  x 2</td>
																		<td className="text-right">$86.00</td>
																	</tr>
																	<tr>
																		<td>Dummy Product Name  x 1</td>
																		<td className="text-right">$69.00</td>
																	</tr>
																	<tr>
																		<td>Cart Subtotal</td>
																		<td className="text-right">$155.00</td>
																	</tr>
																	<tr>
																		<td>Shipping and Handing</td>
																		<td className="text-right">$15.00</td>
																	</tr>
																	<tr>
																		<td>Vat</td>
																		<td className="text-right">$00.00</td>
																	</tr>
																	<tr>
																		<td>Order Total</td>
																		<td className="text-right">$170.00</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div className="col-md-6 col-sm-6 col-sm-12 mt-xs-30">
														<div className="payment-method  pl-20">
															<h4 className="title-1 title-border text-uppercase mb-30">payment method</h4>
															<div className="payment-accordion">
																<h3 className="payment-accordion-toggle active">Direct Bank Transfer</h3>
																<div className="payment-content default">
																	<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
																</div> 
																<h3 className="payment-accordion-toggle">Cheque Payment</h3>
																<div className="payment-content">
																	<p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
																</div>
																<h3 className="payment-accordion-toggle">PayPal</h3>
																<div className="payment-content">
																	<p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
																	<a href="#"><img src="img/payment/1.png" alt="" /></a>
																	<a href="#"><img src="img/payment/2.png" alt="" /></a>
																	<a href="#"><img src="img/payment/3.png" alt="" /></a>
																	<a href="#"><img src="img/payment/4.png" alt="" /></a>
																</div>
																<button className="button-one submit-button mt-15" data-text="place order" type="submit">place order</button>			
															</div>															
														</div>
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

export default Order;
