import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const gallertMarkup = createImageGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', gallertMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createImageGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}" />
        </a>
      </li>
      `;
    }).join('');
}
function onGalleryItemClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `
    <div class="modal">
        <img src="${evt.target.dataset.source}" width="800" height="600">

    </div>
`,
        {
            onShow: (instance) => window.addEventListener("keydown", closeModal),
            onClose: (instance) => window.removeEventListener("keydown", closeModal),
        }
    );
    instance.show();
    ;

    function closeModal(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}





