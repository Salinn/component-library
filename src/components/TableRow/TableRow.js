//React
import React from 'react';
import { object, arrayOf, string, shape } from 'prop-types';
//Components
import TableCell from '../TableCell';
import TableExpandedRow from '../TableExpandedRow';
/** A super lame component that says Hello with a custom message. */
const TableRow = ({ row, visibleColumns, hiddenColumns, actions, rowIndex }) => {
    const hiddenColumnsLength = hiddenColumns.length;
    const cells = visibleColumns.map(({ accessor }, index) => {
        return <TableCell key={ accessor }
                     row={ row }
                     accessor={ accessor }
                     rowIndex={ rowIndex }
                     cellIndex={ index }
                     hiddenColumnsLength={ hiddenColumnsLength }
                     actions={ actions } />
    });

    return (
            <tr key='normalRow'>
                { cells }
            </tr>
    );
};

TableRow.PropTypes = {
    row: object.isRequired,
    columns: arrayOf(shape({
        accessor: string.isRequired,
        label: string.isRequired,
    }))
};

export default TableRow
