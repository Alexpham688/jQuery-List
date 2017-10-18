$(function(){
    //adding to do item to need(source)
  $('#add-btn').click(function(e){
    var toAdd = $('#input').val().toUpperCase();
    $('ol.source').prepend('<li class="list-group-item">' + toAdd + '</li>');
    $(this).addClass('active');
    if(toAdd === ""){
      alert('Add something!!');
    }
    $('#input').val('');
    e.preventDefault();
  });

  //adding active class to list item with click
  $('.list-group').on('click','.list-group-item',function(){
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

 //move item from need(source) to done(destination) when item is selected
  $('.add').click(function(){
    var item = $(this).parents('.pick-list').find('.source').children('.active');
    if(item.length > 0) {
      $('.source .list-group-item.active').appendTo('.destination');
      $('.add').attr('disabled', true);
      $('.destination .list-group-item.active').removeClass('active');
    }
  });
  //moving item back to need(source) from done(destination)
  $('.remove').click(function(){
    var item = $(this).parents('.pick-list').find('.destination').children('.active');
    if(item.length > 0){
      $('.destination .list-group-item.active').appendTo('.source');
      $('.remove').attr('disabled',true);
      $('.source .list-group-item.active').removeClass('active');
    }
  });

    //moving all items from need to done
    $('#add-all').click(function(e){
      var select = $('.source li');
      if(select.length === 0){
        alert('Nothing to move...');
        e.preventDefault();
      }
      $('.destination').append($(select).clone());
      $(select).remove();
      // e.preventDefault();
    });
    //moving all items from  done(desintation) back to need(source)
    $('#remove-all').click(function(e){
      var deselect = $('.destination li');
      if(deselect.length === 0){
        alert('Nothing to move...');
        e.preventDefault();
      }
      $('.source').append($(deselect).clone());
      $(deselect).remove();
    })

    //delete all items from done(destination)
    $('#delete').on('click',function() {
      var select = $('.destination li');
      var trash = $('.destination li').remove();
    if(select.length === 0){
      alert('Nothing to delete');
    } else {
      return trash;
    }

    });

  //makes list items sortable
  $('ol').sortable();
});
