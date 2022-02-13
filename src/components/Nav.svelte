<style>
header{
	height: 14vh;
}
 	nav{
		width: 100%;
		background-color: #F6F7F9;
		border-bottom: 5px solid #45A4D9;
	}
	#item{
		margin-right: 20px;
	}
	img {
		max-width: 55px;
		height: auto;
		padding: 0px;
		margin: 0px;
	}
	i{
		margin-right: 10px;
	}
	#nav{
		background-color: #44A4D9 !important;
	}
	@media screen and (max-width:603px) {
		img{
			width:195px;
			height: auto;			
		}
		#item{
		margin-right: 50px;
	}
}

</style>
<header class="section-header">

	<nav class="navbar navbar-dark navbar-expand p-0 bg-primary" id="nav">
	<div class="container">
		<ul class="navbar-nav d-none d-md-flex mr-auto">
			<li  class="nav-item" id="item"><a href="/">Home</a></li>
		</ul>
		<ul class="navbar-nav">
			<li  class="nav-item" id="item"><i class="fa fa-phone">	</i><a href="tel:+447894825001">+447894825001</a></li>
			<br>
			<li class="nav-item"><i class="fa fa-envelope"></i><a href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></li>
		</ul> 
	</nav> 
	
	<!-- <section class="header-main border-bottom">
		<div class="container">
	<div class="row align-items-center">
		<div class="col-lg-2 col-6">
			<a href="http://bootstrap-ecommerce.com" class="brand-wrap">
				<img class="logo" src="images/logo.png">
			</a> <!-- brand-wrap.// -->
		<!-- </div>
		<div class="col-lg-6 col-12 col-sm-12">
			<form action="#" class="search">
				<div class="input-group w-100">
					<input type="text" class="form-control" placeholder="Search">
					<div class="input-group-append">
					  <button class="btn btn-primary" type="submit">
						<i class="fa fa-search"></i>
					  </button>
					</div>
				</div>
			</form> <!-- search-wrap .end// -->
		<!--</div> col.// -->
		<!-- <div class="col-lg-4 col-sm-6 col-12">
			<div class="widgets-wrap float-md-right">
				<div class="widget-header  mr-3">
					<a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-envelope"></i></a>
					<span class="badge badge-pill badge-danger notify">0</span>
				</div>
				<div class="widget-header icontext">
					<a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
					<div class="text">
						<span class="text-muted">Welcome!</span>
						<div> 
							<a href="#">Sign in</a> |  
							<a href="#"> Register</a>
						</div>
					</div>
				</div>
			</div> <!-- widgets-wrap.// -->
		<!--</div> <!-- col.// -->
	<!--</div> <!-- row.// -->
	<!--	</div> <!-- container.// -->
	<!--</section> header-main .// --> 
	
	
	<nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
	  <div class="container">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
	
		<div class="collapse navbar-collapse" id="main_nav">
			<a class="navbar-brand" id="logo" onclick="closeNav();" href="/"><img src="img/logo.png" alt="KBL Solutions logo"></a>
		  <ul class="navbar-nav">
			  <li class="nav-item">
				<a class="nav-link" href="about" id="navLink" onclick="closeNav();">About us</a>
			</li>
			  <li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/products/index.svelte">Products and Services</a>
			
			  <div class="dropdown-menu">
					<a class="dropdown-item" href="/products/" >All products and services</a>
					<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/compact-screen" id="navLink" onclick="closeNav();">Compact Privacy Screen</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/landing/forecourt-signs" id="navLink" onclick="closeNav();">Forecourt Signs</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/a-board" id="navLink" onclick="closeNav();">Aluminum A Boards</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/landing/exterior-poster-case" id="navLink" onclick="closeNav();">Lockable Posters</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/landing/menus" id="navLink" onclick="closeNav();">Menu/Info Holders</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/landing/snap-frames" id="navLink" onclick="closeNav();">Snap Frames</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/landing/illuminated-display" id="navLink" onclick="closeNav();">Illuminated and LED Displays</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="/products/replacement-front-sheet" id="navLink" onclick="closeNav();">Replacement Front Sheets</a>
			  </div>
			</li>
		
			<li class="nav-item">
				<a class="nav-link" href="testimonials" onclick="closeNav();">Testimonials</a>
			</li>
			<li class="nav-item">
				<a class="nav-link bottom" href="/#section2" onclick="closeNav();">Contact</a>
			</li>
		  </ul>
		</div> 
	  </div> 
	</nav>
	
	</header> 