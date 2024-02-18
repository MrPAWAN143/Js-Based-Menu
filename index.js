const menu = [
    {
        titile: 'Home', url: '/', dropdown: [{ titile: 'Footbol', img: 'assest/' },
        { titile: 'Basketball', img: 'assest/' },
        { titile: 'Volleyball', img: 'assest/' },
        { titile: 'Rugby', img: 'assest/' },
        { titile: 'Swimming', img: 'assest/' },
        { titile: 'Ice-skating', img: 'assest/' },
        { titile: 'Golf', img: 'assest/' },
        { titile: 'Skateboard', img: 'assest/' },
        { titile: 'Snowboard', img: 'assest/' },
        { titile: 'Hiking', img: 'assest/' },
        // { titile: 'Tennis', img: 'assest/' },
        // { titile: 'Cycling', img: 'assest/' },
        // { titile: 'Gym', img: 'assest/' },
        ], second_dropdown: [
            { titile: 'Latest products', url: '/latestproducts' },
            { titile: 'Sale', url: '/Sale' },
            { titile: 'Bestsellers', url: '/Bestsellers' },
            { titile: 'Top rated', url: '/Toprated' },
            { titile: 'Popularity', url: '/Popularity' },
            { titile: 'Latestproducts', url: '/latestproducts' },
            { titile: 'Latestproducts', url: '/latestproducts' },
        ]
    },
    { titile: 'Shop', url: '/shop', dropdown: [{ titile: 'Footbol', img: 'assest/' }] },
    { titile: 'Women', url: '/women' },
    { titile: 'Man', url: '/man' },
    { titile: 'Accessories', url: 'accessories' },
    { titile: 'Sale', url: '/sale' },
    { titile: 'Page', url: 'page' },


]


let nav = document.querySelector('.navbar-nav')
let all = ''

menu.forEach(function (value, index) {
    all += ` <li class="nav-item dropdownx">
    <a href="${value.url}" class="nav-link fs-6">${value.titile}</a>`



    if (value.dropdown != undefined) {
        all += `<div class="dropdown-itemx position-absolute">
        <ul class="menu  navbar-nav flex-row justify-content-between ps-4 pe-4">`
        value.dropdown.forEach(function (items, itemsIndex) {
            all += `<li class='nav-item'> <a herf='' class='nav-link fs-6' > ${items.titile}</a></li>`

        })
        all += `</ul></div>`
    }


    all += `</li >`

})

nav.innerHTML = all