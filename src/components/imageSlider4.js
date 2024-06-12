class ImageSlider extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const jsonFilePath = this.getAttribute('data-json') || '/json/section-data.json';
        fetch(jsonFilePath) 
            .then(response => response.json())
            .then(data => {
                const items = data.items;
                const sectionContent = items.map(item => `
                    <div class="flex-shrink-0 min-w-[300px] max-w-[710px] w-full md:w-[calc(33.33%-10px)]">
                        <img src="${item.imgUrl}" alt="${item.alt}" class="w-full">
                        <div class="pt-[16px]">
                            <h3 class="text-[20px]">${item.title}</h3>
                            <h4 class="mt-[18px] underline">${item.button}</h4>
                        </div>
                    </div>
                `).join('');
                this.innerHTML = `
                    <section class="flex justify-center">
                        <div class="w-full max-w-[1920px] flex gap-[10px] mob:mx-[48px] mx-[24px] overflow-x-scroll">
                            ${sectionContent}
                        </div>
                    </section>
                `;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
}
customElements.define('image-silde4', ImageSlider)