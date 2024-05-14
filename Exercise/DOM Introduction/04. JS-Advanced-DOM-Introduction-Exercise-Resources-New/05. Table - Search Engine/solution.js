function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = document.querySelectorAll('table.container tbody tr');
      let searchInputElement = document.getElementById('searchField');
      let searchWord = searchInputElement.value;


      for (const tr of trElements) {
         let tdElements = tr.querySelectorAll('td');
         let isSelected = false;

         tr.classList.remove('select')

         for (const td of tdElements) {
            if (td.textContent.includes(searchWord)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            tr.classList.add('select');
         }
      }

      searchInputElement.value = '';
   }
}