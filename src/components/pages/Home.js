import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
	
		<div className="wrapper" style={{ marginTop: "45px"}}>


			<section className="slider-banner-area clearfix" >
				
				<div className="sidebar-social hidden-xs">
					<div className="table">
						<div className="table-cell">
							<ul>
								<li><a href="#" target="_blank" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>
								<li><a href="#" target="_blank" title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
								<li><a href="#" target="_blank" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>
								<li><a href="#" target="_blank" title="Linkedin"><i className="zmdi zmdi-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="banner-left floatleft">
					
					<div className="slider-banner">
						<div className="single-banner banner-1">
							<a className="banner-thumb" href="#"><img src="img/banners/3.jpg" alt="" /></a>
							<span className="pro-label new-label hidden-md">Parrot</span>
						
						</div>

						<div className="single-banner banner-2">
						<span className="pro-label new-label hidden-md">Dog</span>

					<a className="banner-thumb" href="#"><img src="img/banners/cate-1.jpg" alt="" /></a>
						
						</div>
					</div>
					
				</div>
				<div className="slider-right floatleft">
					
					<div className="slider-area">
						<div className="bend niceties preview-2">
							<div id="ensign-nivoslider" className="slides">
							<span className="pro-label new-label hidden-md">Cat</span>

								<img src="img/banners/hero2.jpg"        style={{ borderRadius: '10px'}}  alt="" title="#slider-direction-1"  />
							
							</div>
							
						
						
						
						</div>
					</div>
					
				</div>
				
				<div className="sidebar-account hidden-xs">
					<div className="table">
						<div className="table-cell">
							<ul>
								<li><a className="search-open" href="#" title="Search"><i className="zmdi zmdi-search"></i></a></li>
								<li><a href="#" title="Login"><i className="zmdi zmdi-lock"></i></a>
									<div className="customer-login text-left">
										<form action="#">
											<h4 className="title-1 title-border text-uppercase mb-30">Registered customers</h4>
											<p className="text-gray">If you have an account with us, Please login!</p>
											<input type="text" name="email" placeholder="Email here..." />
											<input type="password" placeholder="Password" />
											<p><a className="text-gray" href="#">Forget your password?</a></p>
											<button className="button-one submit-button mt-15" data-text="login" type="submit">login</button>
										</form>
									</div>
								</li>
								<li><a href="my-account.html" title="My-Account"><i className="zmdi zmdi-account"></i></a></li>
								<li><a href="wishlist.html" title="Wishlist"><i className="zmdi zmdi-favorite"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				
			</section>
			
	
			
			
	
			
			
			<div className="purchase-online-area pt-80">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<h2 className="title-border">Featured Pets</h2>
							</div>
						</div>
					</div>
					<div className="row">
					
						<div className="col-lg-12">
							
							<div className="tab-content">


								<div className="tab-pane active" id="best-seller">
									<div className="row">
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label new-label">new</span>
												<Link to='/pet'> <img src="img/product/2.jpg" alt="" /> </Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 56.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label sale-label">Sale</span>
												<Link to='/pet'><img src="img/product/9.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 36.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<Link to='/pet'><img src="img/product/8.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 66.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<Link to='/pet'><img src="img/product/6.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 57.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label new-label">new</span>
												<Link to='/pet'><img src="img/product/4.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 55.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label sale-label">Sale</span>
												<Link to='/pet'><img src="img/product/3.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 65.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-xs-12 hidden-md hidden-sm">
											<div className="product-img">
												<Link to='/pet'><img src="img/product/7.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 60.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-xs-12 hidden-md hidden-sm">
											<div className="product-img">
												<Link to='/pet'><img src="img/product/5.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 66.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
									</div>
								</div>
					
								<div className="tab-pane" id="discounts">
									<div className="row">
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label new-label">new</span>
												<Link to='/pet'><img src="img/product/8.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 56.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
										
										
										<div className="single-product col-lg-3 col-md-4 col-sm-4 col-xs-12">
											<div className="product-img">
												<span className="pro-label sale-label">Sale</span>
												<Link to='/pet'><img src="img/product/9.jpg" alt="" /></Link>
												<div className="product-action clearfix">
													<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-toggle="modal"  data-target="#productModal" title="Quick View"><i className="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="zmdi zmdi-refresh"></i></a>
													<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div className="product-info clearfix">
												<div className="fix">
													<h4 className="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p className="floatright hidden-sm">Dog</p>
												</div>
												<div className="fix">
													<span className="pro-price floatleft">$ 36.20</span>
													<span className="pro-rating floatright">
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
														<a href="#"><i className="zmdi zmdi-star-half"></i></a>
													</span>
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
			



			<div className="discount-product-area" style={{ marginTop: '75px' }}>
				<div className="container">
					<div className="row">
						<div className="discount-product-slider dots-bottom-right">
							
							<div className="col-lg-12">
								<div className="discount-product">
									<img src="img/banners/hero.jpg" alt="" />


									<div className="discount-img-brief">
									
										<div className="discount-info">
											<h1 className="text-dark-red hidden-xs">Find The Pet You Love</h1>
											<p className="hidden-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.</p>
											<a href="#" className="button-one font-16px style-3 text-uppercase mt-5" data-text="Buy now">Buy now</a>
										</div>
									</div>
								</div>
							</div>
							
							
					
						</div>
					</div>
				</div>
			</div>
			
			
			<div className="blog-area pt-55">
				<div className="container">
					
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<h2 className="title-border">Premium Pets</h2>
							</div>
						</div>
					</div>
					
					<div className="row">
						
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="single-blog mt-30">
								<div className="row">
									<div className="col-lg-6 col-md-7 col-sm-7 col-xs-12">
										<div className="blog-info">
											<div className="post-meta fix">
												<div className="post-year floatleft">
													<h4 className="post-title"><a href="#" tabindex="0">Cat</a></h4>
												</div>
											</div>
										
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage  Lorem Ipsum, you alteration in some form.</p>
											
<button class="submit-button submit-btn-2 button-one" data-text="Now" type="submit">Adopt</button>

										</div>
									</div>
									<div className="col-lg-6 col-md-5 col-sm-5 col-xs-12">
										<div className="blog-photo">
											<a href="#"><img src="img/banners/cat1.jpg" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="single-blog mt-30">
								<div className="row">
									<div className="col-lg-6 col-md-7 col-sm-7 col-xs-12">
										<div className="blog-info">
											<div className="post-meta fix">
												<div className="post-year floatleft">
													<h4 className="post-title"><a href="#" tabindex="0">Rabbit</a></h4>
												</div>
											</div>
										
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage  Lorem Ipsum, you alteration in some form.</p>
<button class="submit-button submit-btn-2 button-one" data-text="Now" type="submit">Adopt</button>
										</div>
									</div>
									<div className="col-lg-6 col-md-5 col-sm-5 col-xs-12">
										<div className="blog-photo">
											<a href="#"><img src="img/banners/cat4.jpg" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
			
			<div className="subscribe-area pt-80">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="subscribe">
								<form action="#">
									<input type="text" placeholder="Enter your email address"/>
									<button style={{ marginLeft: "50px"}} className="submit-button submit-btn-2 button-one" data-text="subscribe" type="submit" >subscribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
			

		</div>
    </div>
  );
}

export default Home;
