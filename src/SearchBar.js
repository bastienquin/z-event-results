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
            <form>
                <label className={"font-bold"}>Search</label>
                <input type="text" placeholder="Search" className={"w-full mt-2 px-4 py-2 rounded outline-none text-gray-900"} value={this.props.search} onChange={this.handleChange}/>
            </form>
        );
    }

}

export default SearchBar;