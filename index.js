
window.addEventListener("mousemove", function (event) {
    var rect =document.querySelector('#rect');
    let halfRectWidth = rect.getBoundingClientRect().width / 2;

    let xVal = gsap.utils.mapRange(0,
         window.innerWidth,
        100 + halfRectWidth,
        window.innerWidth - (100 + halfRectWidth), 
        event.clientX);

    gsap.to("#rect", { left: xVal, ease: Power3 });
     


});