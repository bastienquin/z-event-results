import React from 'react';
import '../index.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class StreamersTable extends React.Component {

    render() {

        return(
            <div className="flex flex-col shadow-2xl">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <TableHeader />
                                <TableBody zEvent={this.props.zEvent} search={this.props.search} onlyVod={this.props.onlyVod} onlyCompletedGoals={this.props.onlyCompletedGoals} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StreamersTable;