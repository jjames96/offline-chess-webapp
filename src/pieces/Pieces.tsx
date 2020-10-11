export enum ChessPiece {
    WHITE_KING = 9812,
    WHITE_QUEEN = 9813,
    WHITE_ROOK = 9814,
    WHITE_BISHOP = 9815,
    WHITE_KNIGHT = 9816,
    WHITE_PAWN = 9817,
    BLACK_KING = 9818,
    BLACK_QUEEN = 9819,
    BLACK_ROOK = 9820,
    BLACK_BISHOP = 9821,
    BLACK_KNIGHT = 9822,
    BLACK_PAWN = 9823,
    NULL
}

export const initialChessBoardLayout = [
    [
        ChessPiece.WHITE_ROOK,
        ChessPiece.WHITE_KNIGHT,
        ChessPiece.WHITE_BISHOP,
        ChessPiece.WHITE_QUEEN,
        ChessPiece.WHITE_KING,
        ChessPiece.WHITE_BISHOP,
        ChessPiece.WHITE_KNIGHT,
        ChessPiece.WHITE_ROOK
    ],
    [
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN,
        ChessPiece.WHITE_PAWN
    ],
    [
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL
    ],
    [
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL
    ],
    [
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL
    ],
    [
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL,
        ChessPiece.NULL
    ],
    [
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN,
        ChessPiece.BLACK_PAWN
    ],
    [
        ChessPiece.BLACK_ROOK,
        ChessPiece.BLACK_KNIGHT,
        ChessPiece.BLACK_BISHOP,
        ChessPiece.BLACK_QUEEN,
        ChessPiece.BLACK_KING,
        ChessPiece.BLACK_BISHOP,
        ChessPiece.BLACK_KNIGHT,
        ChessPiece.BLACK_ROOK
    ],
];
