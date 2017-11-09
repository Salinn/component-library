//React
import React from 'react';
import { arrayOf, shape, string, } from 'prop-types';
//Components
import TableColumn from '../TableColumn';
/** A super lame component that says Hello with a custom message. */
const TableColumns = ({ columns }) => {
    const tableColumns = columns.map(({ accessor, label }) => {
        return <TableColumn key={ accessor }
                       accessor={ accessor }
                       label={ label } />;
    });
    return (
        <thead>
            <tr>
                { tableColumns }
            </tr>
        </thead>
    );
};

TableColumns.PropTypes = {
    columns: arrayOf(shape({
        accessor: string.isRequired,
        label: string.isRequired,
    })),
};

export default TableColumns
