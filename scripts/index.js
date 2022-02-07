let res=fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res)
    append(res.meals)
})


function append(data){
    data.map(function(elem){
        elem.price=Math.round(Math.random()*500)
        
        let div1=document.createElement("div");

        let imag=document.createElement("img")
         imag.src=elem.strMealThumb

         let name=document.createElement("h3");
          name.textContent=elem.strMeal

          let price=document.createElement("h3");
          price.textContent=`price: ₹ ${elem.price}`

          let butt=document.createElement("button");
          butt.textContent="Add To Cart"
          butt.addEventListener("click",function(){
              addTocart(elem);
          })
          butt.setAttribute("id","addtocart")
        
          div1.append(imag,name,price,butt);
          document.querySelector("#menu").append(div1)
    })
}

var cart_arr=JSON.parse(localStorage.getItem("cart"))||[];

document.querySelector("#count").textContent=cart_arr.length
function addTocart(elem){
    cart_arr.push(elem);
  
    localStorage.setItem("cart",JSON.stringify(cart_arr))
    document.querySelector("#count").textContent=cart_arr.length
}