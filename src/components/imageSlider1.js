class ImageSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const images = JSON.parse(this.getAttribute('images'));

        this.innerHTML = `
            <div class="flex w-screen overflow-x-auto gap-[10px]">
                ${images.map(imgUrl => `
                    <div class="min-w-[300px] max-w-[700px]">
                        <img src="${imgUrl}" alt="" class="w-full">
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('image-slider', ImageSlider);
