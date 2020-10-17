import React from 'react';
import { getBoardLayout } from '../board/Board';
import { BoardPiece } from '../boardpiece/BoardPiece';

interface BoardRowProps {
    rowNumber: number;
}

export const BoardRow: React.FC<BoardRowProps> = (props: BoardRowProps) => {
    return (
        <tr>
            {getBoardLayout()[props.rowNumber].map((_piece, index) => {
                return (<BoardPiece key={index} boardRow={props.rowNumber} boardColumn={index} />);
            })}
        </tr>
    );
};
