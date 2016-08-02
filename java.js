$("h1").css('color', 'white');
$("h2").css('color', 'purple');

var game = {
          round: 0,
          side:'.side',
          compyClicks : [],
       //   copy : [],
          counter : 0,
        //  clipper : [],

start: function(){
  this.compyClicks=[];
  // copy=[];
  this.round=0;
  this.newRound();
},

newRound: function() {
$('[data-round]').text(++this.round);
this.randoPad();
this.displayLevel();


},

flash :function($element) {
    $element.addClass('opClass');
    var clip = $element.attr('data-tile');

    console.log('clip:', clip);
    $('#beep'+clip)[0].play();
  //  game.clipper.push(clip);
 // console.log('TODO: make flash happen for element:', element);
    setTimeout(function()
               {
                $element.removeClass('opClass')
             }
             , 500
             );
},


/*compyBoomin: function(){
  $('#beep'+flash.clip)[0].play();
},*/
randoPad: function() {
   this.compyClicks.push(Math.floor(Math.random() * 4) + 1);
   console.log('compyClicks:', this.compyClicks);
   this.showSequence();
},
checkClicks: function(element){
   var clip = element.attr('data-tile');
  if (clip != this.compyClicks[this.counter]){
    this.round=0;
    this.compyClicks=[];
    this.counter=0;
    alert("Nope! You're wrong");
 }
 else if (this.compyClicks.length - 1 == this.counter){
  this.newRound();
  this.counter=0;
 }
 else {
  this.counts()
 }

},

counts: function(){
  this.counter++;
},

showSequencePad: function (pad, index) {
  console.log('showSequencePad called:', pad, index);
  var that = this;
  setTimeout(function() {
    that.flash($('.side' + pad));
  }, 1000 * (index));
},

showSequence: function(){
  var that=this;
  this.compyClicks.forEach(function(pad, index) {
    that.showSequencePad(pad, index);
  }
  );
},
displayLevel: function(){
  $('.round h2').text('Round:' +this.round);
},

}







