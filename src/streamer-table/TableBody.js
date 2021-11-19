import React from 'react';
import '../index.css';
import TableRow from "./TableRow";
import $ from 'jquery';

class TableBody extends React.Component {

    render() {

        const rows = [];
        let index = 0;

        this.props.zEvent.streamers.forEach((streamer, key) => {
            if (streamer.name.search(new RegExp(this.props.search , 'i')) === -1) return;

            let done = 0;
            streamer.donation_goals.forEach(goal => { if (goal.done) done++; });

            if (this.props.onlyVod && streamer.vods.length === 0) return;
            if (this.props.onlyCompletedGoals && done !== streamer.donation_goals.length) return;
            const donation = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(this.props.zEvent.pools[streamer.twitch_metadata.login]);

            rows.push(<TableRow key={key} streamer={streamer} index={index} donation={donation} />);

            index++;
        });

        $('#results').html(index);

        return(
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {rows}
            </tbody>
        );
    }

}

export default TableBody;