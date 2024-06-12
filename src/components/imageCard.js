// Define a custom element called imageCard
class imageCard extends HTMLElement {
    constructor() {
        super();
    }

    // Function to be executed when the element is connected to the DOM
    connectedCallback() {
        // Get the image URL, paragraph, heading, and button text from the attributes
        const imgUrl = this.getAttribute('img-url-bg');
        const paragraph = this.getAttribute('paragraph') || '';
        const heading = this.getAttribute('heading') || '';
        const button = this.getAttribute('button') || 'Shop';

        // Set the class and HTML content for the imageCard element
        this.setAttribute('class', 'w-full h-full relative');
        this.innerHTML = `
            <img src="${imgUrl}" alt="" class="w-full h-full object-cover" id="image1">
            <div class="absolute bottom-12 left-12 text-white tracking-wide font-sans">
                <p class="text-lg mb-2">${paragraph}</p>
                <h3 class="text-2xl font-medium">${heading}</h3>
                <div class="inline-block bg-white rounded-[20px] font-semibold py-1.5 px-4 text-black mt-6">${button}</div>
            </div>
        `;
    }
}

// Define the custom element 'image-card' with the imageCard class
customElements.define('image-card', imageCard);
