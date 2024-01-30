const itemListEl = document.querySelector(".item-list");
const btnDelete = document.querySelector(".btn-delete");

let modalArr = [];

for (let i = 0; i < itemList.length; i++) {
    for (let nameIndex = 0; nameIndex < itemList[i].name.length; nameIndex++) {
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        itemEl.innerHTML = `
            <div class="image">
                <img src="images/productImage/${itemList[i].img[nameIndex]}" alt="">
            </div>
            <div class="detail">
                <div class="name">
                    <h3>${itemList[i].name[nameIndex]}</h3>
                </div> 
                <div class="action">
                    <input type="number" min="1" value="1" placeholder="จำนวน">
                    <button class="btn btn-add">เพิ่ม</button>
                    <button class="btn btn-delete btn-hide">ลบ</button>
                </div> 
            </div>
        `;
        itemListEl.appendChild(itemEl);

        const btnAdd = itemEl.querySelector(".btn-add"); // Select the button within the current item
        btnAdd.addEventListener("click", () => {
            let itemPush = itemList[i].name[nameIndex];
            modalArr.push(itemPush);
            console.log(modalArr);
            console.log("fdsfsdfd=="+modalArr)
        });

        const btnDelete = itemEl.querySelector(".btn-delete");
        btnDelete.addEventListener("click", () => {
            let itemDelete = itemList[i].name[nameIndex];
            const index = modalArr.indexOf(itemDelete);
            if (index > -1) {
                modalArr.splice(index, 1);
            }
            console.log(itemDelete);
            console.log(modalArr);
        });

    }
}


// btn in product
const buttonAdd = document.querySelectorAll(".btn-add");
const buttonDelete = document.querySelectorAll(".btn-delete");

for (let i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener("click", () => {
        buttonAdd[i].classList.toggle("btn-hide");
        buttonDelete[i].classList.toggle("btn-hide");
    });
    buttonDelete[i].addEventListener("click", () => {
        buttonAdd[i].classList.toggle("btn-hide");
        buttonDelete[i].classList.toggle("btn-hide");
    });
}


// modal
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const cart = document.querySelector("#cart");
const modalItemList = document.querySelector(".modal-item-list");

cart.addEventListener("click", () => {
    modal.classList.add("show");
});
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});  