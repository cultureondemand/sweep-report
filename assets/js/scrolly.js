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
  
  
  
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
  
  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {
  
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
  
        var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block !important; ");
    vis.setAttribute("style", "visibility:visible; ");
    
    var axisMargin = 5,
            margin = 10,
            valueMargin = 4;
  
  
  var data = [59247,65105,70590,73139,77530,80507,82043,82630,82287,81419,83544,84100,87862,90623,91479];
    
    //////////////    var max = d3.max(data, function(d) { return d.a; });
        var max = 91479;


  var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;

    
    var scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*4 - labelWidth]);
    
    
var x = d3.scale.linear()
/*    .range([0, width])
    .domain([0, data.length -1]);
  */  
                .domain([0, max])
            .range([0, width - margin*4]);


var y = d3.scale.linear()
    .range([height, 0])
    .domain([0, data.length -1]);

var xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
    .orient("left");

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d); })
    .y0(height)
    .interpolate('cardinal');

var svg = d3.select("#vis").append("svg")
    .attr("width", width + 60)
    .attr("height", height + 50)
    .append("g")
    .attr("transform", "translate(50, 10)")

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

  
  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {
  
  
  
  d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

  
    
    
    ///
    ////
    ////
    
     
   
  var data = [4338785, 4444513, 4504709, 4555084, 4608811, 4662534, 4745660, 4821784, 4901938, 4976853, 5049935, 5119538, 5191086, 5268413, 5350118, 5448055, 5538180];

    var wwidth= window.innerWidth;
  var hheight= window.innerHeight;
    
var width = wwidth, height = hheight;  
    /*
    var width = 500, height = 500;
    */
    
var x = d3.scale.linear()
    .range([0, width])
    .domain([0, data.length -1]);

var y = d3.scale.linear()
    .range([height, 0])
    .domain([0, data.length -1]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.area()
    .x(function(d, i) { return x(i); })
    .y1(function(d) { return y(d); })
    .y0(height)
    .interpolate('cardinal');

var svg = d3.select("#vis").append("svg")
    .attr("width", width + 60)
    .attr("height", height + 50)
    .append("g")
    .attr("transform", "translate(50, 10)")

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

  
    
    ///
    ///
    ////
  
  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {}


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {}

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
