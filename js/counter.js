function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
    //pass the current timestamp to the step function
    const step = (currentTime) => {
        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }
        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);
        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
    window.requestAnimationFrame(step);
}
$(window).on('load', function() {
    var ElementTop = $('#counterBox').offset().top;
    const elmentH = $('#counterBox').height();
    var ElementBottom = ElementTop + elmentH;
    if( $(window).height() < $(window).width() ){
        $(window).scroll(function(){
            var WindowTop = $(window).scrollTop();
            var WindowBottom = WindowTop + $(window).height();
            if ( !$('body').hasClass('counter-finished') ){
                if ( WindowBottom >= ElementBottom && WindowTop <= ElementTop ) {
                    start_count();    
                }
            }
        });
    }else{
        var scrollableElement = document.body; //document.getElementById('scrollableElement');
        scrollableElement.addEventListener('wheel', checkScrollDirection);
        function checkScrollDirection(event) {
            var WindowTop = $(window).scrollTop();
            var WindowBottom = WindowTop + $(window).height();
            if (!$('body').hasClass('counter-finished') && checkScrollDirectionIsUp(event) && WindowTop <= ElementBottom) {
                start_count();    
            } else if(!$('body').hasClass('counter-finished') && !checkScrollDirectionIsUp(event) && WindowBottom >= ElementTop) {
                start_count();    
            }
        }
        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
                return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
        }
    }
});
function start_count(){
    let text1 = document.getElementById('0101');
    let text2 = document.getElementById('0102');
    let text3 = document.getElementById('0103');
    let text4 = document.getElementById('0104');
        animate(text1, 0, 50, 5000);
        animate(text2, 0, 30, 5000);
        animate(text3, 100, 401, 5000);
        animate(text4, 0, 18, 5000);
        $('body').addClass('counter-finished') 
}