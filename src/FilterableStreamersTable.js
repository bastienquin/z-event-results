import React from 'react';
import './index.css';
import SearchBar from "./SearchBar";

class FilterableStreamersTable extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <SearchBar />
        );
    }

}

export default FilterableStreamersTable;