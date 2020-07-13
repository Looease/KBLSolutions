

<svelte:head>
<style>
.point{
	color: #2F89CE;
}
.about{
	margin: 20px;
	padding: 50px;
	display: flex;
	/* flex-direction: row; */
	justify-content: space-around;
	/* flex-wrap: wrap; */
	list-style: none;
 }
.bubble {
	margin: 20px;
position: relative;
/* font-family: 'Patrick Hand', cursive;; */
font-size: 17px;
font-family: 'Open Sans', sans-serif;
line-height: 24px;
width: 700px;
background: #fff;
border-radius: 40px;
padding: 24px;
text-align: center;
color: #000;
}

.bubble-bottom-left:before {
content: "";
width: 0px;
height: 0px;
position: absolute;
border-left: 24px solid #fff;
border-right: 12px solid transparent;
border-top: 12px solid #fff;
border-bottom: 20px solid transparent;
left: 32px;
bottom: -24px;
}
.list{
list-style: none;
}
h6{
color: #2F89CE;
}
.title{
color: white;
}
.point{
cursor: pointer;
}
@media screen and (max-width:1315px) {
body{
	background-size: cover;
}
}
@media screen and (max-width:1000px) {
body{
	background-image: url(img/window.jpg);
	background-size: cover;
}
.about{
	margin: 0px;
	padding: 0px;
}
}
</style>

	<title>About</title>
</svelte:head>

<section class="section-name padding-y testimonials">
	<ul class="about">
		<li class="bubble bubble-bottom-left">
				<h1>About Us</h1>
			<br>
			Our aim is to help you maximise your Marketing efforts by supplying you with good quality products at competitive prices.<br><br>
			We supply a wide range of Point of Sale products, so many in fact that not all appear on our web site,
			so if you can’t see what you’re looking for give us a call, we are sure we will be able to help! <br><br>
			Need something manufactured to your own requirements? We can help with that too. <br> <br>
			We pride ourselves on our customer service, always going that little bit further to help, but don’t just take our word for it, have a look and see <a href="testimonial.html" class="point"> what our Customers say about us - Testimonials</a>
			<br><br>
			<ul class="list">
				<li>Point of Sale Products.</li>
				<li>Competitive Prices.</li>
				<li>Customer Service.</li>
				<li>Bespoke manufacture</li>
			</ul>
		<br><br>
		<!-- <h6>Commercial Project & Supply Chain Controller - Astley</h6> -->
	</li>
</ul>

</section>
