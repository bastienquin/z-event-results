import React from 'react';
import './index.css';
import SearchBar from "./SearchBar";
import Title from "./Title";

class FilterableStreamersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search: ''};
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(search) {
        this.setState({
            search: search
        });
    }

    render() {
        return(
            <div className={"container mx-auto p-8"}>
                <Title />
                <SearchBar search={this.state.search} onSearchChange={this.handleSearchChange} />
            </div>
        );
    }

}

export default FilterableStreamersTable;