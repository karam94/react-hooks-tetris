import { useState, useCallback } from "react";
import { STAGE_WIDTH } from "../gameHelpers";
import { getRandomTetromino, TETROMINOS } from "../tetrominos";

export const usePlayer = () => {
  const emptyTetromino = TETROMINOS[0].shape;
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: emptyTetromino,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    // prev is the previous state obj of player
    // modify the previous state obj and overwrite with new state obj
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: getRandomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
