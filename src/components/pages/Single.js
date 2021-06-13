import React from 'react';
import './Single.css';

import { Carousel } from 'react-bootstrap';


function Single() {
  return (
    <div className="singleContainer">


	<div className="blog-area blog-2 blog-details-area  pt-80 pb-80">
				<div className="container">	
					<div className="blog">
						<div className="row">
							<div className="col-lg-12">
								<div className="single-blog mb-30">


								<Carousel  indicators={false} controls={true}>
								  <Carousel.Item>
								    <img
								      classNameName="d-block w-100"
								      src="/img/banners/index-06.jpg"
								      alt="First slide"  
								      style={{ maxHeight: "400px"}}
								    />
								    <Carousel.Caption>
								    </Carousel.Caption>
								  </Carousel.Item>
								  <Carousel.Item>
								    <img
								      classNameName="d-block w-100"
								      src="/img/banners/index-07.jpg"
								      alt="Second slide" 
								      style={{ maxHeight: "400px"}}
								    />

								    <Carousel.Caption>
								    </Carousel.Caption>
								  </Carousel.Item>
					
								</Carousel>


									<div className="blog-info blog-details-info">
										<h4 className="post-title post-title-2"><a href="#">Pet Name</a>

										<span className="petPrice" > 
												100$
										</span>

										</h4>
										<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p>
										<p>which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.</p>
										<div className="post-share-tag clearfix mt-40">
											<div className="post-share floatleft">
												<span className="text-uppercase"><strong>Share</strong></span>
												<a href="#"><i className="zmdi zmdi-facebook"></i></a>
												<a href="#"><i className="zmdi zmdi-twitter"></i></a>
												<a href="#"><i className="zmdi zmdi-linkedin"></i></a>
												<a href="#"><i className="zmdi zmdi-vimeo"></i></a>
												<a href="#"><i className="zmdi zmdi-dribbble"></i></a>
												<a href="#"><i className="zmdi zmdi-instagram"></i></a>
											</div>
											<div className="post-share post-tag floatright">
												<span className="text-uppercase"><strong>tags</strong></span>
												<a href="#">Chair</a>
												<a href="#">Furniture</a>
												<a href="#">Light</a>
												<a href="#">Table</a>
											</div>
										</div>
										<div className="author-comments clearfix mt-40">
											<div className="author-photo floatleft">
												<img src="img/reviewer/author.jpg" alt="" />
											</div>
											<div className="author-brief">
												<h3 className="font-16px"><strong>Salim Rana</strong></h3>
												<p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter conseques ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally  car mstances occur in which toil and pain can procure him some great pleasure.</p>
											</div>
										</div>
										<div className="pro-reviews mt-60">
											<div className="customer-review mb-60">
												<h3 className="tab-title title-border mb-30">Comments</h3>
												<ul className="product-comments clearfix">
													<li className="mb-30">
														<div className="pro-reviewer">
															<img src="img/reviewer/1.jpg" alt="" />
														</div>
														<div className="pro-reviewer-comment">
															<div className="fix">
																<div className="floatleft mbl-center">
																	<h5 className="text-uppercase mb-0"><strong>Gerald Barnes</strong></h5>
																	<p className="reply-date">27 Jun, 2016 at 2:30pm</p>
																</div>
																<div className="comment-reply floatright">
																	<a href="#"><i className="zmdi zmdi-mail-reply"></i></a>
																	<a href="#"><i className="zmdi zmdi-close"></i></a>
																</div>
															</div>
															<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
														</div>
													</li>
													<li className="threaded-comments">
														<div className="pro-reviewer">
															<img src="img/reviewer/1.jpg" alt="" />
														</div>
														<div className="pro-reviewer-comment">
															<div className="fix">
																<div className="floatleft mbl-center">
																	<h5 className="text-uppercase mb-0"><strong>Gerald Barnes</strong></h5>
																	<p className="reply-date">27 Jun, 2016 at 2:30pm</p>
																</div>
																<div className="comment-reply floatright">
																	<a href="#"><i className="zmdi zmdi-mail-reply"></i></a>
																	<a href="#"><i className="zmdi zmdi-close"></i></a>
																</div>
															</div>
															<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
														</div>
													</li>
												</ul>
											</div>
											<div className="leave-review">
												<h3 className="tab-title title-border mb-30">Interested In The Pet ? Ask A Question</h3>
												<div className="reply-box">
													<form action="#">
														<div className="row">
															<div className="col-md-6 col-sm-6 col-xs-12">
																<input type="text" placeholder="Your name here..." name="name" />
															</div>
															<div className="col-md-6 col-sm-6 col-xs-12">
																<input type="text" placeholder="Your email here..." name="email" />
															</div>
														</div>
														<div className="row">
															<div className="col-md-12">
																<textarea  style={{ fontSize: "14px" }} className="custom-textarea" name="message" placeholder="Your message here..." ></textarea>
																<button type="submit" data-text="submit" className="button-one submit-button mt-20">submit </button>
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
				</div>
			</div>
	
		
    </div>
  );
}

export default Single;
