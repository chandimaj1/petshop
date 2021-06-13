import React from 'react';
import './Login.css';



function Login() {
  return (
    <div className="loginContainer">
			<div className="heading-banner-area overlay-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-banner">
								<div className="heading-banner-title">
									<h2>Account</h2>
								</div>
								<div className="breadcumbs pb-15">
									<ul>
										<li><a href="index.html">Home</a></li>
										<li>Login</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


				<div className="login-area  pt-80 pb-80">
				<div className="container">
					<form action="#">	
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="customer-login text-left">
									<h4 className="title-1 title-border text-uppercase mb-30">Registered customers</h4>
									<p className="text-gray">If you have an account with us, Please login!</p>
									<input type="text" placeholder="Email here..." name="email" />
									<input type="password" placeholder="Password" />
									<p><a href="#" className="text-gray">Forget your password?</a></p>
									<button type="submit" data-text="login" className="button-one submit-button mt-15">login</button>
								</div>					
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="customer-login text-left">
									<h4 className="title-1 title-border text-uppercase mb-30">new customers</h4>
									<p className="text-gray">If you have an account with us, Please login!</p>
									<input type="text" placeholder="Your name here..." name="name" />
									<input type="text" placeholder="Email address here..." name="email" />
									<input type="password" placeholder="Password" />
									<input type="password" placeholder="Confirm password" />
									<p className="mb-0">
										<input type="checkbox" id="newsletter" name="newsletter" checked />
										<label for="newsletter"><span>Sign up for our newsletter!</span></label>
									</p>
									<button type="submit" data-text="regiter" className="button-one submit-button mt-15">regiter</button>
								</div>					
							</div>
						</div>
					</form>
				</div>
			</div>
	
		
    </div>
  );
}

export default Login;
