document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll('[data-barchart]')) {
    document.querySelectorAll('[data-barchart]').forEach((v, i) => {
      barChart(v);
    });
  }
});

function barChart(v) {
  function compare( a, b ) {
    if ( a[5] < b[5] ){
      return -1;
    }
    if ( a[5] > b[5] ){
      return 1;
    }
    return 0;
  }

  var colors = {wasser: '#009ee3',
                wind: '#ffffff',
                solar: '#ffff00'};

  var dataurl = document.querySelector('[data-powerdata]');
  dataurl = dataurl ? dataurl.dataset.powerdata : null;

  var data = [];
  if (dataurl) {
    fetch(dataurl).then(r => r.text()).then(d => {
      var rows = d.split('\n').slice(1).map(x => x.split(','));
      rows.forEach(function(r) {
        if ( r[0] !== "") {
          data.push(r);
        }
      });
      data = data.sort( compare );

      data.forEach((d) => {
        d.date = parseInt(d[5]);
        if (d[11] !== 'undefined') {
          d.value = d[11] / 1000; // kw -> mw
        } else {
          d.value = 0;
        }
        d.type = d[3];
        d.name = d[1];
        d.tech = d[2];
      });

      var margin = {top: 20, right: 20, bottom: 70, left: 40},
          width = 800 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

      var parseDate = d3.isoParse;

      var y = d3.scaleLinear().range([height, 0]);
      var x = d3.scaleLinear()
          .domain([d3.min(data, function(d) { return d.date; }) -10, 2025])
          .range([margin.right, width - margin.right]);
      var scaleX = d3.scaleLinear()
          .domain([d3.min(data, function(d) { return d.date; }) -10, 2025])
          .range([margin.right, width - margin.right]);

      var xAxis = d3.axisBottom()
          .scale(scaleX)
          .ticks(10, 20)
          .tickFormat((d) => d);
      var yAxis = d3.axisLeft()
          .scale(y)
          .ticks(10);

      var svg = d3.select("#"+ v.dataset.barchart).append("svg")
          .attr("width", '100%')
          .attr("height", '100%')
          .attr('viewBox','0 0 '+ (width + margin.left + margin.right) +' '+ (height + margin.top + margin.bottom))
          .attr('preserveAspectRatio','xMinYMin')
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("refX", 2)
        .attr("refY", 7)
        .attr("markerWidth", 14)
        .attr("markerHeight", 14)
        .attr("orient", "left")
        .append("path")
        .attr("d", "M 1 1 9 5 1 9 Z");

      x.domain(data.map(function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.value; })]);

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height + 10) + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("dy", "2em");

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("y", 6)
        .style("text-anchor", "middle")
        .text("Value");

      var Tooltip = d3.select("#"+ v.dataset.barchart)
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .attr("class", "tooltip")
          .style("position", "absolute")
          .style("background-color", "black")
          .style("color", "white")
          .style("padding", "10px");

      var mouseover = function(d) {
        Tooltip
          .style("opacity", 1);
        d3.select(this)
          .style("stroke", "black")
          .style("opacity", 1);
      };
      var mousemove = function(d) {
        let parentSvg = this.parentNode.parentNode.getBoundingClientRect();
        let parentY = parentSvg.top;
        let parentX = parentSvg.left;
        let parentH = parentSvg.height;
        let parentW = parentSvg.width;
        let mouseY = d3.mouse(this)[1];
        let mouseX = d3.mouse(this)[0];
        let mY = mouseY + parentY;
        let mX = mouseX + parentX;

        Tooltip
          .html(`${d.tech} ${d.name} <br> Erstinbetriebnahme ${d.date} <br> Installierte Leistung ${d.value} MW`)
          .style("left", mX + "px")
          .style("top", mY + "px");
      };
      var mouseleave = function(d) {
        Tooltip
          .style("opacity", 0);
        d3.select(this)
          .style("stroke", "lightgrey")
          .style("opacity", 0.8);
      };

      svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Installierte Leistung in MW pro Jahr");

      svg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .style("fill", function(d){ return colors[d.type.toLowerCase()]; })
        .style("stroke-width",'1px')
        .style("stroke", 'lightgrey')
        .attr("x", function(d) { return scaleX(d.date) -13; })
        .attr("width", 30)
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

    });
  } else {
    console.log("Provider does not indicate data on power plants");
  }
}
