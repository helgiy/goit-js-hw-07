import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const gallertMarkup = createImageGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', gallertMarkup);

function createImageGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
        </a>
      </li>
      `;
    }).join('');
}
const options = {
  captionsData: "alt",
  captionDelay: 250,
};
const lightbox = new SimpleLightbox(".gallery a", options);
console.log(galleryItems);
