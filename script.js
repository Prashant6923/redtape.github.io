const wrapper =document.querySelector(".sliderWrapper");
const menuItems =document.querySelectorAll(".menuItem");


const products =[
    {
    id: 1,
    tittle:  "sneaker",
    price: 75,
    colors:[
        {
            code:"black",
            img:"./img/sneaker.png",
        },
        {
            code:"whitesmoke",
            img:"./img/sneakerwhite.png",
        },
        
    ],
},
{
    id: 2,
    tittle:  "slider",
    price: 12,
    colors:[
        {
            code:"black",
            img:"./img/sliderblack.png",
        },
        {
            code:"white",
            img:"./img/sliderwhite.png",
        },
        
    ],
}, {
    id: 3,
    tittle:  "formal",
    price: 38,
    colors:[
        {
            code:"black",
            img:"./img/formal shoes redtape.png",
        },
        {
            code:"brown",
            img:"./img/formalbrown.png",
        },
        
    ],
}, {
    id: 4,
    tittle:  "sport",
    price: 30,
    colors:[
        {
            code:"black",
            img:"./img/sport shoes redtape.png",
        },
        {
            code:"white",
            img:"./img/sportwhite.png",
        },
        
    ],
},
];

let chooseProduct =products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTittle = document.querySelector(".productTittle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
item.addEventListener("click", ()=>{
    //change the current slide
    wrapper.style.transform =`translateX(${-100 * index}vw)`;

    //change the choosen product
    chooseProduct = products[index];


    currentProductTittle.textContent = chooseProduct.tittle
    currentProductPrice.textContent = "$" + chooseProduct.price
    currentProductImg.src = chooseProduct.colors[0].img

    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chooseProduct.colors[index].code;
    });
});
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
    currentProductImg.src = chooseProduct.colors[index].img
})
})
currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size, index)=>{
            size.style.backgroundColor = "gray";
            size.style.color = "green";
});
 size.style.backgroundColor = "blue";
            size.style.color = "white";
});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close= document.querySelector(".close");

productButton.addEventListener("click" , ()=>{
    payment.style.display="flex"
})
close.addEventListener("click" , ()=>{
    payment.style.display="none"
})