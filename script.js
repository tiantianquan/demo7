var ground = $('.ground');
var box;

function drop(_box) {
    //加速度
    var g = 10;
    //速度
    var v = 0;
    //时间
    var time = 0.3;
    //单位距离
    var s = 0;
    //top距离
    var top = _box.offset().top;
    //总距离
    var ss = 0;
    //1
    // setInterval(function(){
    //     _box.css('top',function(){
    //         v += g*time*0.005;
    //         s += v*time*0.005;
    //         return s;
    //     });
    // },10);
    //2
    // setInterval(function(){
    //     v += g*time*0.005;
    //     s = v*time*0.005;
    //     top += s;
    //     _box.animate({'top': top},10, 'linear');
    // },10);
    //3
    function droptop() {
        v += g*time;
        s = v*time;
        ss += s;
        top += s;
        if(_box.offset().top >=$(window).height()-ground.height()-_box.height()){
            uptop();
        }
        else if (ss>5000){
            _box.stop();
        }
        else{
            _box.animate({'top': top},13,'linear',droptop);
        }
    }

    // function uptop(){
    //     v += g*time;
    //     s = v*time;
    //     ss += s;
    //     top -= s;
    //     if (_box.offset().top<=0){
    //         droptop();
    //     }
    //     else{
    //         _box.animate({'top': top},13,'linear',uptop);
    //     }
    // }

    function uptop(){
        v -= (g+10)*time; 
        s = v *time;
        ss += s;
        top -= s;
        if (v<=0){
            droptop();
        }
        else{
            _box.animate({'top': top},13,'linear',uptop);
        }
    }

    droptop();

}



function addBox(num,x,y){
    $('body').prepend('<div class="box num'+num+'"></div>');
    box = $('.num'+num);
    box.css({
        left: x,
        top: y
    });

    box.topleftX = box.offset().left;
    box.topleftY = box.offset().top;
    box.toprigthX = box.offset().left + box.width();
    box.toprigthY = box.offset().top;
    box.bottomleftX = box.offset().left;
    box.bottomleftY = box.offset().top + box.height();
    box.bottomrightX = box.offset().left + box.width();
    box.bottomrightY = box.offset().top + box.height();

}



$(document).click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    addBox(x,x,y);
    drop(box);
});

