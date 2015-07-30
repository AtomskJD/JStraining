function test() {
   console.log(foo());
   console.log(a);
    
   var a = 1;
   function foo() {
      return 2;
   }
}
 
test();