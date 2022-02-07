document.querySelector("button").addEventListener("click",checkout)
function checkout(){
setTimeout(function(){
    alert("Your order is accepted")
},0);
setTimeout(function(){
    alert("Your order is being cooked ")
},3000);
setTimeout(function(){
    alert("Your order is ready")
},8000);
setTimeout(function(){
    alert("order out for delivery")
},10000);
setTimeout(function(){
    alert("Order delivered")
},12000);
}