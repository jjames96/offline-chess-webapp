import BasePiece from "./BasePiece";
import { BlackBishop, WhiteBishop } from "./piecetypes/Bishop";
import { BlackKing, WhiteKing } from "./piecetypes/King";
import { BlackKnight, WhiteKnight } from "./piecetypes/Knight";
import { BlackPawn, WhitePawn } from "./piecetypes/Pawn";
import { BlackQueen, WhiteQueen } from "./piecetypes/Queen";
import { BlackRook, WhiteRook } from "./piecetypes/Rook";

// Enum relating chess pieces to unicode characters for corresponding white piece
export enum ChessPiece {
    KING = 9812,
    QUEEN = 9813,
    ROOK = 9814,
    BISHOP = 9815,
    KNIGHT = 9816,
    PAWN = 9817,
    NULL
}

// Offset required to calculate black piece character codes
// E.g. Black King = 9812 + 6 = 9818
export const blackPiecesCharacterCodeOffset = 6;

export enum PieceColour {
    WHITE,
    BLACK
}

export const initialChessBoardLayout: (BasePiece | null)[][] = [
    [
        new WhiteRook(),
        new WhiteKnight(),
        new WhiteBishop(),
        new WhiteQueen(),
        new WhiteKing(),
        new WhiteBishop(),
        new WhiteKnight(),
        new WhiteRook()
    ],
    [
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn(),
        new WhitePawn()
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn(),
        new BlackPawn()
    ],
    [
        new BlackRook(),
        new BlackKnight(),
        new BlackBishop(),
        new BlackQueen(),
        new BlackKing(),
        new BlackBishop(),
        new BlackKnight(),
        new BlackRook()
    ],
];
