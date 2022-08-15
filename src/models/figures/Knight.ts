import { Colors } from "../Colors";
import { Tile } from "../Tile";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/knight_b.png";
import whiteLogo from "../../assets/knight_w.png";

export class Knight extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Tile): boolean {
    if(!super.canMove(target)) {
      return false
    }
    const dx = Math.abs(this.tile.x - target.x);
    const dy = Math.abs(this.tile.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}