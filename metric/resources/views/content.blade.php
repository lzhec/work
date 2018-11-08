@extends('map')

@section('header')
<nav class="header">
		<div class="header-sgn">
			<div class="sgnin">Sign in</div>
			<div class="sgnup">Sign Up</div>
			<div class="or">or</div>
			<div class="round">	</div>	
			<input type="button" class="btn-sgnin">
			<input type="button" class="btn-sgnup">			
		</div>

		<p class="marketing">marketing</p>	
		
		<div class="header_bg"></div>		
</nav>
@endsection

@section('content')
<div class="content">
	<div class="top-content">
		<div class="top-content-text">
			<h1 class="top-awesome">Awesome Slogan of Marketing</h1>
			<p></p>
			<p class="sub">Sub heading with mentioning your awesome services will be appear here</p>		
		</div>
		
		<div class="line-container">
			<div class="arrow"></div>
			<div class="line1"></div>
			<div class="line2"></div>
		</div>				
	
		<div class="form">
			<input type="email" class="input">
			<p class="enter_email">Enter your email address</p>					
			<p class="signup">Sign Up</p>
			<input type="button" class="top-content-btn">
			<div class="top-content-btn_bg"></div>
		</div>				
	</div>
	
	<div class="bg"></div>
	
	<div class="center-content">	
		<div class="center-img">				
			<div class="screen"></div>
			<div class="note"></div>
		</div>
						
		<div class ="center-content-text" >
			<h1 class="cntr-awesome">Awesome Web Design Services</h1>
			<p class="having">Having hands on experience in creating innovative designs, i do offer design solutions which larness the new possibilities of web based communication, internet presence and current technology thrends.</p>
		</div>
		
		<a href="fdfdsf">
			<div class="cntr-btn-container">
				<p class="cntr-learn_more">Learn More</p>
				<input type="button" class="cntr-btn">
			</div>
		</a>		
	</div>
	
	<div class="bottom-content">
		<div class="bottom-content-text">
			<h1>About Us</h1>
			<p style="font-weight: 600">Having hands on experience in creating innovative design, I do offer design solutions which harness the new possibilities of web based communication, internet presence and corrent technology thrends.</p>
			<p style="font-weight: 900">I do specialize in all aspects of website designing, theme development, designing custom home pages and landing pages...</p>
		</div>
		
		<div class="bottom-img">
			<div class="bottom-screen"></div>
			<div class="bottom-screen_bg"></div>
			<div class="bottom_bg"></div>
		</div>
		
		<div class="btm-btn-container">
			<p class="btm-learn_more">Learn More</p>
			<input type="button" class="btm-btn">
		</div>						
	</div>
</div>
@endsection

@section('footer')
<footer class="footer">
	<p class="left-text">Copyright 2012. All Rights Reserved by Theme Designer</p>
	<p class="right-text">Designed by Theme Designer</p>
</footer>
@endsection	