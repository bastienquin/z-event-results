import React from 'react';
import '../index.css';

class TableAvatarCol extends React.Component {

    render() {
        return(
            <td key={this.props.index} className="px-6 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <a href={"https://twitch.tv/" + this.props.streamer.login} target={"_blank"} className={"hover:underline"}>
                            <img className="h-10 w-10 rounded-full cursor-pointer" src={this.props.streamer.profile_url} alt={this.props.streamer.name} />
                        </a>
                    </div>
                </div>
            </td>
        );
    }

}

export default TableAvatarCol;