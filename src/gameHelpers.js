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
