// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join(' ');
}

galleryContainer.insertAdjacentHTML('afterbegin', createGallery(galleryItems));

galleryContainer.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: '250ms',
});
