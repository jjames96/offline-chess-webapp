import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class Rook extends BasePiece {
    pieceType = ChessPiece.ROOK;
    calculateMovement = () => {
        return [];
    }
}

export class WhiteRook extends Rook {
    pieceColour = PieceColour.WHITE;
}

export class BlackRook extends Rook {
    pieceColour = PieceColour.BLACK;
}
