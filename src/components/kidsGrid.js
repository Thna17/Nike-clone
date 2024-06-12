class KidsSection extends HTMLElement {
    constructor() {
        super();
    }

    // Function to be executed when the element is connected to the DOM
    connectedCallback() {
        // Set the inner HTML of the element to the following markup
        this.innerHTML = `
            <!-- Section for displaying a grid of kids' products -->
            <section class="flex justify-center">
                <!-- Grid container -->
                <div class="flex w-[1920px] mob:mx-[48px] mx-[24px] flex-col mob:flex-row gap-[10px] font-HelveticaNowText_Regular">
                    <!-- First column of grid items -->
                    <div class="w-full flex gap-[10px] order-1 flex-col">
                        <!-- First grid item -->
                        <div class="w-full mob:min-h-[600px] max-h-[800px] relative">
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/dbe128f7-08de-4cd6-9a67-c5d6379f71f2/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" class="mob:h-full object-cover w-full">
                            <!-- Overlay content for the first grid item -->
                            <div class="mob:absolute bottom-[50px] left-[50px]">
                                <h3 class="text-[24px] font-medium mb-[10px]">Big Kids</h3>
                                <p class="text-[18px]">Explore apparel (XS-XL) <br> and shoes (3.5-7Y)</p>
                                <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[18px] mt-4 mb-4">Shop</div>
                            </div>
                        </div>
                        <!-- Second grid item -->
                        <div class="w-full mob:min-h-[400px] max-h-[600px] relative">
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/8683d382-e97e-441b-a172-02e872d60cf3/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" class="mob:h-full object-cover object-right w-full">
                            <!-- Overlay content for the second grid item -->
                            <div class="mob:absolute bottom-[50px] left-[50px]">
                                <h3 class="text-[24px] font-medium mb-[10px]">Babies and Toddlers</h3>
                                <p class="text-[18px]">Explore apparel (OM-$T) <br> and shoes (0C-10C)</p>
                                <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[18px] mt-4 mb-4">Shop</div>
                            </div>
                        </div>
                    </div>
                    <!-- Second column of grid items -->
                    <div class="w-full flex gap-[10px] order-2 flex-col">
                        <!-- Third grid item -->
                        <div class="w-full mob:min-h-[400px] max-h-[600px] relative">
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/d7596a44-b299-4050-83af-b25707978070/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" class="mob:h-full object-cover object-right w-full">
                            <!-- Overlay content for the third grid item -->
                            <div class="mob:absolute bottom-[50px] left-[50px]">
                                <h3 class="text-[24px] font-medium mb-[10px]">Little Kids</h3>
                                <p class="text-[18px]">Explore apparel (4-7) <br> and shoes (10.5C-3Y)</p>
                                <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[18px] mt-4 mb-4">Shop</div>
                            </div>
                        </div>
                        <!-- Fourth grid item -->
                        <div class="w-full mob:min-h-[600px] max-h-[800px] relative">
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/b5ec764e-5a91-4879-90ee-ade08c70edae/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" class="mob:h-full object-cover object-right w-full">
                            <!-- Overlay content for the fourth grid item -->
                            <div class="mob:absolute bottom-[50px] left-[50px]">
                                <h3 class="text-[24px] font-medium mb-[10px]">Teen Essentials</h3>
                                <p class="text-[18px]">Explore apparel (XS-XL) <br> and shoes (3.5-7Y)</p>
                                <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[18px] mt-4 mb-4">Shop</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Define the custom element 'kids-section' with the KidsSection class
customElements.define('kids-section', KidsSection);
