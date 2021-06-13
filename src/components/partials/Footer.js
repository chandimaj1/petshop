import React from 'react';


import logo from './logo.png';



function Footer() {
  return (
    <>
  <footer>
				
				<div className="footer-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
								<div className="single-footer">
									<h3 className="footer-title  title-border">Contact Us</h3>
									<ul className="footer-contact">
										<li><span>Address :</span>28 Green Tower, Street Name,<br />New York City, USA</li>
										<li><span>Cell-Phone :</span>012345 - 123456789</li>
										<li><span>Email :</span>your-email@gmail.com</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
								<div className="single-footer">
									<h3 className="footer-title  title-border">accounts</h3>
									<ul className="footer-menu">
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Account</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Wishlist</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>My Cart</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Sign In</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Check out</a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
								<div className="single-footer">
									<h3 className="footer-title  title-border">shipping</h3>
									<ul className="footer-menu">
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>New Products</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Top Sellers</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Manufactirers</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Suppliers</a></li>
										<li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Specials</a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 hidden-sm col-xs-12">
								<div className="single-footer">
									<h3 className="footer-title  title-border">You Might Like</h3>
									<div className="footer-product">
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="footer-thumb">
													<a href="#"><img src="img/banners/cat2.jpg" alt="" /></a>
													<div className="footer-thumb-info">
														<p><a href="#">Pet Name</a></p>
														<h4 className="price-3">$ 60.00</h4>
													</div>
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="footer-thumb">
													<a href="#"><img src="img/banners/cat3.jpg" alt="" /></a>
													<div className="footer-thumb-info">
														<p><a href="#">Pet Name</a></p>
														<h4 className="price-3">$ 60.00</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className="copyright-area">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-xs-12">
								<div className="copyright">
									<p className="mb-0">&copy; <a href="#" target="_blank"> Company Name  </a> 2021. All Rights Reserved.</p>
								</div>
							</div>
							<div className="col-sm-6 col-xs-12">
								<div className="payment  text-right">
									<a href="#"><img src="img/payment/1.png" alt="" /></a>
									<a href="#"><img src="img/payment/2.png" alt="" /></a>
									<a href="#"><img src="img/payment/3.png" alt="" /></a>
									<a href="#"><img src="img/payment/4.png" alt="" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</footer>
    </>
  );
}

export default Footer;



	