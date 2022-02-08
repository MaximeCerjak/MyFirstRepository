
let allItem = [ ...document.querySelectorAll(".item")];
let popupBg = document.getElementById("popup_bg");
let imgPop = document.getElementById("img_pop");
console.log(allItem);
console.log(popupBg);
console.log(imgPop);


const cliquePic = (item) => {
    
    let clicked = item.target.src;
    popupBg.classList.add('active');
    console.log(popupBg);
    console.log(clicked);
    imgPop.src = clicked;
};

const closePop = () => {
    popupBg.classList.remove('active');
};

allItem.forEach((item) => item.addEventListener("click", cliquePic));


imgPop.addEventListener("click", (e) => event.stopPropagation());
popupBg.addEventListener("click", closePop);



