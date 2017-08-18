<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="viewport" content="width=device-width,initial-scale=1"/>
	<title>{{pageTitle}}</title>
	<meta name="author" content="Template: {{programmer}}; Copy: {{copywriter}}"/>
	<meta name="description" content="{{description}}"/>
	<meta name="keywords" content="{{keywords}}"/>
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
</head>
<body>
	<div id="topbar">
		<div class="topbar-wrapper">
			<div class="topbar flex">
				<img src="{{topBar.logoUrl}}" class="img" />
				<a class="link phone-number text subheader bold primary" href="tel:{{phoneNumber}}">Call {{phoneNumber}}</a>
				<img src="{{topBar.bbbUrl}}" class="img link" />
			</div>
		</div>
	</div>
	<div id="splash">
		<div class="splash-wrapper">
			<div class="splash row">
				<div class="left small-12 medium-5 columns flex header-container">
					<div class="header-wrapper">
						<h1 class="header-title text white headline bold uppercase">{{headerTitle}}</h1>
						<h3 class="text white body light">{{headerBody}}</h3>
					</div>
				</div>
				<div class="right columns">
					<div class="form-container">
						<div class="form-wrapper">
							<h2 class="text black body bold form-header-text">Fill out the form below and get your free cash offer</h2>
							<form>
								<input type="text" placeholder="Property Address"/>
								<input type="text" placeholder="Zip Code"/>
								<input type="text" placeholder="Name"/>
								<input type="text" placeholder="Email"/>
								<input type="text" placeholder="Phone Number"/>
								<div class="button-wrapper">
									{{#if topBar.bbbUrl}}
										<input value="GET YOUR CASH OFFER" class="btn" />
										<img src="{{topBar.bbbUrl}}" />
									{{else}}
										<input value="GET YOUR CASH OFFER" class="btn full" />
									{{/if}}
								</div>
								<p class="text black small center">No Spam - No Obligation</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="seen_on"></div>
	<div id="benefits">
		<h3 class="black text subheader benefits-title">Here's What We Can Do For You.</h3>
		<div class="row">
			<div class="left columns small-12 medium-5">
				<iframe width="500" height="281" src="{{investorVideo}}" frameborder="0" allowfullscreen=""></iframe>
			</div>
			<div class="right columns">
				<ul>
					{{#each benefits}}
						<li><p class="text caption light">{{this}}</p></li>
					{{/each}}
				</ul>
			</div>
		</div>
	</div>
	<div id="how_it_works">
		<h3 class="text black bold subheader">How It Works</h3>
		<div class="hiw-wrapper">
			<div class="first step">
				<img src="./laptop_icon.svg" />
				<h4 class="text black body bold">Call</h4>
				<p class="text black caption">Give us a call at <a href="tel:{{phoneNumber}}" class="text bold link clean primary">{{phoneNumber}}</a> and tell us about your property.</p>
			</div>
			<div class="second step">
				<img src="./home_icon.svg" />
				<h4 class="text black body bold">Get Offer</h4>
				<p class="text black caption">We set up a time to meet with you and view your property, and give you a cash offer.</p>
			</div>
			<div class="third step">
				<img src="./sold_icon.svg" />
				<h4 class="text black body bold">Sold</h4>
				<p class="text black caption">If you accept the offer... Congrats, your property is sold!</p>
			</div>
		</div>
	</div>
	<div id="testimonials">
		<h2 class="text black bold subheader">Testimonials</h2>
		<div class="testimonials row">
			{{#each testimonials}}
				<div class="testimonial small-12 medium-4 columns">
					{{#if this.video}}
						<iframe src="{{this.content}}" frameborder="0" allowfullscreen=""></iframe>
						<p>- {{this.name}}</p>
					{{else}}
						<p class="text caption">"{{this.content}}"</p>
						<p class="text caption">- {{this.name}}</p>
					{{/if}}
				</div>
			{{/each}}
		</div>
	</div>
	<div id="it_gets_better">
		<h2 class="text black subheader">But It Gets Better</h2>
		<div class="igb-wrapper">
			<img src="./Couple.png" class="gets_better_couple"/>
			<div class="igb-text">
				<p class="text black body">You can sell fast with no rush to move. You don’t have to move out right away, you can stay in your home for a while until you locate another house.</p>
				<p class="text black body">
				{{#if topBar.bbbUrl}}
				We are accredited with the Better Business Bureau and this is the real deal.
				{{else}}
				This is the real deal.
				{{/if}}
				We are confident that we can help you today — regardless of the situation.</p>
				<p class="text black body">Talk to you soon,</p>
			</div>
		</div>
	</div>
	<div id="call_now">
		<p class="text white subheader">Call Now to Get Your Free Cash Offer! <a href="tel:{{phoneNumber}}">Call {{phoneNumber}}</a></p>
	</div>
	<div id="footer">
		<div class="footer-wrapper">
			<div class="logoImg">
				<img src="{{topBar.logoUrl}}" />
				<img src="{{topBar.bbbUrl}}" />
			</div>
			<div class="links">
				<div class="topLinks">
					<a class="link text black" href="{{footerLinks.privacy}}">Privacy Policy</a> |
					<a class="link text black" href="{{footerLinks.terms}}">Terms of Use</a> |
					<a class="link text black" href="{{footerLinks.contact}}">Contact Us</a>
				</div>
				<div class="bottomLinks">
					Copyright @ 2017 {{company.name}} All Rights Reserved. {{company.address}}
				</div>
			</div>
		</div>
	</div>

</body>
</html>

<!--
		<div>
			<p>Featured On:</p>
			{{#each featuredOn}}
				<p>URL: {{this}}</p>
			{{/each}}
		</div>
		<p>Investor Video URL: {{investorVideo}}</p>
		<div>
			<div>
				<p>Icon</p>
				<p>Call</p>
				<p>Give us a call at {{phoneNumber}} and tell us about your property.</p>
			</div>
		</div>
		<div>
			<p>Testimonials</p>
			{{#each testimonials}}
				{{#if this.video}}
					<p>Video Testimonial</p>
					<p>Content: {{this.content}}</p>
					<br />
					<p>Name(s): {{this.name}}</p>
				{{else}}
					<p>Text Testimonial</p>
					<p>Content: {{this.content}}</p>
					<br />
					<p>Name(s): {{this.name}}</p>
				{{/if}}
			{{/each}}
		</div>
		<div>
			<p>Closing</p>
			<p>Title: {{closingTitle}}</p>
			<p>Body: {{closingBody}}</p>
			<p>Signature: {{signature}}</p>
			<p>Background: {{closingBg}}</p>
			<p>Foreground: {{closingFg}}</p>
		</div>
		<div>
			<p>Footer</p>
			<p>Privacy: {{privacy}}</p>
			<p>Terms: {{terms}}</p>
			<p>Contact: {{contact}}</p>
			<p>Copyright © 2017 {{company.name}}. {{company.address}}</p>
		</div>
	</div>
</body>
</html>
-->
