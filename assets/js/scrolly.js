/**
 * scrollVis - encapsulates 
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];
 var div = d3.select("body").append("div").attr("class", "tooltip");

  
  
  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 24 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////

    
    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:none; ");

 
    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");


     
 

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    /////////////////////////////

    ///////////
    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");


    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:block; ");

    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:none; ");



  
 
  }

  /**
   *
   *
   */
   
   
  function showTitle2() {}

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {
  
  
  
   d3.select("body").selectAll(".bgbg")
      .style('display', 'inline-block');
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

    
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:none !important; ");
    vis.setAttribute("style", "visibility:hidden; ");
  
  
  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {
         
  ////////  var bgimage = document.getElementsByClassName("bgbg");
     

   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');

  ///////////////bgimage.setAttribute("style", "display:none; ");

  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
 
    var axisMargin = 1,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50;
    
    
    
    var dataset1 = [{
    'qName': 'Q1',
        'PFTE': '10',
        'EFTE': '62.7',
        'SOME': '72.2'
}, {
    'qName': 'Q2',
        'PFTE': '58',
        'EFTE': '59.9',
        'SOME': '67.7'
}, {
    'qName': 'Q3',
        'PFTE': '53.3',
        'EFTE': '59.1',
        'SOME': '69.4'
}, {
    'qName': 'Q4',
        'PFTE': '35.7',
        'EFTE': '58.8',
        'SOME': '68'
}, {
    'qName': 'Q5',
        'PFTE': '34.2',
        'EFTE': '58.7',
        'SOME': '72.4'
}, ];
    
    
    
    
    
  
  var data = [59247,65105,70590,73139,77530,80507,82043,82630,82287,81419,83544,84100,87862,90623,91479];
    
    //////////////    var max = d3.max(data, function(d) { return d.a; });
        var max = 91479;


  var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;
var range = [];
 
    
     
    /*
    var width = 500, height = 500;
    */
    
 var x = d3.scale.linear()
    .range([0, width])
  .domain([0, data.length -1]);
 /////////////////////     .domain([2000, 2014]);

    
/*    var x = d3.scale.ordinal()
 ////   .range([range])
    .range([0, width])
  .domain(['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014']); */
    
    
    
    
var y = d3.scale.linear()
    .range([height, 0])
    .domain([50000, 100000]);

     var scale = d3.scale.linear()
            .domain([2000, 2014])
            .range([0, width - margin*4 - labelWidth]);

   var xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");
    
    
/* var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom"); */

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

    
    
    
    
    

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d); })
    .y0(height)
    .interpolate('cardinal');

