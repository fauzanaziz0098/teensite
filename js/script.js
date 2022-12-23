// scroll to top
var scrollTop = document.getElementById("scrollTop");

window.onscroll = function () {
    scrollfunction()
};
function scrollfunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.opacity = "1";
    } else {
        scrollTop.style.opacity = "0";
    }
}

scrollTop.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})
