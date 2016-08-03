$("h1").css('color', 'white');
$("h2").css('color', 'purple');

var game = {
          round: 0,   //Gives value to round later be increased
          side:'.side',  // gets .side class
          compyClicks : [],  //array used to store the ranom numbers to be played
          counter : 0, // counts every click to later be compared to compyClicks


start: function(){  //starts game, sets compyClicks and round  to 0
  this.compyClicks=[];
  this.round=0;
  this.newRound();
},

newRound: function() {  //adds one to round, displays it on page
  ++this.round;
  this.randoPad();
  this.displayLevel();
},

flash :function($element) {
    $element.addClass('opClass'); //animates by adding classes and then removing it
    var clip = $element.attr('data-tile'); //gets the attribute of data-tile (#1-4)
   console.log('clip:', clip);  //displays current value in clip
    $('#beep'+clip)[0].play();  //matches beep to correct tile  and plays

    setTimeout(function()  // removes opClass after half a second
               {
                $element.removeClass('opClass')
             }
             , 500
             );
},

randoPad: function() {  //adds random number to compyClicks
   this.compyClicks.push(Math.floor(Math.random() * 4) + 1);
   console.log('compyClicks:', this.compyClicks);//displays the value in consol log
   var that = this;
   setTimeout(function() {  //waits a second before it showSequence again
     that.showSequence()
   }, 1000);



},
checkClicks: function(element){ //compares each click to compyClicks
   var clip = element.attr('data-tile'); //gets clip last click (#1-4)
  // var sadSound = new Audio ("sounds/lose.mp3")
  if (clip != this.compyClicks[this.counter]){ //compares clip with corrent number in compyClicks
    this.round=0; //if the input is wrong, the game sets back to 0 and alert player
    this.compyClicks=[];
    this.counter=0;
    $('#lose')[0].play();
    alert("Oops! You messed up..");
  }
  else if (this.compyClicks.length - 1 == this.counter){
    this.newRound();   //checks if sequence is finished before running newRound
      this.counter=0;
    }
  else {   //if sequence isn't done yet. keep adding to counter until
  this.counts()  // the counter is = the lenght of compyClicks array
 }

},

counts: function(){ //function that adds one to counter
  this.counter++;
},

showSequencePad: function (pad, index) {  //blicks pads back
  console.log('showSequencePad called:', pad, index);
  var that = this;
  setTimeout(function() {   // times the flash with corrent time per pad
    that.flash($('.side' + pad));
  }, 1000 * (index));
},

showSequence: function(){  //gets pad and index for showSequencePad
  var that=this;
  this.compyClicks.forEach(function(pad, index) {
    that.showSequencePad(pad, index);
  }
  );
},
displayLevel: function(){ //displays Round
  $('.round h2').text('Round:' +this.round);
},



}







