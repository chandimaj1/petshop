import React from 'react';
import './About.css';



function About() {
  return (
    <div className="aboutContainer">
			<div className="heading-banner-area overlay-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-banner">
								<div className="heading-banner-title">
									<h2>About Us</h2>
								</div>
								<div className="breadcumbs pb-15">
									<ul>
										<li><a href="index.html">Home</a></li>
										<li>About Us</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="about-us-area  pt-80 pb-80">
				<div className="container">	
					<div className="about-us bg-white">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="about-photo">
									<img src="img/banners/banner-27.jpg" alt="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="about-brief bg-dark-white">
									<h4 className="title-1 title-border text-uppercase mb-30">about hurst</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, ommodo consequa.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia is be deserunt mollit anim id est laborum.</p>
									<p>Sed ut perspiciatis unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium, totam remes aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	
		
    </div>
  );
}

export default About;
