let spinner = document.querySelector('.spinner');
let hideButton = document.getElementById('hide');
let showButton = document.getElementById('show');
hideButton.addEventListener('click', function(event) {
    spinner.classList.remove('spinner_active')
});
showButton.addEventListener('click', function(event) {
    spinner.classList.add('spinner_active')
});

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    let name = data.name;
    let email = data.email;
    const div = document.querySelector('#result');
    div.textContent = name + ', ' + email;
};

const fruits = [
  { name: "Яблоко", price: 80 },
  { name: "Банан", price: 60 },
  { name: "Манго", price: 250 }
];
const list = document.getElementById('list')
for (const item of fruits) {
    let itemDiv = document.createElement('div')
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    span1.textContent = item.name;
    span2.textContent = item.price + ' руб.';
    itemDiv.append(span1, span2);
    list.append(itemDiv);
    itemDiv.classList.add('item');
    span1.classList.add('item__name');
    span2.classList.add('item__price')
};

let loader = document.getElementById('loader')
let list = document.getElementById('list')
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onload = function() {
    loader.classList.remove('loader_active');
    const data = JSON.parse(xhr.responseText);
    for (const item of data) {
        let div = document.createElement('div')
        let name = document.createElement('span')
        let email = document.createElement('span')
        name.textContent = item.name;
        email.textContent = item.email;
        div.append(name, email);
        list.append(div)
    }
}

const data = {
  "catalog": {
    "phone": { "title": "Телефон", "count": 12 },
    "laptop": { "title": "Ноутбук", "count": 5 },
    "tablet": { "title": "Планшет", "count": 8 }
  }
};
const items = document.getElementById('items');
for (const key in data.catalog) {
    let catalogItem = data.catalog[key]
    let div = document.createElement('div');
    let code = document.createElement('div');
    let title = document.createElement('div');
    let count = document.createElement('div');
    code.textContent = key;               
    title.textContent = catalogItem.title;
    count.textContent = catalogItem.count;
    div.append(code, title, count);
    items.append(div);
    div.classList.add('item');
    code.classList.add('item__code');
    title.classList.add('item__title');
    count.classList.add('item__count')
}

const input = document.getElementById('note');
const saveButton = document.getElementById('save');
saveButton.addEventListener('click', function() {
    const text = input.value;
    localStorage.setItem('note', text);
});
const saved = localStorage.getItem('note');
if (saved) {
    input.value = saved;
}

function get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        callback(JSON.parse(xhr.responseText));
    };
}

get('https://jsonplaceholder.typicode.com/users', function(data) {
    localStorage.setItem(data);
});

for (const item in data) {
    let currentItem = data[item];
    let title = currentItem.title;
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = title;
    document.append(div);
    div.append(span)
}