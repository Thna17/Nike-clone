class ProductCarousel extends HTMLElement {
  constructor() {
      super();
  }

  // Function to be executed when the element is connected to the DOM
  connectedCallback() {
    // Get the JSON file path from the 'data-json' attribute
      const jsonFilePath = this.getAttribute('data-json');
     // Check if the 'data-json' attribute is specified

      if (!jsonFilePath) {
          console.error('No data-json attribute specified for ProductCarousel.');
          return;
      }

      // Fetch the JSON data from the specified path
      fetch(jsonFilePath)
          .then(response => response.json())
          // Extract the 'products' array from the JSON data
          .then(data => {
              const products = data.products;
              // Create a new <div> element for the carousel
              const carousel = document.createElement('div');
              carousel.className = 'carousel flex  w-full max-w-[1920px] gap-[10px] mob:mx-[48px] mx-[24px] overflow-x-scroll';

              // Iterate through each product in the 'products' array
              products.forEach(product => {

                // Create a new <div> element for the product card
                const productCard = document.createElement('div');
                productCard.className = 'flex-shrink-0 min-w-[300px] max-w-[610px] w-full md:w-[calc(33.33%-10px)]';

                // Create an <img> element for the product image
                const img = document.createElement('img');
                img.src = product.imgSrc;
                img.alt = '';
                img.className = 'w-full';

                // Create a <div> element for the content
                const contentDiv = document.createElement('div');
                contentDiv.className = 'pt-[16px]';

                 // Create <h3>, <h5>, and <h4> elements for the title, subtitle, and price respectively
                const h3 = document.createElement('h3');
                h3.className = 'text-[20px]';
                h3.textContent = product.title;

                const h5 = document.createElement('h5');
                h5.className = 'text-gray-500 mt-1';
                h5.textContent = product.subtitle;

                const h4 = document.createElement('h4');
                h4.className = 'mt-4';
                h4.textContent = product.price;

                // Append the elements to their respective parent elements
                contentDiv.appendChild(h3);
                contentDiv.appendChild(h5);
                contentDiv.appendChild(h4);

                productCard.appendChild(img);
                productCard.appendChild(contentDiv);

                carousel.appendChild(productCard);
            });

            // Append the carousel to the ProductCarousel element
            this.appendChild(carousel);
          })
          .catch(error => console.error('Error fetching JSON:', error));
  }
}

customElements.define('product-carousel', ProductCarousel);
