import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class Knight extends BasePiece {
    pieceType = ChessPiece.KNIGHT;
    calculateMovement = () => {
        return [];
    }
}

export class WhiteKnight extends Knight {
    pieceColour = PieceColour.WHITE;
}

export class BlackKnight extends Knight {
    pieceColour = PieceColour.BLACK;
}
