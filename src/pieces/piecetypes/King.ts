import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class King extends BasePiece {
    pieceType = ChessPiece.KING;
    calculateMovement = () => {
        return [];
    }
}

export class WhiteKing extends King {
    pieceColour = PieceColour.WHITE;
}

export class BlackKing extends King {
    pieceColour = PieceColour.BLACK;
}
