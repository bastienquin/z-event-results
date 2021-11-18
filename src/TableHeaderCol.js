import React from 'react';
import './index.css';

class TableHeaderCol extends React.Component {

    render() {
        return(
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">
                {this.props.children}
            </th>
        );
    }

}

export default TableHeaderCol;