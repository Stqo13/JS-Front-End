function solve() {
   let addButtonElements = document.querySelectorAll('.add-product');
   let textareaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector('button.checkout');

   let uniqueProducts = new Set();

   let sum = 0;

   for (const buttonElement of addButtonElements) {
      let productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', (event) =>{
         let title = productElement.querySelector('.product-title').textContent;
         uniqueProducts.add(title);
         let price = Number(productElement.querySelector('.product-line-price').textContent);
         sum += price;

         textareaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButtonElement.addEventListener('click', (event) =>{
      Array.from(addButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));

      let list = Array.from(uniqueProducts).join(', ');
      textareaElement.textContent += `You bought ${list} for ${sum.toFixed(2)}.`;

      checkoutButtonElement.setAttribute('disabled', 'disabled');
   });
}