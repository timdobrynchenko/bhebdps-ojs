let allMenuLinks = document.querySelectorAll('.menu__link');
allMenuLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        let linkParent = link.closest('.menu__item')
        let child = linkParent.querySelector('.menu_sub')
        if (child) {
            event.preventDefault()
            let allActiveMenu = document.querySelectorAll('.menu_active');
            let allActiveMenuArr = [...allActiveMenu];
            let hasMenuActive = child.classList.contains('menu_active');
            if (hasMenuActive) {
                child.classList.remove('menu_active')   
                return
            }
            allActiveMenuArr.forEach((menu) => {
                     menu.classList.remove('menu_active')               
            });
            child.classList.add('menu_active')
        }
    })
})