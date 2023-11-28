const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('/db/db.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }
links.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        getData();
    })
})

//localStorage.setItem('goods', JSON.stringify({name: 'all'}));
localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));

//console.log(JSON.parse(localStorage.getItem('goods')));
const goods =JSON.parse(localStorage.getItem('goods'));
console.log(1, goods);

//удаление из LocalStorage
localStorage.removeItem('goods');
//console.log(2, localStorage);
}
getGoods();