const liItem = document.querySelectorAll('.item')
const result = `Number of categories : ${liItem.length}`;
console.log(result);

const catList = document.querySelector('#categories');

const items = catList.querySelectorAll('li.item')

items.forEach(item => {
    const title = item.querySelector('h2');
    const liList = item.querySelectorAll('li').length;


    console.log(`Category: ${title.textContent}`);
console.log(`Elements: ${liList} `);
})