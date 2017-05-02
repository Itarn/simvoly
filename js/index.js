/**
 * Created by we on 2017/4/30.
 */

window.onload = function () {

    //banner����
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: 4000,
        speed: 1000,
        fade: {
            crossFade: false,
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });

    $(function () {



        //info1p
        //��������ͼ�ı���λ��

        var $feaIcon = $('.features-icon');
        $.each($feaIcon, function (i, item) {
            var $item = $(item);
            $item.css({
                'background-position': '' + (-i * 44) + 'px 0'
            })

        })

        //����case����ͼ
        var $infocaseImg = $('.info-3p>.container>div>a');
        $.each($infocaseImg, function (i, item) {
            var $item = $(item);
            $item.css({
                'background-image': 'url(images/case' + (i + 1) + (i == 6 ? '.jpg' : '.png)')
            })
        })


    })
}