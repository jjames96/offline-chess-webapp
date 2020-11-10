import { ChessPiece, PieceColour } from "./Pieces";

export default abstract class BasePiece {
    abstract pieceType: ChessPiece;
    abstract pieceColour: PieceColour;

    abstract calculateMovement: () => [number, number][]
}
