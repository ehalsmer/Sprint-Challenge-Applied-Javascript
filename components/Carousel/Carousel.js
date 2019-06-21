

class Carousel {
    constructor(imageElement){
        this.imageElement = imageElement;
        console.log(this.imageElement); // getting the current image element, input by the forEach at end of page
        this.data = this.imageElement.dataset.id; // data-id of current image, 1,2,3,4. This is the current index
        console.log(Number(this.data) + 1); // What I'd like to input into the next line, instead of this.data
        this.right = document.querySelector(`.image[data-id='${this.data}']`);
        console.log(this.right)
        const carousel = document.querySelector('.carousel');
        const left = document.querySelector('.left-button');
        const right = document.querySelector('.right-button');
        //Event listener for left button
        left.addEventListener('click', this.moveLeft.bind(this));
        //Event listener for right button
        right.addEventListener('click', this.moveRight.bind(this));
    }

    // function for going to the left
    moveLeft() {
        // alert('left!');
    }

    // function for going to the right
    moveRight() {
        const images = document.querySelectorAll('.image') // grab all images
        // const current = this.data;
        images.forEach(image => image.classList.remove('active')) // remove all active tags
        this.right.classList.add('active')
    }
}



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


const images = document.querySelectorAll('.image') // nodelist of all images
images.forEach(image => new Carousel(image));