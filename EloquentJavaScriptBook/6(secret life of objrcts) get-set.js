// getters &&& setters
var pile = {
  elements: ["one", "two", "three"],
  
  get height() {
    return this.elements.length;
  },
  
  set height(value) {
    console.log("ДА что же ты делаешь", value);
  }
}


console.log(pile.height);
pile.height = "Валя!";
