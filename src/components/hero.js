// Define a custom element called Hero
class Hero extends HTMLElement {
    constructor() {
        super();
    }
    
    // Function to be executed when the element is connected to the DOM
    connectedCallback() {
        // Get the JSON file path from the attribute, set a default path if not provided
        const jsonFilePath = this.getAttribute('data-json') || '/json/homepage.json';

        // Fetch JSON data
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                // Destructure data object
                const { imgUrlBg, imgUrlSm, heading, paragraph, button, reverse } = data;

                // Set class and HTML content for the Hero component
                this.setAttribute('class', 'flex justify-center w-full');
                this.innerHTML = `
                    <a href="" class="w-full ${reverse}">
                        <div class="w-full">
                            <img src="${imgUrlBg}" alt="" class="h-full w-full max-[600px]:hidden">
                            <img src="${imgUrlSm}" alt="" class="w-full h-full min-[600px]:hidden">
                        </div>
                        <div class="relative text-center mt-[24px] max-[600px]:text-left mx-[24px] tracking-wide">
                            <h1 class="text-black text-[36px] min-[960px]:text-[56px] font-bold font-Futura tracking-wide text-wrap">${heading}</h1>
                            <p class="text-[#111111] font-medium mt-[12px] sm:text-center text-[16px]">${paragraph}</p>
                            <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[16px] mt-4 mb-4">${button}</div>
                        </div>
                    </a>
                `;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
}

// Define the custom element 'hero-component' with the Hero class
customElements.define('hero-component', Hero);
