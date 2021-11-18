import React from 'react';
import './index.css';

class TableHeaderCol extends React.Component {

    render() {
        return(
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {this.props.children}
            </th>
        );
    }

}

export default TableHeaderCol;