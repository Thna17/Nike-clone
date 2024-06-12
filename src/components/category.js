class DynamicMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get the value of the data-json attribute
        const jsonDataUrl = this.getAttribute('data-json');

        if (!jsonDataUrl) {
            console.error('data-json attribute is missing.');
            return;
        }

        // Fetch JSON data based on the data-json attribute
        fetch(jsonDataUrl)
            .then(response => response.json())
            .then(categories => {
                // Generate HTML for each category dynamically
                const menuHTML = categories.map(category => `
                    <ul>
                        <li class="text-[20px] font-HelveticaNowText_Regular mb-[24px]">${category.title}</li>
                        ${category.items.map(item => `
                            <li class="text-gray-500 mb-[16px] max-[600px]:hidden">${item}</li>
                        `).join('')}
                    </ul>
                `).join('');

                // Set innerHTML to the dynamically generated HTML
                this.innerHTML = `
                    <section class="flex justify-center mb-[42px] mt-[84px]">
                        <div class="flex w-[880px] justify-between font-HelveticaNowText_Medium mx-[42px] flex-col mob:flex-row">
                            ${menuHTML}
                        </div>
                    </section>
                `;
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    }
}

customElements.define('category-menu', DynamicMenu);
