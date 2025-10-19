
import { refs } from "./refs";
let markup = "";
export function createGallery(images) {
    for (const image of images) {
        markup +=`<li class="gallery-item">
            <a class="gallery-link" href=${image.largeImageURL}>
                <img class="gallery-image" src=${image.webformatURL} alt=${image.tags}>
            </a>
            <ul class="image-stats-list">
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Likes</h3>
                    <p class="image-stats">${image.likes}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Views</h3>
                    <p class="image-stats">${image.views}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Comments</h3>
                    <p class="image-stats">${image.comments}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Downloads</h3>
                    <p class="image-stats">${image.downloads}</p>
                </li>
            </ul>
        </li>`  
    }
    refs.galleryEl.insertAdjacentHTML("beforeend",markup)
    
}
// Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function clearGallery() {
 markup = "" 
 refs.galleryEl.innerHTML=""   
} 
// Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.Нічого не повертає.

export function showLoader(){
    if (refs.loaderEl.classList.contains("visually-hidden")) {
        refs.loaderEl.classList.remove("visually-hidden")
    }
    
}
// } Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

export function hideLoader() {
if (!refs.loaderEl.classList.contains("visually-hidden")) {
        refs.loaderEl.classList.add("visually-hidden")
    }
}
//  Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.Нічого не повертає.