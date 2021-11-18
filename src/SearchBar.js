import React from 'react';
import './index.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onSearchChange(event.target.value);
    }

    render() {
        return(
            <form className={"mb-8"}>
                <label className={"font-bold"}>Search</label>
                <input type="text" placeholder="Search" className={"mt-2 w-full border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none text-gray-900"} value={this.props.search} onChange={this.handleChange}/>
            </form>
        );
    }

}

export default SearchBar;