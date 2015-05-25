/*
* Journal correlation's
*/

// var JOURNAL = [];

function addEntry(events, didITurnIntoASquirrel){
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}
//addEntry(["work", "touched tree", "pizza", "running", "television"], false);



function phi(table){
  return (table[3] * table[0] - table[2] * table[1] / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * table[0] + table[2]));
}



function hasEvent(event, entry){
  return entry.events.indexOf(event) != -1;
}



function tableFor(event, journal){
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++){
    var entry = journal[i], index = 0;
    
    // Мой любимый кусок (работа с указателем в массиве)
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    
    table[index] += 1;
  }
  return table;
}



var map = {};
function storePhi(event, phi){
  map[event] = phi;
}
// storePhi("pizza", 0.069);

