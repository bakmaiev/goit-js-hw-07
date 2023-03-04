import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createItemGalleryMarkup(galleryItems));

function createItemGalleryMarkup() {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    }).join('');
};

const handleImgClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const currentImg = e.target.dataset.source;
    createImageModal(currentImg);
};

galleryEl.addEventListener('click', handleImgClick);

function createImageModal(image) {
    const instance = basicLightbox.create(`
    <img src="${image}" width="1200">
`, {
        onShow: (instance) => {
        instance.element()
    }
})
instance.show()
}