<script>
    import { stop_propagation } from 'svelte/internal';
import {handleClickOutside, handlePageNavigation} from '../../static/js/script'

function clickOutside(node) {
  
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}		
function closeNav() {
  var x = document.getElementById("navLink");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

<style>
header{
	height: 14vh;
}
 	nav{
		width: 100%;
		background-color: #F7F8F9;
		border-bottom: 5px solid #45A4D9;
	}
	#item{
		margin-right: 20px;
	}
	#info-link:hover{
		color:white;
	}
	img {
		max-width: 140px;
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
	<!-- Contact nav -->
	<nav class="navbar navbar-dark navbar-expand p-0 bg-primary" id="nav">
	<div class="container">
		<ul class="navbar-nav d-none d-md-flex mr-auto">
			<li  class="nav-item" id="item"><a id="info-link" href="/">Home</a></li>
		</ul>
		<ul class="navbar-nav">
			<li  class="nav-item" id="item"><i class="fa fa-phone">	</i><a id="info-link" href="tel:+447894825001">+447894825001</a></li>
			<br>
			<li class="nav-item"><i class="fa fa-envelope"></i><a id="info-link" href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></li>
		</ul> 
	</nav> 
	
	<!-- Main nav -->
	<nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom" id="nav-content" style="z-index:10" aria-expanded="false" use:clickOutside on:click_outside={handleClickOutside}>
	  <div class="container" id="nav-toggle" aria-hidden="true">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
	
		<div class="collapse navbar-collapse" id="main_nav">
			<a class="navbar-brand" id="logo" on:click={handleClickOutside} href="/"><img src="img/logo.png" alt="KBL Solutions logo" id="logo-img"></a>
		  <ul class="navbar-nav">
			  <li class="nav-item">
				<a class="nav-link" href="about" id="navLink" on:click={handleClickOutside}>About us</a>
			</li>
			  <li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" data-toggle="dropdown" on:click={stop_propagation} href="/products/index.svelte">Products and Services</a>
			
			  <div class="dropdown-menu">
					<a class="dropdown-item"  href="/products/" >All products and services</a>
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
				<a class="nav-link" href="testimonials" use:clickOutside on:click_outside={handleClickOutside}>Testimonials</a>
			</li>
			<li class="nav-item">
				<a class="nav-link bottom" href="/#section2" use:clickOutside on:click_outside={handleClickOutside}>Contact</a>
			</li>
		  </ul>
		</div> 
	  </div> 
	</nav>
	
	</header> 