const images = document.querySelectorAll('.img');
const containerimage = document.querySelector('.container-img');
const imagecontainer = document.querySelector('.img-show');
images.forEach(image => {
    image.addEventListener('click', () => {
        addimage(image.getAttribute('src'));

    })
})

const addimage = (src) => {
    containerimage.classList.toggle('move');
    imagecontainer.classList.toggle('show');
    imagecontainer.src = src;
}

containerimage.addEventListener('click', () => {
    containerimage.classList.toggle('move');
    imagecontainer.classList.toggle('show');
})