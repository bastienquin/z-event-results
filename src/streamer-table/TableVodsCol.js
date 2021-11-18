import React from 'react';
import '../index.css';

class TableVodsCol extends React.Component {

    render() {

        const vodExists = this.props.streamer.vods.length !== 0 ? "" : <p>No VOD available</p>;

        return(
            <td className="px-6 py-2.5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">

                { vodExists }

                {this.props.streamer.vods.map((vod) => {
                    return(
                        <a href={vod} className={"w-12 inline-block"} title={this.props.streamer.name + " VOD"} target={"_blank"}>
                            <img src={"http://image.noelshack.com/fichiers/2021/46/4/1637191390-zevent.png"}
                                 alt={"Z-Event VOD"} className={"h-10 w-10 rounded-full"} />
                        </a>
                    );
                })}
            </td>
        );
    }

}

export default TableVodsCol;