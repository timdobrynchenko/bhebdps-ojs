let container = document.querySelectorAll('.rotator')

container.forEach((rotator) => {
    let elements = rotator.querySelectorAll('.rotator__case');
    let counter = 0;
    function rotate () {
        counter = (counter + 1) % elements.length
        elements.forEach((element) => {
            element.classList.remove('rotator__case_active')
        })
        elements[counter].classList.add('rotator__case_active')
        let color = elements[counter].dataset.color
        let delay = elements[counter].dataset.speed
        elements[counter].style.color = color
        setTimeout(rotate, delay)
    };

    let firstDelay = elements[counter].dataset.speed;
    setTimeout(rotate, firstDelay)
})

