
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api"
import { clearGallery, createGallery, hideLoader, showLoader } from "./render-functions";
export function handleSubmit(event) {
event.preventDefault() 
    const userInput = event.target.elements[0].value
    if (userInput === "") {
       iziToast.error({
            message: 'Please write something',
            position: 'topRight', 
    })
    }
clearGallery()
showLoader()
    getImagesByQuery(userInput)
        .then(hits => {
     createGallery(hits)
        })
        .catch(error => {
    console.log(error);
    
    })
        .finally(() => {
hideLoader()          
})
}