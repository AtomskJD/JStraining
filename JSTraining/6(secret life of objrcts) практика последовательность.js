function logFive(sequence){
  for (var i = 0; (i < sequence.length) && (i < 5); i++){
    console.log(sequence.current());
    sequence.next();
    
  }
}

// ARRAYSEQ interface
function ArraySeq(sequenceArray)
{
  this.values = sequenceArray;
  this.length = sequenceArray.length;
  this.pos    = 0;
}

ArraySeq.prototype.current = function(){
  return this.values[this.pos];
}


ArraySeq.prototype.next = function(){
  if (this.pos < this.length){
    this.pos++;
  }
}


ArraySeq.prototype.prev = function(){
  if (this.pos > 0){
   this.pos--; 
  }  
}

function RangeSeq(start, stop)
{
    this.pos   = 0;
    this.start = start;
    this.stop  = stop;
}


// RANGESEQ interface
RangeSeq.prototype = Object.create(ArraySeq.prototype);

Object.defineProperty(RangeSeq.prototype, "values", {
  get: function(){
                  var result = [];
                  for(var i = this.start; i<this.stop; i++ ){
                    result.push(i);
                  }

                  return result;
  }
});

Object.defineProperty(RangeSeq.prototype, "length", {
  get: function(){
    return this.values.length;
  }
})




// ----------------------------------------------------- //


console.log("logFive для ArraySeq");
logFive(new ArraySeq([1,2,4]));
console.log("logFive для RangeSeq");
logFive(new RangeSeq(100, 1000));

