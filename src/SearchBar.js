import React from 'react';
import './index.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleOnlyVodChange = this.handleOnlyVodChange.bind(this);
        this.handleOnlyCompletedGoalsChange = this.handleOnlyCompletedGoalsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(event) {
        this.props.onSearchChange(event.target.value);
    }

    handleOnlyVodChange(event) {
        this.props.onOnlyVodChange(event.target.checked);
    }

    handleOnlyCompletedGoalsChange(event) {
        this.props.onOnlyCompletedGoalsChange(event.target.checked);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form className={"mb-8"} onSubmit={this.handleSubmit}>

                <label className={"font-bold cursor-pointer text-gray-900 dark:text-gray-100"} >Search
                    <input type="text" placeholder="Search" className={"mt-2 w-full border-2 border-gray-300 bg-transparent h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none text-gray-900 dark:text-gray-100"} value={this.props.search} onChange={this.handleSearchChange}/>
                </label>
                <label className="mt-2 block cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 bg-transparent text-zevent outline-none rounded-lg cursor-pointer border-2 border-gray-300 " value={this.props.onlyVod} onChange={this.handleOnlyVodChange} />
                    <span className="ml-2 text-gray-500 dark:text-gray-400">Show only streamers with available VODs</span>
                </label>
                <label className="mt-2 block cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 bg-transparent text-zevent outline-none rounded-lg cursor-pointer border-2 border-gray-300" value={this.props.onlyCompletedGoals} onChange={this.handleOnlyCompletedGoalsChange} />
                    <span className="ml-2 text-gray-500 dark:text-gray-400">Show only streamers who have reached their donation goals</span>
                </label>
            </form>
        );
    }}

export default SearchBar;