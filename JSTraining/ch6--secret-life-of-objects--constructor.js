// Создаем конструктор
function Rabbit(type){
  this.type = type;
}

// Добавляем прототип
  Rabbit.prototype.speak = function(text){
    console.log("Кролик типа " + this.type + " говорит " + text);
  }

  Rabbit.prototype.teeth = "small";
  Rabbit.prototype.dance = function(){
    console.log("The "+ this.type + " rabbit dances a jig");
  }

// новые объекты на основе класса
var killerRabbit = new Rabbit("killer");
var blackRabit = new Rabbit("black");

killerRabbit.teeth = "Long, sharp, and bloody";
blackRabit.speak("hello neighbor");

console.log(killerRabbit.teeth);
console.log(blackRabit.teeth);


killerRabbit.speak("my teeth is "+killerRabbit.teeth);
