function loaderShow(){
        jQuery('#custom-loader').addClass('body-loading');
        jQuery('.loading').show();
    }
function loaderHide(){
    jQuery('#custom-loader').removeClass('body-loading');
    jQuery('.loading').hide();
}
// jQuery(document).ready(function(){
//     setTimeout(() => {
//         loaderHide();
//     }, 500);
// });
