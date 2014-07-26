// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  
  GAME = new GameManager(5, KeyboardInputManager, HTMLActuator, LocalStorageManager, getDifficulty());
});
var GAME;
