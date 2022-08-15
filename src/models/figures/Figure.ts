import { Colors } from "../Colors";
import logo from "../../assets/king_b.png"
import { Tile } from "../Tile";

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  tile: Tile;
  name!: FigureNames;
  id: number;

  constructor(color: Colors, tile: Tile) {
    this.color = color;
    this.tile = tile;
    this.tile.figure = this;
    this.logo = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Tile): boolean {
    if(target.figure?.color === this.color) {
      return false
    }
    if(target.figure?.name === FigureNames.KING) {
      return false
    }
    return true
  }
  moveFigure(target: Tile) {

  }
}