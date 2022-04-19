var cartArr = JSON.parse(localStorage.getItem("hotelcart"));

console.log(cartArr);

cartArr.map(function(data){
    var divbroder = document.createElement("div");
    divbroder.setAttribute("class","broder");

    var div=document.createElement("div");
    div.setAttribute("class","hotel1")

    var image = document.createElement("img");
    image.setAttribute("src",data.imgUrl)
    image.setAttribute("width","350px")

    var name = document.createElement("h2");
    name.setAttribute("class","hotelname")
    name.textContent = data.name

    var place = document.createElement("h3");
    place.textContent = data.city;
    place.setAttribute("class","city")

    var box2 = document.createElement("div");
    box2.setAttribute("id","flex");

    var p1=document.createElement("h4");
    p1.textContent = data.price;

    var p2=document.createElement("h4");
    p2.textContent = data.strikedOffPrice;
    p2.style.textDecoration="line-through"

    box2.append(p1,p2);

    div.append(image,name,place,box2);
    divbroder.append(div)
    document.querySelector(".allitems").append(divbroder);
});

var discount=cartArr.reduce(function(acc,cv){
    return acc+Number(cv.price);
}, 0 )
console.log(discount);

var total = cartArr.reduce(function(acc,cv){
    return acc+Number(cv.strikedOffPrice)
}, 0)
console.log(total);

// document.querySelector(".ajinkya").textContent = `Total MRP $${discount}`
// document.querySelector(".discount").textContent = `Discount $${total}`

document.querySelector(".total_price").textContent = `Total  MRP - `
document.querySelector(".discount_price").textContent = `Discount on MRP  - `
document.querySelector(".item_of_price").textContent = `$${total}`
document.querySelector(".discounted_price").textContent = `$${total-discount}`


document.querySelector(".priceafterds").textContent = `$${total-(0.1*total)}`

document.getElementById("btn1").addEventListener("click",paypage);

function paypage(){
window.location.href ="paymentpage.html"
}





