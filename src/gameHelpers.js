export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/*
 * Creates an array of 20 arrays (rows).
 * Each row contains contains 12 arrays (column) that contains an array where the contents is either 0 or clear.
 */
export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    return new Array(STAGE_WIDTH).fill([0, "clear"]);
  });
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the grid height, preventing tetromino movement past the bottom of the grid
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the grid width, preventing tetromino movement too far left or right
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};