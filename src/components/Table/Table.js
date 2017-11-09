//React
import React from 'react';
import { array, arrayOf, shape, string, number, func } from 'prop-types';
//Components
import TableColumns from '../TableColumns';
import TableRows from '../TableRows';
/** A super lame component that says Hello with a custom message. */
const Table = ({ table, }) => {
    const {
        rows: { displayed },
        sort,
        columns: { visible, hidden },
    } = table;

    return (
        <div>
            <table className="react-collapsible">
                <TableColumns columns={ visible }
                         sort={ sort } />
                <TableRows rows={ displayed }
                      visibleColumns={ visible }
                      hiddenColumns={ hidden } />
            </table>
        </div>
    );
};

Table.PropTypes = {
    table: shape({
        rows: shape({
            displayed: array.isRequierd,
        }),
        columns: shape({
            visible: arrayOf(shape({
                accessor: string.isRequired,
                label: string.isRequired,
            })),
            hidden: arrayOf(shape({
                accessor: string.isRequired,
                label: string.isRequired,
            })),
        }),
        pagination: shape({
            currentPage: number.isRequierd,
        }),
        globalSearchString: string.isRequierd,
    }),
    actions: shape({
        nextPage: func.isRequired,
        previousPage: func.isRequired,
        sortColumn: func.isRequired,
        searchRows: func.isRequired,
        clearSearch: func.isRequired,
        expandRow: func.isRequired,
        resizeTable: func.isRequired,
    })
};

export default Table
