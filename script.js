// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
var today = dayjs();
//var hourNum = 9;
var hourList = $('.container-lg');
var timeRow = $('.row');
var pastDate = $('.past');
var presentDate = $('.present'); 
var futureDate = $('.future'); 
  // TODO: Add a listener for click events on the save button.
  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //var key =

//var deleteEl = $(
//   '<td><button class="btn btn-sm btn-delete-project" data-index="' +
//   i +
//   '">X</button></td>'
// );
  // for(var i = 0; i < hourNum; i++){
  var hourSlots = hourList.children();
  var buttonSlots = hourSlots.children().eq(2);
  // if(buttonSlots == hourSlots){
   console.log(hourSlots);
  // }

 function storeScheduledEvent(description, hour){
  localStorage.setItem(hour,description);
 }

 function getScheduledEvent(){

  localStorage.getItem(hourSlots.attr('id'));
 }

 $('.saveBtn').on('click', function () {
   var hourTag = $(this).parent().attr('id');
   var descriptionUserInput = $(this).siblings('.description').val(); 
   console.log(descriptionUserInput);
    storeScheduledEvent(descriptionUserInput, hourTag);
    //getScheduledEvent();
    



  });  


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. (compare hour id to dayjs().hour()?) HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function changeInTime(){
    for ( var i = 0; i < localStorage.length; i++ ) {
      var key = localStorage.key( i );
    }
    var currentHour = "hour-"+dayjs().hour();
    //var timeSlot = localStorage.getItem("hour");
    if (key == currentHour){
      if (key > currentHour){
      timeRow.addClass('future');
      timeRow.removeClass("present past");
      }
      // console.log(key);
      // console.log(currentHour);
    } else if (key == currentHour){
      if (key == currentHour){
      timeRow.addClass('present');
      timeRow.removeClass("future past");
      }
      // console.log(key);
      // console.log(currentHour);
    } else if(key == currentHour) {
      if (key < currentHour){
      timeRow.addClass('past');
      timeRow.removeClass("future present");
      // console.log(key);
      // console.log(currentHour);
      }
    }
    console.log(currentHour);
  }
  

  //Need list:
  //dayjs for comparing the time to schedule blocks(possibly )
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page

/*   for ( var i = 0; i < localStorage.length; i++ ) {
    var hourId = $('#hour-'+ i);
    var key = localStorage.key( i );
    var value = localStorage[key];

    console.log(key);
    
  } */
// for (var i = 1; i <= localStorage.length; i++) {
//   var hourId = $('#hour-'+ i);
//   if(dayjs().hour() > 2){
//  console.log(hourId);
//   }else{
//     console.log(hourId);
//   }
// }
  changeInTime();
  var currentDate = today.format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
});




//  var addOrdinal = (num) => {
//     switch(num){
//         case 1:
//             return num + 'st'
//         break
//         case 2:
//             return num + 'nd'
//         break
//         case 3:
//             return num + 'rd'
//         break
//         default:
//             return num + 'th'
//     }
// }