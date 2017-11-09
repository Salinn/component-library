//React
import React from 'react';
import { object, string, number } from 'prop-types';
//Components
import Icon from '../Icon';
// import '../../assets/styles/react-table.css';
/** A super lame component that says Hello with a custom message. */
const TableCell = ({ row, accessor, cellIndex, rowIndex, actions, hiddenColumnsLength }) => {

    return <td className={ accessor }>{ row[accessor] }</td>;
};

TableCell.PropTypes = {
    row: object.isRequired,
    rowIndex: number.isRequired,
    cellIndex: number.isRequired,
    hiddenColumnsLength: number.isRequired,
    accessor: string.isRequired,
};

export default TableCell
