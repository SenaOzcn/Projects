let button = document.querySelector('button');

let outside_pop = document.querySelector('.outside_pop');

let close = document.querySelector('.close');

button.addEventListener('click', () => {
    outside_pop.style.display = 'block';
});

close.addEventListener('click', () => {
    outside_pop.style.display = 'none';
});

outside_pop.addEventListener('click', (e) => {
    if(e.target.className === 'outside_pop' || e.target.className === 'inside_pop') {
        outside_pop.style.display = 'none';
    }
    console.log(e.target);
});
