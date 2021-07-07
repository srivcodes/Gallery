function Gallery (gallery){
    if(!gallery){
        throw new Error('no such gallery exists!');
    }

    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentImage;

    function openModal(){
        console.info("opening modal");
        if(modal.matches("open")){
            console.log("modal already open");
            return;
        }
        modal.classList.add('open');

    }

    function showImage (el){
        if(!el){
            console.info("No Image to show");
            return;
        }
        console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
    }

    // function handleImageClick(e){
    //     showImage(e.currentTarget);
    // }

    images.forEach(image => {
        image.addEventListener('click', e => {   
            showImage(e.currentTarget);
        });
      });

}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));

