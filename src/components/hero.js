class Hero extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        // Get the JSON file path from the attribute
        const jsonFilePath = this.getAttribute('data-json') || '/json/homepage.json';

        // Fetch JSON data
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                const { imgUrlBg, imgUrlSm, heading, paragraph, button, reverse } = data;
                this.setAttribute('class', 'flex justify-center w-full ');
                this.innerHTML = `
                    <a href="" class=" w-full  ${reverse}">
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

customElements.define('hero-component', Hero);
