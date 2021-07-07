function Gallery (gallery){
    if(!gallery){
        throw new Error('no such gallery exists!');
    }

    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));

