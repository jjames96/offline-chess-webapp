import React from 'react';
import { initialChessBoardLayout } from '../../pieces/Pieces';
import { BoardRow } from '../boardrow/BoardRow';
import './Board.scss';

export const Board: React.FC = () => {
    return (
        <table>
            <BoardRow pieces={initialChessBoardLayout[0]} />
            <BoardRow pieces={initialChessBoardLayout[1]} />
            <BoardRow pieces={initialChessBoardLayout[2]} />
            <BoardRow pieces={initialChessBoardLayout[3]} />
            <BoardRow pieces={initialChessBoardLayout[4]} />
            <BoardRow pieces={initialChessBoardLayout[5]} />
            <BoardRow pieces={initialChessBoardLayout[6]} />
            <BoardRow pieces={initialChessBoardLayout[7]} />
        </table>
    );
};
