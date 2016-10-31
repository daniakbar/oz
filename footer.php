<div id="slide4-section" class="slide-section header-section">
		    <div class="clear-float">

			    <img class="logo-footer" src="images/logo.png">

			    <h4>101.02FM</h4>
			    

			    <address>
				  <strong>OZ Radio, Bali.</strong><br>
				  Kompleks Pertokoan Sunset Indah II-B Block 5<br>
				  Jl. Sunset Road, Kuta - BALI 80361<br>
				  <abbr title="Phone">Phone :</abbr> +62 361 758992
				</address>

				<h6 class="footer-oz">Copyright &copy; 2016 OZ Radio Bali by <a href="#">SUN<b>DE</b></a></h6>

		    </div>
		</div>

		<!-- .END CONTENT TOP HITS -->




			<!-- Modernizer -->
			<script src="dist/vendor/modernizr.custom.js"></script>
			<!-- jQuery -->
			<script src="dist/vendor/jquery-1.11.1.js"></script>
			<!-- Bootstrap JavaScript -->
			<script src="dist/js/bootstrap.min.js"></script>
			<!-- Main js -->
			<script src="dist/js/main.js"></script>
			<!-- Slider -->
			<script src="dist/vendor/slider/js/slider.js"></script>
			<!-- Mousetrap -->
			<script src="dist/vendor/mousetrap/mousetrap.js"></script>
			<!-- Parallax -->
			<script src="dist/vendor/parallax/parallax.min.js"></script>		
			<!-- Classie -->
			<script src="dist/vendor/classie/classie.js"></script>
			<script>

			
			$(function(){
				$('#slider').rbtSlider({
					height: '100vh', 
					'dots': true,
					'arrows': true,
					'auto': 3
				});
			});

			$(function(){
				$('#slider-a').rbtSlider({
					height: '100vh', 
					'auto': 0
				});
			});

			

			$(window).scroll(function() {
			    if ($(".navbar").offset().top > 50) {
			        $('#custom-nav').addClass('affix');
			        $(".navbar-fixed-top").addClass("top-nav-collapse");
			    } else {
			        $('#custom-nav').removeClass('affix');
			        $(".navbar-fixed-top").removeClass("top-nav-collapse");
			    }   
			});

			

		</script>

		<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

		



	</body>
</html>