import BasePiece from "../BasePiece";
import { ChessPiece, PieceColour } from "../Pieces";

abstract class Pawn extends BasePiece {
    pieceType = ChessPiece.PAWN;
    calculateMovement = () => {
        return [];
    }
}

export class WhitePawn extends Pawn {
    pieceColour = PieceColour.WHITE;
}

export class BlackPawn extends Pawn {
    pieceColour = PieceColour.BLACK;
}
