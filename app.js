/**************************************************************
 *                ENTIDAD  
 *************************************************************/


class Bebidas{
    constructor(bebida, marca, tipo, cantidad, precio, stock, id, imagen){

        this.bebida = bebida;
        this.marca = marca;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
        this.imagen = imagen;
        
    }

    
}





const listadoBebidas = [];

const bebida1 = new Bebidas("Vodka", "Bols", "", "1L.", 400, 40, 1, "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3070357_f.jpg");
const bebida2 = new Bebidas("Vodka", "Absolut", "", "750cc.", 1200, 25, 2, "http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/vodka-absolut-12x7501-9add12842dd92d43d115329861855969-640-0.png");
const bebida3 = new Bebidas("Vodka", "Skyy", "", "750cc.", 650, 50, 3, "https://d3ugyf2ht6aenh.cloudfront.net/stores/861/458/products/335971-a2b44e55c68fdcfc8715874119357335-480-0.jpg");
const bebida4 = new Bebidas("Vodka", "Smirnoff", "", "700cc.", 700, 50, 4, "http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/vodka-smirnoff-12x7001-b62d04f0676fd35df615329904315011-640-0.png");
const bebida5 = new Bebidas("Cerveza", "Andes", "Rubia", "473cc.", 150, 100, 5, "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_569,h_569/https://embero.com/wp-content/uploads/83.jpg");
const bebida6 = new Bebidas("Cerveza", "Andes", "IPA", "473cc.", 110, 90, 6,"https://embero.com/wp-content/uploads/126-1.jpg");
const bebida7 = new Bebidas("Cerveza", "Andes", "Roja", "473cc.", 150, 100, 7, "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_569,h_569/https://embero.com/wp-content/uploads/133-1.jpg");
const bebida8 = new Bebidas("Vino", "Cosecha Tardia", "Blanco", "750cc.", 700, 20, 8, "https://ardiaprod.vteximg.com.br/arquivos/ids/188632-1000-1000/Vino-Blanco-Norton-Cosecha-Tardia-750-Ml-_1.jpg?v=637427629245600000");
const bebida9 = new Bebidas("Vino", "Dadá", "Tinto", "750cc.", 450, 40, 9,"https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_569,h_569/https://embero.com/wp-content/uploads/385.jpg");
const bebida10 = new Bebidas("Fernet", "Branca", "", "750cc.", 600, 120, 10,"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/9/2/92_2048x2048.jpg");
const bebida11 = new Bebidas("Fernet", "1882", "", "750cc.", 390, 80, 11,"https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_569,h_569/https://embero.com/wp-content/uploads/194-1.jpg");


listadoBebidas.push(bebida1)
listadoBebidas.push(bebida2)
listadoBebidas.push(bebida3)
listadoBebidas.push(bebida4)
listadoBebidas.push(bebida5)
listadoBebidas.push(bebida6)
listadoBebidas.push(bebida7)
listadoBebidas.push(bebida8)
listadoBebidas.push(bebida9)
listadoBebidas.push(bebida10)
listadoBebidas.push(bebida11)




/**************************************************************
 *          VARIABLES / CONSTANTES / SELECTORES
 *************************************************************/





const cartItemsContainer = document.querySelector(`.cartItemsContainer`)
const buyButton = document.querySelector(`.buyButton`)
const modalBody = document.querySelector(`.modalBody`);
const urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const buttonViewCart = document.querySelectorAll(`.buttonViewCart`)
const cartContainer = document.querySelector(`.cartContainer`)
const localStorageCart = []

 





/**************************************************************
 *                        FUNCIONES
 *************************************************************/


 fetch(urlAPI)
 .then(res => res.json())
 .then(data =>{
     
     
 
     let containerRandomDrink = document.querySelector(".rowRandomDrink")
     
     let divCol1 = document.createElement("div")
     divCol1.setAttribute("class", "col-12 col-md-5")

     let imgCard = document.createElement("img")
     imgCard.setAttribute("class", "card-img")
     imgCard.setAttribute("src", `${data.drinks[0].strDrinkThumb}`)

     let divCol2 = document.createElement("div")
     divCol2.setAttribute("class", "col-12 col-md-7")
     
     let cardBody = document.createElement("div")
     cardBody.setAttribute("class", "card-body")

     let cardTitle = document.createElement("div")
     cardTitle.setAttribute("class", "card-header bg-dark text-white")
     cardTitle.textContent = `${data.drinks[0].strDrink}.`

     let cardType = document.createElement("p")
     cardType.setAttribute("class", "blockquote-footer bg-dark pt-1 pb-2")
     cardType.textContent = `tipo: ${data.drinks[0].strAlcoholic}`

     let cardText= document.createElement("p")
     cardText.setAttribute("class", "card-text mt-3 bg-dark bg-opacity-25 p-4")
     cardText.textContent = `Ingrediente principal: ${data.drinks[0].strIngredient1}`
     
     let cardText2= document.createElement("p")
     cardText2.setAttribute("class", "card-text bg-dark bg-opacity-25 p-4")
     cardText2.textContent = `Ingrediente secundario: ${data.drinks[0].strIngredient2}`

     containerRandomDrink.appendChild(divCol1)
     divCol1.appendChild(imgCard)
     containerRandomDrink.appendChild(divCol2)
     divCol2.appendChild(cardBody)
     cardBody.appendChild(cardTitle)
     cardBody.appendChild(cardType)
     cardBody.appendChild(cardText)
     cardBody.appendChild(cardText2)
 
 
 })


