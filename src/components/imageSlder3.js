document.addEventListener('DOMContentLoaded', () => {
    const products = [
      {
        imgSrc: '/assets/images/image-women/image1-slider3.webp',
        title: 'Air Jordan 1 Retro High OG "Latte" ',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image2-slider3.webp',
        title: 'Nike Free Metcon 5',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image3-slider3.webp',
        title: 'Nike Motiva',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image4-slider3.webp',
        title: 'Nike Air VaporMax Plus',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image5-slider3.webp',
        title: 'Nike Air Max 90 LV8',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image6-slider3.webp',
        title: 'Nike Killshot 2',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image7-slider3.webp',
        title: 'Nike Invincible 3',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image8-slider3.webp',
        title: 'Nike V2K Run',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image9-slider3.webp',
        title: 'Nike Gamma Force',
        subtitle: "Women's Shoes",
        price: '$180'
      },
      {
        imgSrc: '/assets/images/image-women/image10-slider3.webp',
        title: 'Nike Vaporfly 3',
        subtitle: "Women's Shoes",
        price: '$180'
      },
    ];
  
    const carousel = document.querySelector('.carousel');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'flex-shrink-0 min-w-[300px] max-w-[610px] w-full md:w-[calc(33.33%-10px)]';
  
      const img = document.createElement('img');
      img.src = product.imgSrc;
      img.alt = '';
      img.className = 'w-full';
  
      const contentDiv = document.createElement('div');
      contentDiv.className = 'pt-4';
  
      const h3 = document.createElement('h3');
      h3.className = 'text-xl';
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
  });
  