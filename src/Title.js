import React from 'react';
import './index.css';

class Title extends React.Component {

    render() {
        return(
            <div className={"mb-8"}>
                <a href={"https://zevent.fr"} target={"_blank"}><img alt="Z-Event logo" src={"https://clips.zevent.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_zevent.4472630d.png&w=640&q=7"} className={"float-right w-24"} /></a>
                <h1 className={"text-2xl font-bold dark:text-gray-100"}>Z-Event 2021 Infos</h1>
                <p className={"text-gray-400"}>React app to view all details for each Z-Event 2021 streamer</p>
            </div>
        );
    }

}

export default Title;