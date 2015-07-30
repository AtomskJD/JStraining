function speak(text){
  console.log("Выводим "+ this.type +" "+ text);
}

var whiteRabbit = {type: "white rabit", speak: speak};
var fatRabbit = {type: "fat rabit", speak: speak};

whiteRabbit.speak("hello world");

// тут мы вызываем speak у объекта fatrabbit
speak.apply(fatRabbit, ['hey am NOT fat!']);
speak.call(whiteRabbit, "А это?");

// вот суки, чуть не наебали
speak.call({type: "old rabit"}, "Это уже совсем другой объект");
speak.apply({type: "new rabit"}, ["и это?"]);