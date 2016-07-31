$("h1").css('color', 'red');

var game = {
          round: 0,
          active:false,
          side:'.side',
          compyClicks : [],
          playerClicks : [],




flash :function(element) {


    $(element).addClass('opClass');
    var clip = $(element).attr('data-tile')
    $('#beep'+clip)[0].play();

    setTimeout(function()
               {
                $(element).removeClass('opClass')
             }
             , 500
             );

},
randoPad: function(passes) {
          for(i=0; i<passes; i++){
            this.compyClicks.push(Math.floor(Math.random() * 4) + 1);
          }
},
showSequence: function(){
  var that=this;
  $.each(this.compyClicks, function(index, num){
    setTimeout(function(){
      that.flash($(that.side+num));
},500*index);
  });
},
displayLevel: function(){
  $('.round h2').text('Round:' +this.round);
},


}

function rando (){
return Math.floor((Math.random() * 4) + 1);
}




