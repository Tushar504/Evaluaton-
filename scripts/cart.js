let cart_data=JSON.parse(localStorage.getItem("cart"))||[];
total(cart_data)
function total(cart_data){
let res=cart_data.reduce(function(sum,elem){
     return sum+elem.price
},0)
document.querySelector("#total").textContent=`Total:  ₹ ${res} /-`
}




mapping(cart_data);
function mapping(data){
    document.querySelector("#cart").innerHTML="";
data.map(function(elem,index){

     
        
        let div1=document.createElement("div");

        let imag=document.createElement("img")
         imag.src=elem.strMealThumb

         let name=document.createElement("h3");
          name.textContent=elem.strMeal

          let price=document.createElement("h3");
          price.textContent=`price: ₹ ${elem.price}`

          let butt=document.createElement("button");
          butt.textContent="Remove"
          butt.addEventListener("click",function(){
              removed(data,index);
          })
          butt.setAttribute("id","remove")
        
          div1.append(imag,name,price,butt);
          document.querySelector("#cart").append(div1)
    })

}

 function removed(data,index){

data.splice(index,1)
localStorage.setItem("cart",JSON.stringify(data));
let final=JSON.parse(localStorage.getItem("cart"));
mapping(final)
total(final);
}