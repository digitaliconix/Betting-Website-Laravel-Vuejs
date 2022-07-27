<!--            <link href="https://win375.com//frontend/assets/front/css/owl.carousel.min.css"  rel="stylesheet" type="text/css">-->
<!--<link href="https://win375.com//frontend/assets/front/css/owl.theme.default.min.css" rel="stylesheet" type="text/css">-->
<!--<link href="https://win375.com//frontend/assets/front/skins/noskin/skin.css" rel="stylesheet" type="text/css">-->
<!--<link href="https://win375.com//frontend/assets/front/css/layerslider.css" rel="stylesheet" type="text/css" >-->


<link href="/frontend/assets/front/fontawesome/css/all.css" rel="stylesheet" type="text/css">
<link href="/frontend/assets/front/css/bootstrap.min.css" rel="stylesheet">
<link href="/frontend/assets/front/css/animate.css" rel="stylesheet">
<link href="/frontend/assets/front/css/slick.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"
      rel="preload">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&amp;display=swap" rel="stylesheet">
<link href="/frontend/assets/front/js/toastr/css/toastr.min.css" rel="stylesheet" type="text/css">
<link href="/frontend/assets/vendor/loader/loader.css" rel="stylesheet" type="text/css">
<script src="/frontend/assets/vendor/jquery/jquery.min.js"></script>

<script src="/frontend/assets/vendor/axios/axios.min.js"></script>
<script src="/frontend/assets/vendor/mask/js/jquery.mask.js"></script>
<script src="/frontend/assets/front/js/owl.carousel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="/frontend/assets/vendor/datatables/datatables.min.js"></script>
<script src="/frontend/assets/front/js/slick.min.js"></script>
<script src="/frontend/assets/front/js/toastr/js/toastr.min.js"></script>

<script src="/frontend/assets/front/js/greensock.js" type="text/javascript"></script>
<script src="/frontend/assets/front/js/layerslider.transitions.js" type="text/javascript"></script>
<script src="/frontend/assets/front/js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
<script src="/frontend/assets/vendor/loader/loader.js"></script>
<script src="/frontend/assets/front/js/custom.js"></script>

<script>
    jQuery('#myTable').DataTable();
</script>

<script>
    jQuery('input[name="phone"]').mask('(000) 000 0000');
</script>


<script>
    function loaderShow() {
        jQuery('#custom-loader').addClass('body-loading');
        jQuery('.loading').show();
    }

    function loaderHide() {
        jQuery('#custom-loader').removeClass('body-loading');
        jQuery('.loading').hide();
    }
</script>
<script>
    jQuery(document).ready(function () {
        setTimeout(() => {
            loaderHide();
        }, 500);
    });
</script>
<script>
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });
</script>
@yield('additional_scripts')
</div>

</body>

<!-- Mirrored from win375.com/home by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 31 Mar 2022 18:56:27 GMT -->
</html>
