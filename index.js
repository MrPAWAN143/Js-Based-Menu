const menu = [
    {
        titile: 'Home', url: '/', image: 'assest/images/logo.png',
         dropdown: [
        { titile: 'Footbol', img: 'assest/images/about-cat-1-sport.png',url:'index.php'},
        { titile: 'Basketball', img: 'assest/images/about-cat-2-sport.png' ,url:'index.php'},
        { titile: 'Volleyball', img: 'assest/images/about-cat-3-sport.png',url:'index.php' },
        { titile: 'Rugby', img: 'assest/images/about-cat-4-sport.png',url:'index.php' },
        { titile: 'Swimming', img: 'assest/images/about-cat-5-sport.png' ,url:'index.php'},
        { titile: 'Ice-skating', img: 'assest/images/about-cat-6-sport.png',url:'index.php' },
        { titile: 'Golf', img: 'assest/images/about-cat-7-sport.png' ,url:'index.php'},
        { titile: 'Skateboard', img: 'assest/images/about-cat-8-sport.png',url:'index.php' },
        { titile: 'Snowboard', img: 'assest/images/about-cat-9-sport.png',url:'index.php' },
        { titile: 'Hiking', img: 'assest/images/about-cat-10-sport.png' ,url:'index.php'},
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
    // console.log(value)
    // let dropdown2 = value.dropdown
    // console.log(dropdown2)

    all += ` <li class="nav-item dropdownx">
    <a href="${value.url}" class="nav-link fs-6">${value.titile}</a>`


    if (value.dropdown != undefined) {
        all += `<div class="dropdown-itemx position-absolute">
        <ul class="menu  navbar-nav flex-row justify-content-between ps-4 pe-4">`
        value.dropdown.forEach(function (items, itemsIndex) {
         

            all += `<div class=''>
            <a href='${items.url}' class='aa nav-link' >
            <img src='${items.img}' class='d-block m-auto menuimages'>
            <li class='nav-item'>
            
            <span  class='nav-link fs-6' > ${items.titile}</span>
                
            </li> </a> </div>`

        })
        
        all += `</ul></div>`
    }
    all += `</li >`

})

nav.innerHTML = all

