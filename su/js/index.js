$(function () {
    var $banner = $('.banner');
    var width = $banner.width();
    var imgBox = $banner.find('ul:first');
    var pointBox = $banner.find('ul:last');
    var points = pointBox.find('li');
    var animateFn =function () {
        imgBox.animate({transform: 'translateX(' + (-index * width) + 'px)'}, 200, function () {
            if (index >= 9) {
                index = 1;
                imgBox.css({transform: 'translateX(' + (-index * width) + 'px)'});
            } else if (index <= 0) {
                index = 8;
                imgBox.css({transform: 'translateX(' + (-index * width) + 'px)'});
            }
            points.removeClass('now').eq(index-1).addClass('now');
            // console.log(index);
        });
    };
    var index = 1;
    var timer = setInterval(function () {
        index++;
        animateFn();
    }, 5000);




    imgBox.on('swipeLeft',function () {
        // clearInterval(timer);
        alert(1111);
        index++;
        animateFn();
    });
    imgBox.on('swipeRight',function () {
        // clearInterval(timer);
        index--;
        animateFn();
    });
});