// DOM elenemt #list
var list = document.querySelector("#list");
function addToList( name ) {
  var option = document.createElement("option");
  option.textContent = name;
  list.appendChild( option );
}

// Read a local notes list

//* notes - has all parsed values
var notes = JSON.parse(localStorage.getItem("notes")) || {"WHAT": ""};
for (var name in notes) {
  if (notes.hasOwnProperty(name)) {
    addToList( name );
  }
}

function saveToStorage() {
    localStorage.setItem( "notes", JSON.stringify( notes ));
}
// DOM element textarea
var currentNote = document.querySelector("#note");
  currentNote.value = notes[ list.value ];

list.addEventListener( "change", function() {
    currentNote.value = notes[ list.value ];
});
currentNote.addEventListener( "change", function() {
    notes[ list.value ] = currentNote.value;
  saveToStorage();
});

function addNote() {
  var name = prompt( "Название заметки", "");
  if ( !name ) return;
    if ( !notes.hasOwnProperty( name )) {
      notes[ name ] = "";
    addToList( name );
    saveToStorage();
  }

  list.value = name;
    currentNote.value = notes[ name ];
}
