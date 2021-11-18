import React from 'react';
import '../index.css';
import TableAvatarCol from "./TableAvatarCol";
import TableNameCol from "./TableNameCol";
import TableDonationCol from "./TableDonationCol";
import TableGoalsCol from "./TableGoalsCol";
import TableVodsCol from "./TableVodsCol";
import TableTwitchCol from "./TableTwitchCol"

class TableRow extends React.Component {

    render() {

        const classTr = (this.props.index % 2 === 1) ? "bg-gray-100 dark:bg-gray-900" : "bg-white dark:bg-gray-800";

        return(
            <tr className={classTr}>
                <TableAvatarCol streamer={this.props.streamer} index={this.props.index} />
                <TableNameCol streamer={this.props.streamer} />
                <TableDonationCol streamer={this.props.streamer} donation={this.props.donation} />
                <TableGoalsCol streamer={this.props.streamer} />
                <TableVodsCol streamer={this.props.streamer} vod={this.props.vod} />
                <TableTwitchCol streamer={this.props.streamer} />
            </tr>
        );
    }

}

export default TableRow;