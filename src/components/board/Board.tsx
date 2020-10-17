import React from 'react';
import { initialChessBoardLayout } from '../../pieces/Pieces';
import { BoardRow } from '../boardrow/BoardRow';
import './Board.scss';

const boardLayout = initialChessBoardLayout;
let selectedPiecePosition: [number, number] | null = null;

export const getBoardLayout = () => boardLayout;
export const getSelectedPiecePosition = () => selectedPiecePosition;

export const setSelectedPiecePosition = (position: [number, number]) => selectedPiecePosition = position;

export const Board: React.FC = () => {
    return (
        <table>
            <tbody>
                {getBoardLayout().map((_row, index) => {
                    return <BoardRow key={index} rowNumber={index} />
                })}
            </tbody>
        </table>
    );
};
