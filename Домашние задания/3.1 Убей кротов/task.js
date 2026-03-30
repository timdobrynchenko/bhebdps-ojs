let hits = document.getElementById('dead');
let misses = document.getElementById('lost');

for (let i = 1; i < 10; i = i + 1) {
  let hole = document.getElementById('hole' + i);

  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
      hits.textContent = Number(hits.textContent) + 1;
      if (hits.textContent === '10') {
        alert('Вы победили')
        hits.textContent = '0'
        misses.textContent = '0'
      }
    } 
    else {
      misses.textContent = Number(misses.textContent) + 1;
      if (misses.textContent === '5') {
        alert('Вы проиграли')
        hits.textContent = '0'
        misses.textContent = '0'
      }
    }
  };
}