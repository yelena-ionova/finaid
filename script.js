<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script type="text/javascript">
jQuery(function () {
  jQuery('[data-toggle="popover"]').popover();

  jQuery('[data-toggle="popover"]').on('click', function (e) {
    jQuery('[data-toggle="popover"]').not(this).popover('hide');
  });
});

jQuery('.dropdown > li').click(function(){
//  jQuery(this).next('ul').slideToggle('500');
  jQuery(this).find('i').toggleClass('fa-li fa fa-caret-right fa-li fa fa-caret-down');
});
</script>
