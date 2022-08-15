import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { Figure } from './figures/Figure';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';
import { Tile } from './Tile';

export class Board {
  tiles: Tile[][] = [];
  lostBlackFigures: Figure[] = [];
  lostWhiteFigures: Figure[] = [];

  public initTiles() {
    for (let i = 0; i < 8; i++) {
      const row: Tile[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Tile(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Tile(this, j, i, Colors.WHITE, null));
        }
      }
      this.tiles.push(row);
    }
  }

  public highlightTiles(selectedTile: Tile | null) {
    for (let i = 0; i < this.tiles.length; i++) {
      const row = this.tiles[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedTile?.figure?.canMove(target);
      }
    }
  }
  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.tiles = this.tiles;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    return newBoard;
  }

  public getTile(x: number, y: number) {
    return this.tiles[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getTile(i, 1));
      new Pawn(Colors.WHITE, this.getTile(i, 6));
    }
  }
  private addKings() {
    new King(Colors.BLACK, this.getTile(4, 0));
    new King(Colors.WHITE, this.getTile(4, 7));
  }
  private addQueens() {
    new Queen(Colors.BLACK, this.getTile(3, 0));
    new Queen(Colors.WHITE, this.getTile(3, 7));
  }
  private addBishops() {
    new Bishop(Colors.BLACK, this.getTile(2, 0));
    new Bishop(Colors.BLACK, this.getTile(5, 0));
    new Bishop(Colors.WHITE, this.getTile(2, 7));
    new Bishop(Colors.WHITE, this.getTile(5, 7));
  }
  private addKnights() {
    new Knight(Colors.BLACK, this.getTile(1, 0));
    new Knight(Colors.BLACK, this.getTile(6, 0));
    new Knight(Colors.WHITE, this.getTile(1, 7));
    new Knight(Colors.WHITE, this.getTile(6, 7));
  }
  private addRooks() {
    new Rook(Colors.BLACK, this.getTile(0, 0));
    new Rook(Colors.BLACK, this.getTile(7, 0));
    new Rook(Colors.WHITE, this.getTile(0, 7));
    new Rook(Colors.WHITE, this.getTile(7, 7));
  }

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    this.addRooks();
  }
}
