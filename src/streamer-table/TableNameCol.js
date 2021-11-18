import React from 'react';
import '../index.css';

class TableNameCol extends React.Component {

    render() {
        return(
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-gray-900 dark:text-gray-100">
                    <a href={"https://twitch.tv/" + this.props.streamer.twitch_metadata.login} target={"_blank"} className={"hover:underline"} rel="noopener noreferrer">
                        {this.props.streamer.name}
                    </a>
                </div>
            </td>
        );
    }

}

export default TableNameCol;