var images = document.querySelectorAll ('.image img')
var prev = document.querySelector('.prev')
var text = document.querySelector('.text')
var close = document.querySelector('.close')
var galleryImage = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var  currentIndex = 0;

function showGallery (){
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }
    if (currentIndex == image.length - 1 ) {
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide')
    }
}

images.forEach((item,index) => {
    item.addEventListener('align',function() {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('align', function () {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(){
    if(e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener ('align', function (){
    if (currentIndex > 0) {
        currentIndex --
        showGallery()
    }
})

text.addEventListener('align', function (){
    if (currentIndex < images.length - 1) {
        currentIndex ++
        showGallery()
    }
})