var svg = d3.select("#vis").append("svg")
    .attr("width", width - 210)
    .attr("height", height - 210)
    .append("g")
   ///////// .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(100, -20)")

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 6.3)
        .attr("class", "plotter")
      .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d); })


 .on("mousemove", function(d){
            div.style("left", d3.event.pageX-23+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
                        div.attr("class", "fixedtooltip");

             div.html("<h4>"+(d)+" Annual Hours of Delay, Denver-Aurora</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
  
  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {
  
  
    
    
   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');
    
     
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
    
    
    ///
    ////
    ////
    
   
     
    
    var datasetset = [
      
      {year: "2000",
        pop: "4338785"
}, {
    year: "2001",
        pop: "4444513"
}, {
    year: "2002",
        pop: "4504709"
}, {
    year: "2003",
        pop: "4555084"

}, {
    year: "2004",
        pop: "4608811"
}, {
    year: "2005",
        pop: "4662534"
}, {
    year: "2006",
        pop: "4745660"
}, {
    year: "2007",
        pop: "4821784"

}, {
    year: "2008",
        pop: "4901938"
}, {
    year: "2009",
        pop: "4976853"
}, {
    year: "2010",
        pop: "5049935"
}, {
    year: "2011",
        pop: "5119538"

}, {
    year: "2012",
        pop: "5191086"
}, {
    year: "2013",
        pop: "5268413"
}, {
    year: "2014",
        pop: "5350118"
}, {
    year: "2015",
        pop: "5448055"

}, {
    year: "2016",
        pop: "5538180"
}, {
    year: "2017",
        pop: "5630987"
}, {
    year: "2018",
        pop: "5722618"
}, {
    year: "2019",
        pop: "5814810"

}, {
    year: "2020",
        pop: "5907198"
}, {
    year: "2021",
        pop: "5999526"
}, {
    year: "2022",
        pop: "6094505"
}, {
    year: "2023",
        pop: "6191834"

}, {
    year: "2024",
        pop: "6290361"
}, {
    year: "2025",
        pop: "6391239"
}, {
    year: "2026",
        pop: "6493758"
}, {
    year: "2027",
        pop: "6596551"

}, {
    year: "2028",
        pop: "6697517"
}, {
    year: "2029",
        pop: "6795627"
}, {
    year: "2030",
        pop: "6892192"
}, {
    year: "2031",
        pop: "6987094"

}, {
    year: "2032",
        pop: "7080671"
}, {
    year: "2033",
        pop: "7172969"
}, {
    year: "2034",
        pop: "7263730"
}, {
    year: "2035",
        pop: "7352841"

}, {
    year: "2036",
        pop: "7440617"
}, {
    year: "2037",
        pop: "7526725"
}, {
    year: "2038",
        pop: "7611347"
}, {
    year: "2039",
        pop: "7693013"

}, {
    year: "2040",
        pop: "7773481"
}, {
    year: "2041",
        pop: "7851186"
}, {
    year: "2042",
        pop: "7924338"
}, {
    year: "2043",
        pop: "7995903"

}, {
    year: "2044",
        pop: "8065959"
}, {
    year: "2045",
        pop: "8134846"
}, {
    year: "2046",
        pop: "8201706"
}, {
    year: "2047",
        pop: "8267672"

}, {
    year: "2048",
        pop: "8332833"
}, {
    year: "2049",
        pop: "8397333"
} , {
    year: "2050",
        pop: "8461295"
}   ];
   
   
  var data = [4338785, 4444513, 4504709, 4555084, 4608811, 4662534, 4745660, 4821784, 4901938, 4976853, 5049935, 5119538, 5191086, 5268413, 5350118, 5448055, 5538180];

    var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;  
    
        var axisMargin = 1,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50;

            
            
    /*
    var width = 500, height = 500;
    */

    
    /*
     
    var x = d3.scale.ordinal().rangeRoundBands([0, wwidth], .2);
var y = d3.scale.linear().rangeRound([hheight, 0]);
  
   
    
    var color.domain(d3.keys(dataset[0]).filter(function (key) {
        return key !== "year";
    }));
    
    var efteValues = color.domain().map(function (name) {
    return {
        name: name,
        values: dataset.map(function (d) {
            return {
                year: d.year,
                pop: +d[name]
            };
        })
        };
    });
    
     x.domain(dataset.map(function(d) { 
    	return d.year; }));

    y.domain([
    d3.min(efteValues, function (c) {
        return d3.min(c.values, function (v) {
            return v.pop;
        });
    }),
    d3.max(efteValues, function (c) {
        return d3.max(c.values, function (v) {
            return v.pop;
        });
    })]);
    */
    
    
/*    
      x.domain(dataset.map(function(d) { 
    	return d.year; }));  
    
    
     y.domain([4000000, 6000000]);*/
 
    
 var max = d3.max(datasetset, function(d) { return d.year; });
    /*   */ 
    var max = 2050;
    
    
 var x = d3.scale.linear()
    .range([0, width])
   .domain([0, datasetset.length -1]); 
///////     .domain([2000, 2024]);

 /* */   
 var y = d3.scale.linear()
    .range([height, 0])
    .domain([4000000, 9000000]); 

  
     var scale = d3.scale.linear()
            .domain([2000, 2050])
            .range([0, width - margin*4 - labelWidth]);

   var xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    
    
    
    /*
    
    
    
        var scale = d3.scale.linear()
            .domain([2000, 2050])
            .range([0, width - margin*4 - labelWidth]);

    var xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");
     */
    
 /*   
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
*/

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

    
/*     var line = d3.svg.line()
    .interpolate("basis")
    .x(function (d) {
        return x(d.year);
    })
    .y(function (d) {
        return y(d.pop);
    });*/
    
    
var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d.pop); })
    .y0(height)
    .interpolate('cardinal'); 

var svg = d3.select("#vis").append("svg")
    .attr("width", width - 210)
    .attr("height", height - 210)
    .append("g")
  ////////////  .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(100, -20)")

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  svg.append("path")
      .datum(datasetset)
      .attr("class", "line")
      .attr("d", line);

  
    // Add the scatterplot
    svg.selectAll("dot")
        .data(datasetset)
      .enter().append("circle")
        .attr("r", 6.3)
        .attr("class", "plotter")
      .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d.pop); }) 
      
      .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
                        div.attr("class", "fixedtooltip");

            div.html("<h4>"+(d.pop)+" Colorado Residents in </h4>"+(d.year)+"");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
    
    ///
    ///
    ////
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {
  
    
    
   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');
    
    
   
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  var data_tax = [
{a:"1993 Revenue",b:372},
{a:"2015 Real Revenue",b:351} 
];
    
////////////////////////////////
/////// drawHBarChart(data_tax);

    


    var axisMargin = 5,
            margin = 10,
            valueMargin = 4,
  ///////          width = parseInt(d3.select('body').style('width'), 10),
            width = (window.innerWidth-16),
     //////////       height = parseInt(d3.select('body').style('height'), 10),
           ////// height = 500,
        height= window.innerHeight-16,
            barHeight = (height-axisMargin-margin*2)* 0.6/data_tax.length,
            barPadding = (height-axisMargin-margin*2)*0.4/data_tax.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data_tax, function(d) { return d.b; });



