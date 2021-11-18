import React from 'react';
import '../index.css';
import TableRow from "./TableRow";

class TableBody extends React.Component {

    render() {
        return(
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">

            {this.props.zEvent.streamers.map((streamer, index) => {

                const donation = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(this.props.zEvent.pools[streamer.login]);

                return(
                    <TableRow streamer={streamer} index={index} donation={donation} />
                );

            })}

            </tbody>
        );
    }

}

export default TableBody;