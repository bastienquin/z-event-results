import React from 'react';
import '../index.css';

class TableGoalsCol extends React.Component {

    render() {
        return(
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-gray-900 dark:text-gray-100">10 / 10</div>
            </td>
        );
    }

}

export default TableGoalsCol;