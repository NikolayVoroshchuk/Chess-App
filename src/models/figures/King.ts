import { Colors } from '../Colors';
import { Tile } from '../Tile';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/king_b.png';
import whiteLogo from '../../assets/king_w.png';

export class King extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Tile): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.tile.x - target.x);
    const dy = Math.abs(this.tile.y - target.y);

    if (
      (dx === 1 && dy === 1) ||
      (dx === 0 && dy === 1) ||
      (dx === 1 && dy === 0)
    ) {
      return true;
    }
    return false;
  }
}
