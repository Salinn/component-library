//React
import React from 'react';
import { string } from 'prop-types';
//Components
/** A super lame component that says Hello with a custom message. */
const TableColumn = ({ accessor, label, onClick, sort }) => {
    // const direction = sort.column === accessor ? sort.direction : 'none';
    // const icon = sortDirection({ direction });

    return (
            <th key={ accessor }
                className={ `column-${accessor}` }>{ label }</th>
    );
};

TableColumn.PropTypes = {
    accessor: string.isRequired,
    label: string.isRequired,
};

export default TableColumn
