//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/mouse
//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable
//= require jquery-ui/widgets/resizable
//= require jquery-ui/widgets/selectable
//= require jquery-ui/widgets/sortable
//= require rails_sortable


$(function() {
  $('.draggable').draggable();
  $('.draggable').mousedown(function() //associate mousedown event with developments
  {
    var maxZindex = 0; // keep traking max z-index
    $(this).siblings('.draggable').each(function() //find all the siblings of that development
    {
      var currentZindex = Number($(this).css('z-index')); //retrieve z-index of each development we are looping through
      maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
    });
    $(this).css('z-index', maxZindex + 1);
  });
  $('.resizable').resizable();
});
