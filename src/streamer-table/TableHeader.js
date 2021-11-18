import React from 'react';
import '../index.css';
import TableHeaderCol from "./TableHeaderCol";

class TableHeader extends React.Component {

    render() {
        return(
            <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                    <TableHeaderCol>Avatar</TableHeaderCol>
                    <TableHeaderCol>Name</TableHeaderCol>
                    <TableHeaderCol>Collected donations</TableHeaderCol>
                    <TableHeaderCol>Completed donations goals</TableHeaderCol>
                    <TableHeaderCol>Available VODs</TableHeaderCol>
                    <TableHeaderCol>Twitch Channel</TableHeaderCol>
                </tr>
            </thead>
        );
    }

}

export default TableHeader;