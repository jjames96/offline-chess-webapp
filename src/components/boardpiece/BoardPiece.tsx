import React, { useState } from 'react';
import { ChessPiece } from '../../pieces/Pieces';
import { getBoardLayout, getSelectedPiecePosition, setSelectedPiecePosition } from '../board/Board';

interface BoardPieceProps {
    boardRow: number;
    boardColumn: number;
}

export const BoardPiece: React.FC<BoardPieceProps> = (props: BoardPieceProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const onClick = () => {
        if (getSelectedPiecePosition()) {
            // A piece is already selected so ignore this for now
            return;
        }

        setSelectedPiecePosition([props.boardRow, props.boardColumn]);
        setIsSelected(true);
    };

    const getTableItemFromBoardPiece = (piece: ChessPiece) => {
        const className = `
            ${piece !== ChessPiece.NULL ? 'has-piece' : ''}
            ${isSelected ? 'is-selected' : ''}
        `;
        const pieceString = piece !== ChessPiece.NULL ? String.fromCharCode(piece) : '';
    
        return <td onClick={onClick} className={className}>{pieceString}</td>;
    };
    
    return getTableItemFromBoardPiece(getBoardLayout()[props.boardRow][props.boardColumn]);
};
