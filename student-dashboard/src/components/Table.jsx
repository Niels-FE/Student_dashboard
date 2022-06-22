import React from 'react';

export const Table = ({ data }) => {
    return (
        <div className="col-span-4 row-start-1 row-end-4 w-full">
            <table>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Difficulty</th>
                        <th>Funfactor</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}