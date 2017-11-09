//React
import React from 'react';
import { array, arrayOf, string, shape } from 'prop-types';
//Components
import TableRow from '../TableRow';
/** A super lame component that says Hello with a custom message. */
const TableRows = ({rows, visibleColumns, hiddenColumns, actions }) => {
    const tableRows = rows.map((row, index) => {
        return <TableRow key={ index }
                    row={ row }
                    visibleColumns={ visibleColumns }
                    hiddenColumns={ hiddenColumns }
                    actions={ actions }
                    rowIndex={ index } />
    });

    return (
        <tbody>
            { tableRows }
        </tbody>
    );
};

TableRows.PropTypes = {
  rows: array.isRequierd,
  columns: arrayOf(shape({
    accessor: string.isRequired,
    label: string.isRequired,
  }))
};

export default TableRows
