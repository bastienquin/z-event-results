import React from 'react';
import './index.css';

class Title extends React.Component {

    render() {
        return(
            <div className={"mb-8"}>
                <img alt="Z-Event logo" src={"https://clips.zevent.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_zevent.4472630d.png&w=640&q=7"} className={"float-right w-24"} />
                <h1 className={"text-2xl font-bold"}>Z-Event Infos</h1>
                <p className={"text-gray-400"}>React app to show all details from each Z-Event streamer</p>
            </div>
        );
    }

}

export default Title;