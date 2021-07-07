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


        window.addEventListener("keyup" , handleKeyUp);
        nextButton.addEventListener("click", handleNextButton);
        prevButton.addEventListener("click", handlePrevButton);
    }

    function closeModal(){
        modal.classList.remove('open');
        window.removeEventListener("keyup" , handleKeyUp);
        nextButton.removeEventListener("click", handleNextButton);
        prevButton.removeEventListener("click", handlePrevButton);
    }

    function handleClickOutside(e){
        if(e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleNextButton(){
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }
    function handlePrevButton(){
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function handleKeyUp(e){
        if(e.key === "Escape") return closeModal();
        if(e.key === "ArrowRight") return handleNextButton();
        if(e.key === "ArroeLeft") return handlePrevButton();
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
        openModal();
    }

    // function handleImageClick(e){
    //     showImage(e.currentTarget);
    // }

    images.forEach(image => {
        image.addEventListener('click', e => {   
            showImage(e.currentTarget);
        });
      });

    modal.addEventListener("click", handleClickOutside);


}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));

