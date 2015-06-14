var squareWorker = new Worker( "squareworker.js" );

squareWorker.addEventListener( "message", function( event ) {
  console.log("RESPOND: ", event.data);
});

squareWorker.postMessage("10");
