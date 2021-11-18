import React from 'react';
import '../index.css';

class TableDonationCol extends React.Component {

    render() {
        return(
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-gray-900 dark:text-gray-100 font-bold">{this.props.donation}</div>
            </td>
        );
    }

}

export default TableDonationCol;