listadoBebidas.forEach(e => {

    const rowProducts = document.querySelector(".rowProducts")
    
    
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col-12 col-sm-6 col-lg-4 col-xl-4 justify-content-center rounded-3 card-group");
    divCol.setAttribute("name", `${e.bebida}`)
    divCol.setAttribute("value", `${e.marca}`)
    

    let divCard = document.createElement("div");
    divCard.setAttribute("class", `card mb-5 mt-5 mb-sm-1 mb-md-3 mb-lg-3 border-0 bg-dark bg-opacity-100 text-white shadow-lg cardProduct`);
    //divCard.setAttribute("name", `${e.bebida}`)
    //divCard.setAttribute("value", `${e.marca}`)


    let imgCard = document.createElement("img");
    imgCard.setAttribute("class", "card-img-top image")
    imgCard.setAttribute("alt", "...")
    imgCard.setAttribute("src", `${e.imagen}`)
    

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body d-grid");


    let CardTitle = document.createElement("h6");
    CardTitle.textContent =  `${e.bebida} ${e.marca} ${e.tipo} ${e.cantidad}`;
    CardTitle.setAttribute("class", "card-title d-flex justify-content-center small");
   

    let CardText = document.createElement("p");
    CardText.textContent = `$${e.precio},00`;
    CardText.setAttribute("class", "card-text text-center price small");


    let CardText2 = document.createElement("p");
    CardText2.textContent = `Cantidad disponible: ${e.stock} unidades.`;
    CardText2.setAttribute("class", "stock card-text text-center mt-1 small");

    
    let buttonAddCart = document.createElement("button");
    buttonAddCart.textContent = `Agregar producto`;
    buttonAddCart.setAttribute("type", "button");
    buttonAddCart.setAttribute("class", "btn btn-outline-light btn-sm");
    buttonAddCart.setAttribute("id", "buttonAddCart")
    buttonAddCart.setAttribute("data-product", `${e.id}`)

    let linkCart = document.createElement("a")
    linkCart.setAttribute("href", "#viewCart")
    linkCart.setAttribute("class", "d-grid justify-content-center text-decoration-none")


    let buttonViewCart = document.createElement("button");
    buttonViewCart.textContent = `Ver carrito`;
    buttonViewCart.setAttribute("type", "button");
    buttonViewCart.setAttribute("class", "btn btn-outline-success text-white btn-sm mt-2 me-auto buttonViewCart");
    
    
    
    
    
    
     
    rowProducts.appendChild(divCol)
    divCol.appendChild(divCard);
    divCard.appendChild(imgCard)
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(CardTitle);
    divCardBody.appendChild(CardText);
    divCardBody.appendChild(CardText2);
    divCardBody.appendChild(buttonAddCart);
    divCardBody.appendChild(linkCart)
    linkCart.appendChild(buttonViewCart);

    
})




const removeShoppingCartItem = (event) => {
    const buttonClicked = event.target;
    buttonClicked.closest(`.shoppingCartItem`).remove()
    updateShoppingCartTotal()
}

const quantityChange = (event) => {
    let input = event.target;
    
    
    if (input.value <= 0){
        input.value = 1
    }
    updateShoppingCartTotal();
}

