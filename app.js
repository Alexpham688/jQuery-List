$(function(){
    //adding to do item to need(source)
  $('#add-btn').on('click',function(e){
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
  $('.add').on('click',function(){
    var item = $(this).parents('.pick-list').find('.source').children('.active');
    if(item.length > 0) {
      $('.source .list-group-item.active').appendTo('.destination');
      $('.add').attr('disabled', true);
      $('.destination .list-group-item.active').removeClass('active');
    }
  });
  //moving item back to need(source) from done(destination)
  $('.remove').on('click',function(){
    var item = $(this).parents('.pick-list').find('.destination').children('.active');
    if(item.length > 0){
      $('.destination .list-group-item.active').appendTo('.source');
      $('.remove').attr('disabled',true);
      $('.source .list-group-item.active').removeClass('active');
    }
  });
    //moving all items from need to done
    $('#add-all').on('click',function(e){
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
    $('#remove-all').on('click',function(e){
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
      var trash = $('.destination li').fadeOut(1500);
    });

    //removing each list item seperately with double click
    $(document).on('dblclick','.destination li', function(){
      $(this).addClass('strike').css({'background-color':'#E40000','color':'#000'}).fadeOut(1500);
    });

  //makes list items sortable
  $('ol').sortable();
  //adding autocomplete
  var tags = [
      "ActionScript",
      "AppleScript",
      "Ask",
      "Basic",
      "Buy",
      "Climb",
      "Clean",
      "Close",
      "Casket",
      "ColdFusion",
      'Doing',
      'Dry',
      'Eat',
      "Erlang",
      "Fortran",
      "Get",
      "Go",
      'Forward',
      "Handle",
      "Java",
      "JavaScript",
      "Listen",
      "Get dryclean",
      "Put",
      "Grocery shop",
      "Walk the dog",
      "Scrub",
      'Wash',
     'Clear the table',
     'Lower the roof',
     'Start the dishwasher',
     'wipe the table',
     'clean the stove',
     'clean the sink',
     'sweep the floor',
     'wash the floor',
     'empty the dishwasher',
     'put dishes away',
     'water the plants',
     'wash the car',
     'mow the lawn',
     'paint the fence',
     'tree',
     'try'
    ];
    $('#input').autocomplete({
      source:tags
    });
});
