class ProductCarousel extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const jsonFilePath = this.getAttribute('data-json');

      if (!jsonFilePath) {
          console.error('No data-json attribute specified for ProductCarousel.');
          return;
      }

      fetch(jsonFilePath)
          .then(response => response.json())
          .then(data => {
              const products = data.products;
              const carousel = document.createElement('div');
              carousel.className = 'carousel flex  w-full max-w-[1920px] gap-[10px] mob:mx-[48px] mx-[24px] overflow-x-scroll';

              products.forEach(product => {
                  const productCard = document.createElement('div');
                  productCard.className = 'flex-shrink-0 min-w-[300px] max-w-[610px] w-full md:w-[calc(33.33%-10px)]';

                  const img = document.createElement('img');
                  img.src = product.imgSrc;
                  img.alt = '';
                  img.className = 'w-full';

                  const contentDiv = document.createElement('div');
                  contentDiv.className = 'pt-[16px]';

                  const h3 = document.createElement('h3');
                  h3.className = 'text-[20px]';
                  h3.textContent = product.title;

                  const h5 = document.createElement('h5');
                  h5.className = 'text-gray-500 mt-1';
                  h5.textContent = product.subtitle;

                  const h4 = document.createElement('h4');
                  h4.className = 'mt-4';
                  h4.textContent = product.price;

                  contentDiv.appendChild(h3);
                  contentDiv.appendChild(h5);
                  contentDiv.appendChild(h4);

                  productCard.appendChild(img);
                  productCard.appendChild(contentDiv);

                  carousel.appendChild(productCard);
              });

              this.appendChild(carousel);
          })
          .catch(error => console.error('Error fetching JSON:', error));
  }
}

customElements.define('product-carousel', ProductCarousel);
