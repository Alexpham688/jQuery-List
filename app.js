$(function(){
    //adding to do item to source 
  $('#add-btn').click(function(e){
    e.preventDefault();
    var toAdd = $('#input').val().toUpperCase();
    $('ol.source').append('<li class="list-group-item">' + toAdd + '</li>');
    if(toAdd == ""){
      alert('Add something!!');
    }
    $('#input').val('');
  });

  //adding active class to list item with click
  $('.list-group-item').click(function(){
    $(this).parent().find('.list-group-item').removeClass('active');
    $(this).addClass('active');

  //making add button disabled until item is selected
  var source = $(this).parents('.pick-list').find('.source').children('.active');
  if(source.length > 0) {
    $(this).attr('disabled', false);
    $('.add').attr('disabled', false);
  } else {
    $(this).attr('disabled', true);
    $('.add').attr('disabled', true);
  };
  //make remove button disabled until item selected
  var back = $(this).parents('.pick-list').find('.destination').children('.active');
  if(back.length > 0) {
    $(this).attr('disabled', false);
    $('.remove').attr('disabled', false);
  } else {
    $(this).attr('disabled', true);
    $('.remove').attr('disabled', true);
  };
 });
  $('.add').click(function(){
    var item = $(this).parents('.pick-list').find('.source').children('.active');
    //move item from source to destination when item is selected
    if(item.length > 0) {
      $('.source .list-group-item.active').appendTo('.destination');
      $('.add').attr('disabled', true);
      $('.destination .list-group-item.active').removeClass('active');
    }
  });
  $('.remove').click(function(){
    var item = $(this).parents('.pick-list').find('.destination').children('.active');
    //move item back to original spot
    if(item.length > 0){
      $('.destination .list-group-item.active').appendTo('.source');
      $('.remove').attr('disabled',true);
      $('.source .list-group-item.active').removeClass('active');
    }
  });



  $('ol').sortable();

});