var chart = d3.select("#vis").append("svg")
///////////////var chart = d3.select("#"+name)
          ////  .attr("width", width+"px")
          .attr("width", "100%")
            .attr("height", "100%");
         ////   .style("margin-right", "80px")


    bar = chart.selectAll("g")
            .data(data_tax)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "bartexth")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
             /////////////////   return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([330, 380])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")





 .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
                  div.attr("class", "fixedtooltip");

            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
          ///  .attr("width", function(d){
        ///        return (width*((d.b*+".01")));
      ////      }) 

      .attr("width", function(d){
                return scale(d.b);
            });
 
;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
       /////////////     .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": $"+d.b+" Million");
            })
       ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });

 
          

  
    chart.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
            .call(xAxis);


 

    
    
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {
  
    
 
   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');
    
    
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
  }


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {
  
   
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'none');

  ///////////////bgimage.setAttribute("style", "display:none; ");

  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
 
    var axisMargin = 1,
            margin = 10,
            valueMargin = 1,
            labelWidth = 50;
    
    
    
    var dataset1 = [{
    'qName': 'Q1',
        'PFTE': '10',
        'EFTE': '62.7',
        'SOME': '72.2'
}, {
    'qName': 'Q2',
        'PFTE': '58',
        'EFTE': '59.9',
        'SOME': '67.7'
}, {
    'qName': 'Q3',
        'PFTE': '53.3',
        'EFTE': '59.1',
        'SOME': '69.4'
}, {
    'qName': 'Q4',
        'PFTE': '35.7',
        'EFTE': '58.8',
        'SOME': '68'
}, {
    'qName': 'Q5',
        'PFTE': '34.2',
        'EFTE': '58.7',
        'SOME': '72.4'
}, ];
    
    
    
    
    
  
  var data = [59247,65105,70590,73139,77530,80507,82043,82630,82287,81419,83544,84100,87862,90623,91479];
    
    //////////////    var max = d3.max(data, function(d) { return d.a; });
        var max = 91479;


  var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;
var range = [];
 
    
     
    /*
    var width = 500, height = 500;
    */
    
 var x = d3.scale.linear()
    .range([0, width])
  .domain([0, data.length -1]);
 /////////////////////     .domain([2000, 2014]);

    
/*    var x = d3.scale.ordinal()
 ////   .range([range])
    .range([0, width])
  .domain(['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014']); */
    
    
    
    
var y = d3.scale.linear()
    .range([height, 0])
    .domain([50000, 100000]);

     var scale = d3.scale.linear()
            .domain([2000, 2014])
            .range([0, width - margin*4 - labelWidth]);

   var xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");
    
    
/* var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom"); */

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

    
    
    
    
    

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d); })
    .y0(height)
    .interpolate('cardinal');

var svg = d3.select("#vis").append("svg")
    .attr("width", width - 210)
    .attr("height", height - 210)
    .append("g")
   ///////// .attr("transform", "translate(50, 10)")
    .attr("transform", "translate(100, -20)")

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 6.3)
        .attr("class", "plotter")
      .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d); })

     
    
     .style("fill", function(d) {
            if (d == 65105) {return "red"}
            else 	{ return "black" }
        ;})
    
    
  
      
     
    
    
    

 .on("mousemove", function(d){
            div.style("left", d3.event.pageX-23+"px");
            div.style("top", (d3.event.pageY)-45+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
                        div.attr("class", "fixedtooltip");

             div.html("<h4>"+(d)+" Annual Hours of Delay, Denver-Aurora</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })
  
  
    
    
      
    
     
    
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {
  
  
  
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  

   d3.select("body").selectAll(".bgbg")
      .style('display', 'inline-block');

  
  
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {}

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {

         
        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");


  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:inline-block; ");



  }

  ////////////////
  /////////////////////////
  ///////////////////////








  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));

  // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));

  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
        slide.show();
        console.log("show");
      } else {
        slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

    d3.selectAll("#container" + index).style("display", function(d, i) {
      return i == index ? "none" : "inline-block";
    });

    d3.selectAll("#container" + (index - 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    d3.selectAll("#container" + (index + 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

    ///////// console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  var eBG = document.getElementById("bg" + h);
  /////eBG.style.height = eBG.parentElement.clientHeight;
}
