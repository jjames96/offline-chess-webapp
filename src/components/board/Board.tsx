import React from 'react';
import { ChessPiece, initialChessBoardLayout } from '../../pieces/Pieces';
import { BoardPiece } from '../boardpiece/BoardPiece';
import { BoardRow } from '../boardrow/BoardRow';
import './Board.scss';

const boardLayout = initialChessBoardLayout;
// TODO these following values should be refactored into an interface
let selectedPiece: BoardPiece | null = null;
let selectedPiecePosition: [number, number] | null = null;

export const getBoardLayout = () => boardLayout;
export const getSelectedPiece = () => selectedPiece;

export const setSelectedPiece = (piece: BoardPiece | null) => selectedPiece = piece;
export const setSelectedPiecePosition = (position: [number, number] | null) => selectedPiecePosition = position;
export const moveSelectedPiece = (moveToSquare: [number, number]) => {
    if (!selectedPiece || !selectedPiecePosition) {
        return;
    }

    if (boardLayout[moveToSquare[0]][moveToSquare[1]] !== ChessPiece.NULL) {
        return;
    }

    boardLayout[moveToSquare[0]][moveToSquare[1]] = boardLayout[selectedPiecePosition[0]][selectedPiecePosition[1]];
    boardLayout[selectedPiecePosition[0]][selectedPiecePosition[1]] = ChessPiece.NULL;

    selectedPiece = null;
    selectedPiecePosition = null;
};

interface BoardState {
    layout: ChessPiece[][];
}

export class Board extends React.Component<{}, BoardState> {
    constructor(props: {}) {
        super(props);
        this.state = { layout: getBoardLayout() };

        setInterval(this.tick, 1000);
    }

    tick = () => {
        this.setState({ layout: getBoardLayout() });
    };

    render() {
        return (
            <table>
                <tbody>
                    {this.state.layout.map((_row, index) => {
                        return <BoardRow key={index} rowNumber={index} />
                    })}
                </tbody>
            </table>
        );
    }
};
