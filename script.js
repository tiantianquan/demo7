var margin = {top: 100, right: 100, bottom: 100, left: 100},
width = 600 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom,
px = 'px';

var data = [0,1,2,3,4];

// var svg = d3.select('body')
//             .append('svg')
//             .style('width',width+margin.left+margin.right)
//             .style('height',height+margin.bottom+margin.top)
//             .style('background-color', d3.rgb(230,230,230));

// var path = svg.append('g')
//               .selectAll('path')
//               .data(data)
//             .enter().append('path')
//               .style('fill', '#000')
//               .style('stroke', "#000")
//               .attr('d',function(d){
//                 return 'M'+ d*100 + ' ' + d*100+ ' L' + d*200 + ' '+d*100+ ' Z';
//               });

var wrapper = d3.select('body')
.append('div')
.style('width',width+margin.left+margin.right+px)
.style('height',height+margin.bottom+margin.top+px)
.style('background-color', d3.rgb(230,230,230))
.style('position', 'absolute');

var div = wrapper.selectAll('div')
.data(data)
.enter().append('div')
.attr('style', function(d){
    return CreateBox(d);
});


function CreateBox(d){
    var box = {
        height: (d+1)*50,
        width: (d+1)*50,
        border: '1px solid #444',
        bgColor: '#' + 444*d/4 
    };

    return  'margin: auto;'+
            'position: absolute;'+
            'top: 0; left: 0; bottom: 0; right: 0;'+
            'height:'+box.height+px+
            ';width:'+box.width+px+
            ';border:'+box.border;
}

