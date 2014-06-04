var ground = $('.ground');

var divs = [{top:ground.offset().top, left:ground.offset().left, width:ground.width()}];

var num=0;

function Box(){
    var _box;
    function addBox(x,y){
        num += 1;
        $('body').prepend('<div class="box num'+num+'"></div>');
        _box = $('.num'+num);
        if(y<ground.offset().top-_box.height()) {
            _box.offset({left:x-_box.width()/2, top:y-_box.height()/2});
        }
        else{
            _box.remove();
        }
    }

    //50写死需要修改为_box.height();
    function upArea() {
        var topValue = 9999;
        for(var i in divs){
            if (_box.offset().left<divs[i].left+divs[i].width+_box.width()&&
                _box.offset().left>divs[i].left-_box.width()){
                if(divs[i].top<topValue){
                    topValue = divs[i].top;
                }
            }
        }
        return (topValue - 50);
    }

    function drop() {
        //加速度
        var g = 10;
        //速度
        var v = 0;
        //时间
        var time = 0.2;
        //单位距离
        var s = 0;
        //top距离
        var top = _box.offset().top;

        var divTop = 0;



        divTop = upArea();

        function droptop() {
            v += g*time;
            s = (v+(v-g*time))/2*time;
            top += s;
            if(_box.offset().top >= divTop){
                uptop();
            }
            else{
                _box.animate({'top': top},13,'linear',droptop);
            }
        }

        function uptop(){
            v -= (g+10)*time; 
            s = (v+(v+(g+10)*time))/2 *time;
            top -= s;
            if (v<=0){
                if(_box.offset().top>= divTop){
                    _box.stop();
                    divs.push({top:_box.offset().top,left:_box.offset().left,width:_box.width()});
                    return;
                }
                droptop();
            }
            else{
                _box.animate({'top': top},13,'linear',uptop);
            }
        }

        droptop();
    }

    function drew(width,height) {
        var w = _box.width();
        var h = _box.height();
        _box.animate({
            left:_box.offset().left-(width-w)/2,
            top: _box.offset().top-(height-h)/2,
            width: width,
            height: height
        },250,'linear');
        //利用css进行动画变换
        // _box.css({
        //     'width':width,
        //     'height':height
        // });
}

    //绑定函数
    this.addBox = addBox;
    this.drop = drop;
    this.drew = drew;
}


$(document).click(function(e){
    var x = e.pageX;
    var y = e.pageY;

    var box = new Box();
    box.addBox(x,y);
    //box.drew(Math.random()*80,Math.random()*80);
    box.drew(50,50);
    box.drop();

});

/*        function meet() {
            var divs = $('div');
            for(var i in divs){
               if($(divs[i]).offset().top-_box.offset().top<_box.height() && 
                -_box.width()<$(divs[i]).offset().left-_box.offset().left<_box.width()){
                    return false;

               }
               else {
                    return true;
               }
            }
        }
        */