const updateShoppingCartTotal = () => {
    let total = 0;
    const shoppingCartTotal = document.querySelector(`.cartTotal`);
    
    const shoppingCartItems = document.querySelectorAll(`.shoppingCartItem`);
    
    
    
    shoppingCartItems.forEach(shoppingCartItem =>{
       const shoppingCartItemPriceElement = shoppingCartItem.querySelector(`.shoppingCartItemPrice`);
       const shoppingCartItemPrice = parseInt(shoppingCartItemPriceElement.textContent.replace("$", ""));
       const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(`.shoppingCartItemQuantity`);
       const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
       
       total = total + shoppingCartItemPrice * shoppingCartItemQuantity
       
    })

    shoppingCartTotal.innerHTML = `$${total}`
}

const buyButtonClicked = () =>{
    if(cartItemsContainer.innerHTML === ""){
        swal({
            title: "El carrito está vacio.",
            text: "Agregá algo master!",
            icon: "warning",
            button: "Ok :(",
            
        });
    }else{
    cartItemsContainer.innerHTML = ""
    updateShoppingCartTotal();
    swal({
        title: "¡Muchas gracias por su compra!",
        text: "El pedido está siendo preparado.",
        icon: "success",
        button: "Aww yiss!",
      });
    }
}



















/**************************************************************
     *                        EVENTOS
     *************************************************************/

const addToCartClick = (event) =>{
    
     const button = event.target;
    const itemCard = button.closest(`.card`);
    
    const cardTitle = itemCard.querySelector(`.card-title`).textContent;
    const cardIMG = itemCard.querySelector(`.image`).src;
    const cardPrice = itemCard.querySelector(`.price`).textContent;  

    
    
    
    
    addItemToShoppingCart(cardTitle, cardPrice, cardIMG)
    
    
}



const addItemToShoppingCart = (cardTitle, cardPrice, cardIMG) => {
    
    let elementsTitle = cartItemsContainer.getElementsByClassName(`shoppingCartItemTitle`);
    
    
    for(let i = 0; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerHTML == cardTitle){
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(`.shoppingCartItemQuantity`);
            elementQuantity.value++;
            $(`.toast-increase `).toast(`show`);
            updateShoppingCartTotal();
            return;
        }
    }
    
    
    

    
    const shoppingCartRow = document.createElement(`div`)
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-3 col-md-3">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="shoppingCartItemTitle img-fluid ml-3 mb-0" style="display: none">${cardTitle}</p>
                <img src="${cardIMG}" alt="" width=100></img>
            </div>
        </div>

        <div class="col-3 col-md-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="mb-0 shoppingCartItemPrice" style="display: none">${cardPrice}</p>
            </div>
        </div>

        <div class="col-3 col-md-4 ">
            <div class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <div class="quantity input-group">
                <input class="shoppingCartItemQuantity" type="number" value="1" aria-describedby="input-group-button-right">
                <button class="btn btn-sm buttonDelete" type="button" id="input-group-button-right"><span class="badge bg-danger">x</span></button>
                </div>

                    
            </div>
        </div>
    </div>`;

    
   
    shoppingCartRow.innerHTML = shoppingCartContent;
    cartItemsContainer.appendChild(shoppingCartRow)
    
    
    shoppingCartRow.querySelector(".buttonDelete").addEventListener("click", removeShoppingCartItem);
    
    shoppingCartRow.querySelector(`.shoppingCartItemQuantity`).addEventListener("change", quantityChange);

    updateShoppingCartTotal()

}



const addToCartButton = document.querySelectorAll(`#buttonAddCart`);


addToCartButton.forEach(buttonFunction =>{
    
    buttonFunction.addEventListener(`click`, addToCartClick);
    buttonFunction.addEventListener(`click`, () => {
        $(`.toast-additem`).toast(`show`);
    });
})


buyButton.addEventListener("click", buyButtonClicked)


 $(".buttonViewCart").click(function (){
    $(".cartContainer").toggle(300, function (){
        $(this).removeClass("active")
    })
})




/*--------------------------------- FILTROS -------------------------- */
 $(".filterTipo").click(function(){
        
         let nameProduct = $(this).attr("name")
        
        
        //OCULTAR
        $(`.card-group`).fadeOut(100);
        
        //MOSTRAR
        $(`.card-group[name="`+nameProduct+`"]`).fadeIn(500); 
})

$(".filterMarca").click(function(){
        
    let nameProduct = $(this).attr("value")
   
   
   //OCULTAR
   $(`.card-group`).fadeOut(100);
   
   //MOSTRAR
   $(`.card-group[value="`+nameProduct+`"]`).fadeIn(500); 
})



 $(`.filterTipo[name="allTypes"]`).click(function(){
    $(`.card-group`).fadeIn(500);
})



$(`.filterMarca[value="allTypes"]`).click(function(){
    $(`.card-group`).fadeIn(500);
})

  






