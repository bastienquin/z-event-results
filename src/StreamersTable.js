import React from 'react';
import './index.css';
import TableHeader from "./TableHeader";

class StreamersTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <TableHeader />
                                <tbody className="bg-white divide-y divide-gray-200">

                                    {this.props.zEvent.streamers.map((streamer, index) => {

                                        const classTr = (index % 2 === 1) ? "bg-gray-100" : "bg-white";
                                        const vodExists = streamer.vods.length !== 0 ? "" : <p>No VOD available</p>;
                                        const donation = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(this.props.zEvent.pools[streamer.login]);

                                        return(
                                            <tr className={classTr}>
                                                <td key={index} className="px-6 py-2.5 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full cursor-pointer" src={streamer.profile_url} alt={streamer.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-bold text-gray-900">{streamer.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-gray-900 font-bold">{donation}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-gray-900">10 / 10</div>
                                                </td>
                                                <td className="px-6 py-2.5 whitespace-nowrap text-sm text-gray-500">

                                                    { vodExists }

                                                    {streamer.vods.map((vod) => {
                                                        return(
                                                            <a href={vod} className={"w-12 inline-block"} title={streamer.name + " VOD"} target={"_blank"}>
                                                            <img src={"http://image.noelshack.com/fichiers/2021/46/4/1637191390-zevent.png"}
                                                                 alt={"Z-Event VOD"} className={"h-10 w-10 rounded-full"} />
                                                            </a>
                                                        );
                                                    })}
                                                </td>
                                                <td className="px-6 py-2.5 whitespace-nowrap text-sm">
                                                    <a href={"https://twitch.tv/" + streamer.login} target={"_blank"} className={"text-purple-500 hover:underline"}>
                                                        <img className={"mr-2 w-5 float-left"} src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg"} alt={"Twitch logo"} />
                                                        {streamer.name}
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StreamersTable;