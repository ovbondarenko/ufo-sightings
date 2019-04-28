// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

var filterby = function(record, key, field) {
    if (key ==''){ 
        return record;
    }
    else if (key == field){
        return record;
    }
    else {return false};
};

submit.on("click", function(){

    d3.event.preventDefault();
    var inputDate = d3.select("#datetime")
                        .property("value");

    var inputCity = d3.select("#city")
                        .property("value")
                        .toLowerCase();

    var inputState = d3.select("#state")
                        .property("value")
                        .toLowerCase();

    var inputCountry = d3.select("#country")
                        .property("value")
                        .toLowerCase();
                        
    var inputShape = d3.select("#shape")
                        .property("value")
                        .toLowerCase();

    var filteredData = data.map(function(d) {return filterby(d, inputDate, d.datetime)}).filter( Boolean);
    filteredData = filteredData.map(function(d) {return filterby(d, inputCity, d.city)}).filter( Boolean);
    filteredData = filteredData.map(function(d) {return filterby(d, inputState, d.state)}).filter( Boolean);
    filteredData = filteredData.map(function(d) {return filterby(d, inputCountry, d.country)}).filter( Boolean);
    filteredData = filteredData.map(function(d) {return filterby(d, inputShape, d.shape)}).filter( Boolean);

    console.log(filteredData);

    var appendRow = function(item){


        var row = d3.select("tbody").append('tr');

        row.append('td').text(item.datetime);
        row.append('td').text(item.city);
        row.append('td').text(item.state);
        row.append('td').text(item.country);
        row.append('td').text(item.shape);
        row.append('td').text(item.durationMinutes);
        row.append('td').text(item.comments);

    }

    filteredData.forEach(appendRow);
});
