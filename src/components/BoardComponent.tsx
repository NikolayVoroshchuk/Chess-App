import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Player } from '../models/Player';
import { Tile } from '../models/Tile';
import { LostFigures } from './LostFigures';
import { TileComponent } from './TileComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);

  function click(tile: Tile) {
    if (
      selectedTile &&
      selectedTile !== tile &&
      selectedTile.figure?.canMove(tile)
    ) {
      selectedTile.moveFigure(tile);
      swapPlayer();
      setSelectedTile(null);
    } else {
      if (tile.figure?.color === currentPlayer?.color) {
        setSelectedTile(tile);
      }
    }
  }

  useEffect(() => {
    highlightTiles();
    // eslint-disable-next-line
  }, [selectedTile]);

  function highlightTiles() {
    board.highlightTiles(selectedTile);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <div className="lost">
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
      </div>
      <div className="board">
        {board.tiles.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((tile) => (
              <TileComponent
                click={click}
                tile={tile}
                key={tile.id}
                selected={
                  tile.x === selectedTile?.x && tile.y === selectedTile?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="lost">
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
      </div>
    </div>
  );
};

export default BoardComponent;
