let btnBenefit = document.getElementById("btnBenefits")
let btnDetail = document.getElementById("btnDetails")
let colBenefit = document.getElementsByClassName('.col-benefits')
let colDetail = document.getElementsByClassName('.col-details')
let btnDrop = document.getElementsByClassName('.btn-drop')

btnDetail.onclick = function () {
    $('.collapse').collapse('hide')
}

btnBenefit.onclick = function () {
    $('.collapse').collapse('hide')
}

// btnDetail.onclick = function () {
//     alert("clicked")
// }
