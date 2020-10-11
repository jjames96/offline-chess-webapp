import React from 'react';
import { ChessPiece } from '../../pieces/Pieces';

interface BoardRowProps {
    pieces: ChessPiece[];
}

const getTableItemFromBoardPiece = (piece: ChessPiece) => {
    const className = piece !== ChessPiece.NULL ? "has-piece" : undefined;
    const pieceString = piece !== ChessPiece.NULL ? String.fromCharCode(piece) : "";

    return <td className={className}>{pieceString}</td>;
};

export const BoardRow: React.FC<BoardRowProps> = (props: BoardRowProps) => {
    return (
        <tr>
            {props.pieces.map(piece => {
                return (getTableItemFromBoardPiece(piece));
            })}
        </tr>
    );
};
