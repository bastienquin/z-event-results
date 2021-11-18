import React from 'react';
import '../index.css';

class TableTwitchCol extends React.Component {

    render() {
        return(
            <td className="px-6 py-2.5 whitespace-nowrap text-sm">
                <a href={"https://twitch.tv/" + this.props.streamer.twitch_metadata.login} target={"_blank"} className={"text-purple-500 hover:underline"} rel="noopener noreferrer">
                    <img className={"mr-2 w-5 float-left"} src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg"} alt={"Twitch logo"} />
                    {this.props.streamer.name}
                </a>
            </td>
        );
    }

}

export default TableTwitchCol;