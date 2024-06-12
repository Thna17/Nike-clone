class ImageSlider extends HTMLElement {
    constructor() {
        super();
    }

    // Function to be executed when the element is connected to the DOM
    connectedCallback() {

        // Get the JSON file path from the 'data-json' attribute or use a default path
        const jsonFilePath = this.getAttribute('data-json') || '/json/section-data.json';

         // Fetch the JSON data from the specified path
        fetch(jsonFilePath) 
            .then(response => response.json())
            .then(data => {
                 // Extract the 'items' array from the JSON data
                const items = data.items;
                 // Map each item to HTML markup and join them into a single string
                const sectionContent = items.map(item => `
                    <!-- Individual item container -->
                    <div class="flex-shrink-0 min-w-[300px] max-w-[710px] w-full md:w-[calc(33.33%-10px)]">
                        <img src="${item.imgUrl}" alt="${item.alt}" class="w-full">
                        <div class="pt-[16px]">
                            <h3 class="text-[20px]">${item.title}</h3>
                            <h4 class="mt-[18px] underline">${item.button}</h4>
                        </div>
                    </div>
                `).join('');
                this.innerHTML = `
                    <!-- Section for displaying the image slider -->
                    <section class="flex justify-center">
                        <!-- Container for the slider items -->
                        <div class="w-full max-w-[1920px] flex gap-[10px] mob:mx-[48px] mx-[24px] overflow-x-scroll">
                            <!-- Insert the dynamically generated slider content here -->
                            ${sectionContent}
                        </div>
                    </section>
                `;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
}
customElements.define('image-silde4', ImageSlider)