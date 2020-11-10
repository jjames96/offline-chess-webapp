import React from 'react';
import BasePiece from '../../pieces/BasePiece';
import { initialChessBoardLayout } from '../../pieces/Pieces';
import { BoardPiece } from '../boardpiece/BoardPiece';
import { BoardRow } from '../boardrow/BoardRow';
import './Board.scss';

const boardLayout = initialChessBoardLayout;
let selectedPiece: SelectedPiece | null = null;

export const getBoardLayout = () => boardLayout;
export const getSelectedPiece = () => selectedPiece;

export const setSelectedPiece = (piece: SelectedPiece | null) => selectedPiece = piece;
export const moveSelectedPiece = (moveToSquare: [number, number]) => {
    if (!selectedPiece) {
        return;
    }

    if (boardLayout[moveToSquare[0]][moveToSquare[1]]) {
        return;
    }

    boardLayout[moveToSquare[0]][moveToSquare[1]] = boardLayout[selectedPiece.position[0]][selectedPiece.position[1]];
    boardLayout[selectedPiece.position[0]][selectedPiece.position[1]] = null;

    selectedPiece = null;
};

interface SelectedPiece {
    piece: BoardPiece;
    position: [number, number];
}

interface BoardState {
    layout: (BasePiece | null)[][];
}

export class Board extends React.Component<{}, BoardState> {
    constructor(props: {}) {
        super(props);
        this.state = { layout: getBoardLayout() };
    }

    componentDidMount() {
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
