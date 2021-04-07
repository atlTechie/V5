$(document).ready(function(){


//Determine which shopping button to display based on selected delivery option
$(function() {
      $('#colorselector').change(function(){
          $('.colors').hide();
          $('#' + $(this).val()).show();
      });
  });


//Check More Stores
$('a#checkMoreStores').click(function(){
    $('.searchStores').show();
    $('.initialStores').hide();
});


//Events - viewTickets Page

  //Toggle seating chart
  $('a#viewVenueSeating').click(function(){
    $('img.eventsVenue').toggle();
  });
  

//Item Detail - Quantity Spinner 
$('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
        $('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
            });
        $('#minus-btn').click(function(){
        $('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
        if ($('#qty_input').val() == 0) {
            $('#qty_input').val(1);
        }
 
            }); 






//End of Document
});
