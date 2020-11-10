import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class Queen extends BasePiece {
    pieceType = ChessPiece.QUEEN;
    calculateMovement = () => {
        return [];
    }
}

export class WhiteQueen extends Queen {
    pieceColour = PieceColour.WHITE;
}

export class BlackQueen extends Queen {
    pieceColour = PieceColour.BLACK;
}
