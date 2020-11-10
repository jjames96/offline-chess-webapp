import React from 'react';
import BasePiece from '../../pieces/BasePiece';
import { blackPiecesCharacterCodeOffset, PieceColour } from '../../pieces/Pieces';
import { getBoardLayout, getSelectedPiece, moveSelectedPiece, setSelectedPiece } from '../board/Board';

interface BoardPieceProps {
    boardRow: number;
    boardColumn: number;
}

interface BoardPieceState {
    isSelected: boolean;
}

const getPieceCharacterCode = (piece: BasePiece | null) => {
    if (!piece) {
        return null;
    }

    const characterCodeOffset = piece.pieceColour === PieceColour.BLACK ? blackPiecesCharacterCodeOffset : 0;
    return piece.pieceType + characterCodeOffset;
}

export class BoardPiece extends React.Component<BoardPieceProps, BoardPieceState> {
    constructor(props: BoardPieceProps) {
        super(props);
        this.state = { isSelected: false };
    }

    onClick = () => {
        const currentSelectedPiece = getSelectedPiece();

        // If no piece is currently selected then select this piece
        if (!currentSelectedPiece && getBoardLayout()[this.props.boardRow][this.props.boardColumn]) {
            setSelectedPiece({ piece: this, position: [this.props.boardRow, this.props.boardColumn] });
            this.setState({ isSelected: true });
            return;
        }

        // Else if we've clicked on the currently selected piece, then deselect it
        if (currentSelectedPiece?.piece === this) {
            setSelectedPiece(null);
            this.setState({ isSelected: false });
            return;
        }

        moveSelectedPiece([this.props.boardRow, this.props.boardColumn]);
    };

    getTableItemFromBoardPiece = (piece: BasePiece | null) => {
        const currentSelectedPiece = getSelectedPiece();
        const pieceCharacterCode = getPieceCharacterCode(piece);
        
        const className = `
            ${piece ? 'has-piece' : ''}
            ${this.state.isSelected && currentSelectedPiece && currentSelectedPiece.piece === this ? 'is-selected' : ''}
        `;

        const pieceString = pieceCharacterCode ? String.fromCharCode(pieceCharacterCode) : '';
    
        return <td onClick={this.onClick} className={className}>{pieceString}</td>;
    };
    
    render() {
        return this.getTableItemFromBoardPiece(getBoardLayout()[this.props.boardRow][this.props.boardColumn]);
    }
};
