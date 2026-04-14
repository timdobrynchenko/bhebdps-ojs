// я, возможно, пропустил инфо — но почему-то в лекциях мы используем XMLHttpRequest а не fetch, так что тут тоже беру его за основу, хоть он и устарел
// логи пока оставил, по инструкции закомментированный код — не ок, но логи могут понадобиться для доработки задания

// функция для получения распаршенного json по запросу
function get(url, callback) {
  let loader = document.getElementById('loader');
  if (!loader.classList.contains('loader_active')) {
    loader.classList.add('loader_active');
  }
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  console.log('Получение данных началось');
  xhr.send();
  xhr.onload = function () {
    console.log('Статус:', xhr.status);
    loader.classList.remove('loader_active');
    callback(JSON.parse(xhr.responseText));
  };
  xhr.onerror = function () {
    console.error('Ошибка сети');
    loader.classList.remove('loader_active');
  };
}

// функция для генерации айтемов из содержимого JSON'а
function createHtml(data) {
  console.log('Кол-во валют:', Object.keys(data.response.Valute).length);
  let items = document.getElementById('items');
  items.innerHTML = '';
  for (let key in data.response.Valute) {
    let item = data.response.Valute[key];
    let charCode = item.CharCode;
    let value = item.Value;
    let container = document.createElement('div');
    let charCodeContainer = document.createElement('div');
    let valueContainer = document.createElement('div');
    let currencyContainer = document.createElement('div');
    charCodeContainer.classList.add('item__code');
    valueContainer.classList.add('item__value');
    currencyContainer.classList.add('item__currency');
    charCodeContainer.textContent = charCode;
    valueContainer.textContent = value;
    currencyContainer.textContent = ' руб.';
    items.append(container);
    container.append(charCodeContainer, valueContainer, currencyContainer);
  }
}

function main() {
  let cached = localStorage.getItem('data');
  if (cached) {
    console.log('Есть кэш');
    createHtml(JSON.parse(cached));
  } else {
    console.log('Кэша нет');
  }
  get('https://students.netoservices.ru/nestjs-backend/slow-get-courses', function (data) {
    localStorage.setItem('data', JSON.stringify(data));
    console.log('Данные сохранены в локал');
    createHtml(data);
    console.log('HTML отрендерен');
  });
}

main();