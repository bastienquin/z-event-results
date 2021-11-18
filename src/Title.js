import React from 'react';
import './index.css';

class Title extends React.Component {

    render() {
        return(
            <div className={"mb-8"}>
                <a href={"https://zevent.fr"} target={"_blank"} rel="noopener noreferrer">
                    <img alt="Z-Event logo" src={"https://clips.zevent.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_zevent.4472630d.png&w=640&q=7"} className={"float-right w-24"} />
                </a>
                <button id="toggleDarkMode" className={"px-5 py-2 border border-gray-400 bg-transparent text-center rounded-lg text-gray-400 float-right mr-12 mt-2 transition dark:hover:border-gray-100 dark:hover:text-gray-100 hover:border-gray-900 hover:text-gray-900"}>
                    <i className="fas fa-sun" id="iconDarkMode" />
                </button>
                <h1 className={"text-2xl font-bold dark:text-gray-100"}>Z-Event 2021 Infos</h1>
                <p className={"text-gray-400"}>React app to view all details for each Z-Event 2021 streamer</p>
            </div>
        );
    }

}

export default Title;