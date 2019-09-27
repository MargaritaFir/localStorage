const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMarker = text =>{
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener( 'submit', (e) => {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray))

    liMarker(input.value);
    input.value = '';
});



data.forEach(item=> {
    liMarker(item);
});


button.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
  }
)

