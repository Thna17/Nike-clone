class ImageSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const images = JSON.parse(this.getAttribute('images'));

        this.innerHTML = `
            <div class="flex w-[1920px] overflow-x-scroll  gap-[10px]">
                ${images.map(imgUrl => `
                    <div class="min-w-[400px] max-w-[700px]">
                        <img src="${imgUrl}" alt="" class="w-full">
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('image-slider', ImageSlider);