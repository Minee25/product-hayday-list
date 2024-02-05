

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
                    <input type="number" min="1" value="10" placeholder="จำนวน" class="action-input">
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
        updateCartCount();
    });

    btnDelete.addEventListener("click", () => {
        let deleteIndex = cartList.findIndex(cartItem => cartItem.id === item.id);
        if (deleteIndex !== -1) {
            cartList.splice(deleteIndex, 1);
            btnAdd.style.display = "block";
            btnDelete.style.display = "none";
        }
        updateCartCount();
    });
});


// Cart
const cartCount = document.querySelector(".cart-count span");
function updateCartCount() {
    cartCount.innerText = cartList.length;
}

// Modal
const openCart = document.querySelector(".cart");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalItemList = document.querySelector(".modal-item-list");

openCart.addEventListener("click", () => {
    modal.classList.add("show");
    updateProductModal();
});
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

function updateProductModal() {
    modalItemList.innerHTML = "";
    if (cartList.length <= 0) {
        modalItemList.innerHTML = `<h3 style="color:#383838;">ไม่มีรายการสินค้า...</h3>`;
    } else {
        cartList.forEach((item) => {
            const modalItemEl = document.createElement("div");
            modalItemEl.classList.add("modal-item");
            modalItemEl.innerHTML =
                `
            <div class="modal-product-image">
                <img src="images/productImage/${item.img}" alt="${item.img}">
            </div>
            <div class="modal-product-name">
                <p>${item.name}</p>
            </div>
            <div class="modal-product-count">
                <h2>${item.count}</h2>
            </div>
            <div class="edit-product-box">
                <input type="number" value="${item.count}" min="1" placeholder="จำนวน">
                <button class="delete-product">ลบ</button>
            </div>
            `;
            modalItemList.appendChild(modalItemEl);

            // Btn Edit Product
            const editProductBox = modalItemEl.querySelector(".edit-product-box");
            const editProductIcon = document.querySelector(".edit-product-icon");
            editProductIcon.addEventListener("click", () => {
                editProductBox.classList.toggle("show");
                if (editProductIcon.innerHTML == `<i class="fa-solid fa-check"></i>`) {
                    editProductIcon.innerHTML = `<i czlass="fa-regular fa-pen-to-square"></i>`;
                } else {
                    editProductIcon.innerHTML = `<i class="fa-solid fa-check"></i>`;
                }
            });

            // const editProductBoxInput = modalItemEl.querySelector(".edit-product-box input");
            // editProductBoxInput.addEventListener("keyup", () => {
            //     const value = parseInt(editProductBoxInput.value);
            //     let deleteIndex = cartList.findIndex(cartItem => cartItem.id === item.id);
            //     if (deleteIndex !== -1) {
            //         cartList.count = value; 

            //     }
            //     updateProductModal();
            // })

            // Delete Product
            const deleteProduct = modalItemEl.querySelector(".delete-product");
            deleteProduct.addEventListener("click", () => {
                let deleteIndex = cartList.findIndex(cartItem => cartItem.id === item.id);
                if (deleteIndex !== -1) {
                    cartList.splice(deleteIndex, 1);
                }
                editProductIcon.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
                updateProductModal();
                updateCartCount();
            });
        });
    }
}
