const itemListEl = document.querySelector(".item-list");
let cartList = [];
itemList.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    itemEl.innerHTML =
        `
        <div class="image">
            <img src="images/productImage/${item.img}" alt="${item.img}">
        </div>
        <div class="detail">
            <div class="name">
                <h3>${item.name}</h3>
            </div>
            <div class="action">
                <div class="action-input-box">
                    <button class="btn-minus"><i class="fa-solid fa-minus"></i></button>
                    <input type="number" min="1" value="1" placeholder="จำนวน" class="action-input">
                    <button class="btn-plus"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="btn btn-add">เพิ่ม</button>
                <button class="btn btn-delete btn-hide">ลบ</button>
            </div> 
            </div> 
        </div>
        `;
    itemListEl.appendChild(itemEl);

    // Select buttons within the current item
    const btnMinus = itemEl.querySelector(".btn-minus");
    const btnPlus = itemEl.querySelector(".btn-plus");
    const actionInput = itemEl.querySelector(".action-input");

    // Attach event listeners scoped to the current item
    btnMinus.addEventListener("click", () => {
        let value = parseInt(actionInput.value);
        if (value > 1) {
            value -= 1;
            actionInput.value = value;
        }
    });

    btnPlus.addEventListener("click", () => {
        let value = parseInt(actionInput.value);
        value += 1;
        actionInput.value = value;
    });

    // Add to Card
    const btnAdd = itemEl.querySelector(".btn-add");
    const btnDelete = itemEl.querySelector(".btn-delete"); 

    btnAdd.addEventListener("click", () => {
        count = actionInput.value;
        cartList.push({
            id: item.id,
            level: item.level,
            img: item.img,
            name: item.name,
            count: count
        });
        btnAdd.style.display = "none";
        btnDelete.style.display = "block";
        console.log(cartList)
    });

    btnDelete.addEventListener("click", () => {
        let deleteIndex = cartList.findIndex(cartItem => cartItem.id === item.id);
        if (deleteIndex !== -1) {
            cartList.splice(deleteIndex, 1);
            btnAdd.style.display = "block";
            btnDelete.style.display = "none";
            console.log(cartList);
        }
    });
    
});

// Modal
const openCart = document.querySelector(".cart");
const modal = document.querySelector(".modal");

openCart.addEventListener("click", ()=> {

});
