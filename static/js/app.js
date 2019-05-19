// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var filter = d3.select("#filter-btn");

var filterDTE = d3.select("#datetime");


console.log('refresh');

//console.log(filterDT.text());

function ShowTableData (Data)
{
    Data.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

function FilterUFOReport(UFOData) {
    return UFOData.datetime = FilterDT;
  }

// Set Table with full data

ShowTableData(tableData);

  // Filter Data

  
  filter.on("click", function() 
  {
    rows = tbody.selectAll("tr");
    rows.remove();
    FilterDT = d3.select("#datetime").node().value;
    Data = tableData.filter(FilterUFOReport);
    ShowTableData(Data);
    console.log('here');
  });
