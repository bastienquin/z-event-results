import React from 'react';
import './index.css';
import SearchBar from "./SearchBar";
import Title from "./Title";
import StreamersTable from "./StreamersTable";

class FilterableStreamersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            onlyVod: false,
            onlyCompletedGoals: false
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleOnlyVodChange = this.handleOnlyVodChange.bind(this);
        this.handleOnlyCompletedGoalsChange = this.handleOnlyCompletedGoalsChange.bind(this);
    }

    handleSearchChange(search) {
        this.setState({
            search: search
        });
    }

    handleOnlyVodChange(onlyVod) {
        this.setState({
            onlyVod: onlyVod
        });
    }

    handleOnlyCompletedGoalsChange(onlyCompletedGoals) {
        this.setState({
            onlyCompletedGoals: onlyCompletedGoals
        });
    }

    render() {
        return(
            <div className={"container mx-auto p-8"}>
                <Title />
                <SearchBar search={this.state.search} onSearchChange={this.handleSearchChange} onOnlyVodChange={this.handleOnlyVodChange} onOnlyCompletedGoalsChange={this.handleOnlyCompletedGoalsChange} />
                <StreamersTable zEvent={this.props.zEvent} />
            </div>
        );
    }

}

export default FilterableStreamersTable;