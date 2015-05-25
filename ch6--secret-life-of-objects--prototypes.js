var protoRabbit = {
  speak: function(text){
   console.log("Кролик типа " + this.type + " говорит " + text);  
  }
};

var killerRabbit1 = Object.create(protoRabbit);

killerRabbit1.type = "Убийца 101";
killerRabbit1.speak("Виииии");
