import React from 'react';
import { BoardRow } from '../boardrow/BoardRow';
import './Board.scss';

export const Board: React.FC = () => {
    return (
        <table>
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </table>
    );
};