import React from "react";
import { TETROMINOS } from "../tetrominos";

import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

// Optimization:
// By memoizing this, React only re-renders cells that are changing, rather than re-render all of them.
export default React.memo(Cell);
