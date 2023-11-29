const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
        console.log(goods);
    }

    const getData = (value, category) => {
        fetch('/db/db.json')
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            const array = data.filter((item) => item[category] === value);
        localStorage.setItem('goods', JSON.stringify(array));

        if(window.location.pathname !== "goods.html") {
            window.location.href = '/goods.html'
        } else {
            renderGoods(array)
        }


        })
    }
links.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const linkValue = link.textContent;
        const category = link.dataset.field;

        getData(linkValue, category);
    })
})

//localStorage.setItem('goods', JSON.stringify({name: 'all'}));
//localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));

//console.log(JSON.parse(localStorage.getItem('goods')));
//const goods =JSON.parse(localStorage.getItem('goods'));
//console.log(1, goods);

//удаление из LocalStorage
//localStorage.removeItem('goods');
//console.log(2, localStorage);
if (localStorage.getItem('goods') && window.location.pathname === "/goods.html") {
    renderGoods(JSON.parse(localStorage.getItem('goods')))
}
}
getGoods();