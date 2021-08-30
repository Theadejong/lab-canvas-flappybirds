window.onload = function() {
  //We create the canvas and its context
	const canvas = document.querySelector('my-canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let obstaclesId = null;

  //We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const faby = new Bird (ctx, width / 4, height / 2);




  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }

};
