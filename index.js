const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
];

const image = document.querySelector('.image')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.previous')
const bubblesBtn = document.querySelectorAll('.bubble')
const intervalID = setInterval(imgNext, 5000)

let curImgIndex = 0
    image.src = images[curImgIndex]
    bubblesBtn[curImgIndex].textContent ='●'

nextBtn.addEventListener('click',function() {
    imgNext()
    clearInterval(intervalID)
})

prevBtn.addEventListener('click',function() {
    if (curImgIndex > 0 ) {curImgIndex--}
    else {curImgIndex = images.length - 1}
    image.src = images[curImgIndex]
    for (i = 0; i < bubblesBtn.length; i++) {
        bubblesBtn[i].textContent ='○'
    }
    bubblesBtn[curImgIndex].textContent ='●'
    clearInterval(intervalID)
})

for (let i = 0; i < bubblesBtn.length; i++) {
    bubblesBtn[i].addEventListener('click', function () {
        curImgIndex = i;
        image.src = images[curImgIndex]
        for(let i = 0; i < bubblesBtn.length; i++) bubblesBtn[i].textContent = '○'
        bubblesBtn[curImgIndex].textContent = '●'
        clearInterval(intervalID)
    })
}

function imgNext() {
    if (curImgIndex < images.length - 1 ) {curImgIndex++}
    else {curImgIndex = 0}
    image.src = images[curImgIndex]
    for (i = 0; i < bubblesBtn.length; i++) {
        bubblesBtn[i].textContent ='○'
    }
    bubblesBtn[curImgIndex].textContent ='●'
}