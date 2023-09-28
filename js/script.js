var allProducts = document.querySelectorAll(".list li")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalPrice = 0
var price = document.getElementById("Price")
// allproducts.forEach(function(item){
// item.onclick = function(){
//     div.innerHTML += item.textContent + "+"
//     totalPrice += item.querySelector("div[price]")
//     if(div.innerHTML !=""){
//      btn.style.display = "block";
//     }
//  }
// })

btn.onclick = function(){

    price.innerHTML += totalPrice;
}

allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + "+"
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
            // btn.style.width = "200px";
            // btn.style.height = "50px";
            // btn.style.backgroundColor = "blue"
            // btn.style.color = "white";
        }
    }
})
btn.onclick = function (){
    console.log(totalPrice)
    price.innerHTML=totalPrice
}
// var _prrice= document.getElementById("currprice")
// console.log(_prrice)
