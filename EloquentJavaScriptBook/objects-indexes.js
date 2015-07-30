/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

Obj = {lol: "lol", echos: "eeeee", dod: "ddo", nnn: 12};
Arr = ["lol", "eeeee", "ddo", 12];

Arr[6] = "DODOD";
Arr.push("eeeee i think i do it again");

Obj[5] = "DODO";
Obj[6] = "elloo";


console.log(3 in Arr, 5 in Arr, 6 in Arr, Arr);

console.log("lol" in Obj, 5 in Obj, Obj);
