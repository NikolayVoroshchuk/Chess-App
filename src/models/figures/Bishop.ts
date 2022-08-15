import { Colors } from "../Colors";
import { Tile } from "../Tile";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/bishop_b.png";
import whiteLogo from "../../assets/bishop_w.png";

export class Bishop extends Figure {

  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target)) {
      return false
    }
    if(this.tile.isEmptyDiagonal(target)) {
      return true
    }
    return false;
  }
}