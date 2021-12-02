<style>
header{
	height: 20vh;
	border-radius: 0px 0px 10px 10px;
}
 	nav{
		width: 100%;
		border-radius: 0px 0px 50px 50px;
	}
	img {
		max-width: 220px;
		height: auto;
		padding: 0px;
		margin: 0px;
	}

</style>
<header class="section-header" id="navbar">
	<section>
	<nav class="navbar navbar-main navbar-expand-lg navbar-light" >
		<div class="container">
			<a class="navbar-brand" href="/"><img src="img/logo.png" alt="KBL Solutions logo"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav1" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation" >
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="main_nav1">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link top" href="/" id="navLink" onclick="closeNav();">Home </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="about" id="navLink" onclick="closeNav();">About us</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/products/index.svelte">Products and Services</a>
						<div class="dropdown-menu" id="navLink" onclick="closeNav();">
						<a class="dropdown-item" href="/products/" >All products and services</a>
						<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/compact-screen" id="navLink" onclick="closeNav();">Compact Privacy Screen</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/landing/forecourt-signs" id="navLink" onclick="closeNav();">Forecourt Signs</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/a-board" id="navLink" onclick="closeNav();">Aluminum A Boards</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/lockable-poster" id="navLink" onclick="closeNav();">Lockable Posters</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/landing/menus" id="navLink" onclick="closeNav();">Menu/Info Holders</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/landing/snap-frames" id="navLink" onclick="closeNav();">Snap Frames</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/landing/illuminated-display" id="navLink" onclick="closeNav();">Illuminated and LED Displays</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="/products/replacement-front-sheet" id="navLink" onclick="closeNav();">Replacement Front Sheets</a>
						</div>
						<li class="nav-item">
							<a class="nav-link" href="testimonials" onclick="closeNav();">Testimonials</a>
						</li>
					<li class="nav-item">
						<a class="nav-link bottom" href="/#section2" onclick="closeNav();">Contact</a>
					</li>
				</ul>
				<div class="">

				</div>
		</div> 
	</nav>
	</section> 
</header>
