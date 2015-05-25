function chicken() {
return egg();
}
function egg() {
return chicken();
}
console.log(chicken() + " came first.");
/*
Exception: too much recursion
@Scratchpad/1:2
*/