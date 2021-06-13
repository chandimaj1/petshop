import React from 'react';
import './Wishlist.css';

import { Link } from 'react-router-dom';


function Wishlist() {
  return (
    <div className="wishlistContainer">
			<div className="heading-banner-area overlay-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-banner">
								<div className="heading-banner-title">
									<h2>Wishlist</h2>
								</div>
								<div className="breadcumbs pb-15">
									<ul>
										<li><a href="/">Home</a></li>
										<li>Wishlist</li>
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
									<li className="active"><a href="#wishlist" data-toggle="tab"><Link to='/wishlist'> wishlist </Link></a></li>
									<li ><a href="#check-out" data-toggle="tab"><Link to='/checkout'> Check out </Link></a></li>
									<li ><a href="#order-complete" data-toggle="tab"><Link to='/order'>Order Complete </Link></a></li>
								</ul>

								<div className="tab-content">
					



			<div class="tab-pane active" id="wishlist">
										<form action="#">
											<div class="shop-cart-table">
												<div class="table-content table-responsive">
													<table>
														<thead>
															<tr>
																<th class="product-thumbnail">Product</th>
																<th class="product-price">Price</th>
																<th class="product-stock">stock status</th>
																<th class="product-add-cart">Add to cart</th>
																<th class="product-remove">Remove</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td class="product-thumbnail  text-left">
																	<div class="single-product">
																		<div class="product-img">
																			<a href="single-product.html"><img src="img/product/2.jpg" alt="" /></a>
																		</div>
																		<div class="product-info">
																			<h4 class="post-title"><a class="text-light-black" href="#">dummy product name</a></h4>
																			<p class="mb-0">Color :  Black</p>
																			<p class="mb-0">Size : SL</p>
																		</div>
																	</div>
																</td>
																<td class="product-price">$56.00</td>
																<td class="product-stock">in stock</td>
																<td class="product-add-cart">
																	<a class="text-light-black" href="#"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
																</td>
																<td class="product-remove">
																	<a href="#"><i class="zmdi zmdi-close"></i></a>
																</td>
															</tr>
															<tr>
																<td class="product-thumbnail  text-left">
																	<div class="single-product">
																		<div class="product-img">
																			<a href="single-product.html"><img src="img/product/12.jpg" alt="" /></a>
																		</div>
																		<div class="product-info">
																			<h4 class="post-title"><a class="text-light-black" href="#">dummy product name</a></h4>
																			<p class="mb-0">Color :  Black</p>
																			<p class="mb-0">Size :     SL</p>
																		</div>
																	</div>
																</td>
																<td class="product-price">$56.00</td>
																<td class="product-stock">in stock</td>
																<td class="product-add-cart">
																	<a class="text-light-black" href="#"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
																</td>
																<td class="product-remove">
																	<a href="#"><i class="zmdi zmdi-close"></i></a>
																</td>
															</tr>
															<tr>
																<td class="product-thumbnail  text-left">
																	<div class="single-product">
																		<div class="product-img">
																			<a href="single-product.html"><img src="img/product/6.jpg" alt="" /></a>
																		</div>
																		<div class="product-info">
																			<h4 class="post-title"><a class="text-light-black" href="#">dummy product name</a></h4>
																			<p class="mb-0">Color :  Black</p>
																			<p class="mb-0">Size :     SL</p>
																		</div>
																	</div>
																</td>
																<td class="product-price">$56.00</td>
																<td class="product-stock">in stock</td>
																<td class="product-add-cart">
																	<a class="text-light-black" href="#"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
																</td>
																<td class="product-remove">
																	<a href="#"><i class="zmdi zmdi-close"></i></a>
																</td>
															</tr>
														</tbody>
													</table>
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

export default Wishlist;
