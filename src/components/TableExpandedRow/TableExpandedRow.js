//React
import React from 'react';
import { object, arrayOf, shape, string } from 'prop-types';
//Components
/** A super lame component that says Hello with a custom message. */
const TableExpandedRow = ({ row, columns, colspan }) => {
    const listOfHiddenAttributes = columns.map(({ accessor, label }) => {
        return <p className="child-cell" key={ accessor }>
                  <span className="child-label">{ label }</span>
                  <span className="child-content" dangerouslySetInnerHTML={{ __html: row[accessor] }} />
               </p>
    });

    return (
        <td colspan={ colspan }>
            { listOfHiddenAttributes }
        </td>
    );
};

TableExpandedRow.PropTypes = {
    row: object.isRequired,
    columns: arrayOf(shape({
        accessor: string.isRequired,
        label: string.isRequired,
    }))
};

export default TableExpandedRow
