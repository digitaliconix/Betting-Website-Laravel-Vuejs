<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="{{asset('frontend/dashboard/js/slick.min.js')}}"></script>
<script src="{{asset('frontend/dashboard/js/bootstrap.min.js')}}"></script>
<script src="{{asset('frontend/dashboard/js/custom.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
<script src="{{asset('frontend/dashboard/js/app.min.js')}}"></script>
<script>
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
</script>
</body>
</html>
