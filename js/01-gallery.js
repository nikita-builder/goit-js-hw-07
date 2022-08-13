import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");
const galleryCard = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML('afterbegin', galleryCard);

function createGalleryCards(images) {
    return images.map(image => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}" onclick="return false;">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
            </a>
            </div>
        `).join('');
}


galleryDiv.addEventListener('click', openImage);

function openImage(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG'){
        return;
    };

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,

);

instance.show();

}

console.log(galleryItems);
