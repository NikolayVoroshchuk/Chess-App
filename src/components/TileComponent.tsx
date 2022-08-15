import { FC } from 'react';
import { Tile } from '../models/Tile';

interface TileProps {
  tile: Tile;
  selected: boolean;
  click: (tile: Tile) => void;
}

export const TileComponent: FC<TileProps> = ({ tile, selected, click }) => {
  return (
    <div
      className={['tile', tile.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(tile)}
      style={{ background: tile.available && tile.figure ? 'green' : '' }}
    >
      {tile.available && !tile.figure && <div className={'available'} />}
      {tile.figure?.logo && <img src={tile.figure.logo} alt="" />}
    </div>
  );
};
