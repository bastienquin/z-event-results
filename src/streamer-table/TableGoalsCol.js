import React from 'react';
import '../index.css';

class TableGoalsCol extends React.Component {

    render() {

        let done = 0;
        this.props.streamer.donation_goals.forEach(goal => { if (goal.done) done++; });

        return(
            <td className="px-6 py-4 whitespace-nowrap">
                <a href={'https://zevent.gdoc.fr/donation-goals/#' + this.props.streamer.twitch_metadata.login} target={"_blank"} className={"text-gray-900 dark:text-gray-100 hover:underline"} rel="noopener noreferrer">
                    {done} / {this.props.streamer.donation_goals.length}
                </a>
            </td>
        );
    }

}

export default TableGoalsCol;