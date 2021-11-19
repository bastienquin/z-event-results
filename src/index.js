import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from "jquery";

import FilterableStreamersTable from './FilterableStreamersTable.js'

if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'true');
}

$(function() {

      let zEvent = {};

      $.getJSON("https://zevent.gdoc.fr/api/pool_global.json", function(data) {
      zEvent.pool = data.global;
      $.getJSON("https://zevent.gdoc.fr/api/donation_goals.json", function(data) {
      zEvent.streamers = data;
      $.getJSON("https://zevent.gdoc.fr/api/pools.json", function(data) {
      zEvent.pools = data;

            ReactDOM.render(
                <React.StrictMode>
                      <FilterableStreamersTable zEvent={zEvent} />
                </React.StrictMode>,
                document.getElementById('root')
            );

            $("#toggleDarkMode").on('click', function() {
                  const html = $("html");
                  html.toggleClass('dark');
                  $("#iconDarkMode").toggleClass("fa-sun fa-moon");
                  localStorage.setItem('darkMode', html.hasClass('dark'));
                  console.log(localStorage.getItem('darkMode'));
            });

            if (JSON.parse(localStorage.getItem('darkMode')) === true) $("html").addClass('dark');

      });
      });
      });

});