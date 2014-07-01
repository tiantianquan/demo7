var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('body')
            .append('svg')
            .style('width',width+margin.left+margin.right)
            .style('height',height+margin.bottom+margin.top)
            .style('background-color', d3.rgb(230,230,230));

var path = svg.append('g')
              .selectAll('path')
              .data([0,1,2,3,4])
              .enter()
              .append('path')
              .style('fill', '#000')
              .style('stroke', "#000")
              .attr('d',function(d){
                return 'M'+ d*100 + ' ' + d*100+ ' L' + d*200 + ' '+d*100;
              });
