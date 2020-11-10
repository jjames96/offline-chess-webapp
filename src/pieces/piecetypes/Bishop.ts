import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class Bishop extends BasePiece {
    pieceType = ChessPiece.BISHOP;
    calculateMovement = () => {
        return [];
    }
}

export class WhiteBishop extends Bishop {
    pieceColour = PieceColour.WHITE;
}

export class BlackBishop extends Bishop {
    pieceColour = PieceColour.BLACK;
}
