import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from "jquery";

import FilterableStreamersTable from './FilterableStreamersTable.js'

$(function() {

      let zEvent = {};

      $.getJSON("https://zevent.gdoc.fr/api/pool_global.json", function(data) {
      zEvent.pool = data.global;
      $.getJSON("https://zevent.gdoc.fr/api/streamers.json", function(data) {
      zEvent.streamers = data;
      $.getJSON("https://zevent.gdoc.fr/api/pools.json", function(data) {
      zEvent.pools = data;

            ReactDOM.render(
                <React.StrictMode>
                      <FilterableStreamersTable zEvent={zEvent} />
                </React.StrictMode>,
                document.getElementById('root')
            );

      });
      });
      });

});