<svelte:head>
<style>
body{
	  background-image: url(../img/bandw.jpg);
	  background-repeat: no-repeat;
	  background-size: cover;

}
.point{
	color: #2F89CE;
}
.about{
	display: flex;
	justify-content: space-around;
	list-style: none;
	padding-bottom: 100px;
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
	background-image: linear-gradient(rgba(191, 191, 191, 0.8),rgba(191, 191, 191, 0.8)),
	url(img/window.jpg);
	background-color: #B5B1AD;
	background-size: cover;
}
.about{
	/* margin: 150px 20px 20px 20px; */
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
			With over 16 years POS experience working with top brands including Texaco, Esso, Kwik Fit, Dreams
			and Majestic Wine, our aim is to help you maximise your marketing efforts by supplying you with
			well-made products at great prices.<br><br>
			We supply a wide range of Point of Sale products, not all of which appear on our web site. If you can’t see
			what you’re looking for give us a call, we are sure we will be able to help! If not, we may be able to
			put you in touch with someone that can.<br><br>
			Need something bespoke? We can help with that too.
			<br><br>
			We pride ourselves on our customer service, always going that little bit further to help, but don’t just
			take our word for it, have a look and see what our Customers are saying about us - <a href="testimonials" class="point">Testimonials</a>
			<br><br>
			<ul class="list">
				<li>Point of Sale Products.</li>
				<li>Competitive Prices.</li>
				<li>Customer Service.</li>
				<li>Bespoke manufacture.</li>
			</ul>
		<br><br>

	</li>
</ul>

</section>
