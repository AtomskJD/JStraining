var // default vars
  num = 777,
  flNum = 2.5,
  str = "777",
  emptyStr = "",
  arr = [],
  arrF = ["a"],
  obj = {},
  boo = true,
  undef;


console.log("num:", Boolean(num));
console.log("str:", Boolean(str));
console.log("empty arr:", Boolean(arr));
console.log(arr == false, arr != true); // TRUE TRUE
console.log("arrF:", Boolean(arrF));
console.log(arrF != true, arrF != false); // TRUE TRUE if arr[str, str]
console.log("obj:", Boolean(obj));
console.log(obj != true, obj != false); // TRUE TRUE
console.log("emptyStr:", Boolean(emptyStr));
console.log("undef:", Boolean(undef));
console.log(undef != false, undef != true); //TRUE TRUE
console.log("null:", Boolean(null));

// actual types
typeof num === "number";
typeof str === "string";
typeof boo === "boolean";
typeof obj === "object";
null === null; // strict null
null == null;  // null or undefined
undef == null; // null or undefined
undef === undefined;
typeof undef === "undefined";
Array.isArray( arr );

obj.prop === undefined;
obj.hasOwnProperty( "prop" );
"prop" in obj;

// coercion
console.log(typeof +str);

str === num + "";
num === +str;
+boo === 1;
boo === !!str; // true
boo === !!emptyStr; // false

!!~arrF.indexOf("a");
if (arrF.indexOf("a") >= 0) {

}


parseInt( flNum, 10 );
~~flNum; // the same == 2
