$(document).ready(function(){

    layui.use(['layer', 'laypage', 'element'], function () {
        var layer = layui.layer;
        layer.open({
            title: '提示',
            content: '欢迎光临哈!'
        });
    });
 

    var lisLength = $(".level-list li").length;
    if (lisLength % 3 == 2) {
        $('.level-list li:last-child').addClass('moveLi')
    }

    // 点击标签切换
    $('.level-list li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.level-item').hide();
        $('.level-item').eq($(this).attr('data-id')).show();

        $('.tip-box').show();

        if(parseInt($(this).attr('data-full'))=='0'){
            $('.tip-box .false').show();
            $('.tip-box .right').hide()
        }else{
            $('.tip-box .false').hide();
            $('.tip-box .right').show()
        }
    })
})