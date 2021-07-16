// Sticky Navigation

let navbar = $('.navbar');

let today = $('#today').text();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const weekDays = ['Sunday', 'Mondy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function clock() {
    const date = new Date()
    const weekDay = weekDays[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const hours = date.getHours() <= 9 ? '0' + date.getHours() : date.getHours();

    const mins = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds();

    document.querySelector('#today').innerHTML = weekDay + ' ' + month + ' ' + day + ' ' + year + ' ' + hours + ' : ' + mins + ' : ' + seconds;

};


setInterval(clock, 1000);

$(window).scroll(function() {
    // console.log(window.innerHeight);
    // console.log($('.section-2').offset().top);
    let offsetTop = $('.section-2').offset().top - window.innerHeight;
    if ($(window).scrollTop() > offsetTop) {
        navbar.addClass('sticky');
    } else {
        navbar.removeClass('sticky');
    }
});


// let a = 0;
// $(window).scroll(function() {
//     let offsetTop = $('.numbers').offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() >= offsetTop) {
//         a = a + 1;
//         nCount('.rect>h1')
//     } else {
//         navbar.removeClass('sticky');
//     }
// })