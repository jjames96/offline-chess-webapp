import React from 'react';
import { ChessPiece } from '../../pieces/Pieces';
import { getBoardLayout, getSelectedPiece, moveSelectedPiece, setSelectedPiece } from '../board/Board';

interface BoardPieceProps {
    boardRow: number;
    boardColumn: number;
}

interface BoardPieceState {
    isSelected: boolean;
}

export class BoardPiece extends React.Component<BoardPieceProps, BoardPieceState> {
    constructor(props: BoardPieceProps) {
        super(props);
        this.state = { isSelected: false };
    }

    onClick = () => {
        const currentSelectedPiece = getSelectedPiece();

        // If no piece is currently selected then select this piece
        if (!currentSelectedPiece && getBoardLayout()[this.props.boardRow][this.props.boardColumn] !== ChessPiece.NULL) {
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

    getTableItemFromBoardPiece = (piece: ChessPiece) => {
        const currentSelectedPiece = getSelectedPiece()
        const className = `
            ${piece !== ChessPiece.NULL ? 'has-piece' : ''}
            ${this.state.isSelected && currentSelectedPiece && currentSelectedPiece.piece === this ? 'is-selected' : ''}
        `;
        const pieceString = piece !== ChessPiece.NULL ? String.fromCharCode(piece) : '';
    
        return <td onClick={this.onClick} className={className}>{pieceString}</td>;
    };
    
    render() {
        return this.getTableItemFromBoardPiece(getBoardLayout()[this.props.boardRow][this.props.boardColumn]);
    }
};
