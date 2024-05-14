function search() {
   let townElements = document.querySelectorAll('#towns li');
   let matchInputElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');

   let counter = 0;

   for (const town of townElements) {
      if (town.textContent.toLowerCase().includes(matchInputElement.value.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      }else{
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }

   resultElement.textContent = `${counter} matches found`;
}
