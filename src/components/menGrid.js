class menGrid extends HTMLElement {
    constructor() {
        super();
    }
    // Function to be executed when the element is connected to the DOM
    connectedCallback() {
        // Set the inner HTML of the element to the following markup
        this.innerHTML = `
        <section class=" flex justify-center">
        <div class=" flex w-[1920px]  mob:mx-[48px] mx-[24px] flex-col mob:flex-row  gap-[10px] font-HelveticaNowText_Regular">
            <div class="w-full flex  gap-[10px] order-1 flex-col ">
                <div class=" w-full mob:min-h-[600px] max-h-[800px] relative">
                    <img src="/assets/images/image-men/layout4-im1-men.webp" alt="" class="mob:h-full object-cover w-full">
                    <div class="mob:absolute bottom-[50px] left-[50px] ">
                        <h3 class="text-[24px] font-medium mb-[10px]">Featured Footwear: Dunks</h3>
                        <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[16px] mt-4 mb-4">Shop</div>
                    </div>
                </div>
                <div class=" w-full mob:min-h-[400px] max-h-[600px] relative">
                    <img src="/assets/images/image-men/layout4-img2-men.webp" alt="" class=" mob:h-full object-cover object-right w-full  ">
                    <div class="mob:absolute bottom-[50px] left-[50px]">
                        <h3 class="text-[24px] font-medium mb-[10px] text-nike-white max-[600px]:text-nike-black">Running Essentials</h3>
                        <div class="inline-block bg-nike-white rounded-[20px] font-medium py-[6px] px-[16px] text-nike-black text-[16px] mt-4 mb-4  max-[600px]:bg-nike-black max-[600px]:text-nike-white">Shop</div>
                    </div>
                </div>
            </div>
            <div class="w-full  flex gap-[10px] order-2 flex-col">
                <div class="w-full mob:min-h-[400px] max-h-[600px] relative">
                    <img src="/assets/images/image-men/layout4-img3-men.webp" alt="" class=" mob:h-full object-cover object-right w-full">
                    <div class="mob:absolute bottom-[50px] left-[50px]">
                        <h3 class="text-[24px] font-medium mb-[10px] text-nike-white   max-[600px]:text-nike-black">Versatile Workout Styles</h3>
                        <div class="inline-block bg-nike-white rounded-[20px] font-medium py-[6px] px-[16px] text-nike-black text-[16px] mt-4 mb-4  max-[600px]:bg-nike-black max-[600px]:text-nike-white">Shop</div>
                    </div>
                </div>
                <div class="w-full mob:min-h-[600px] max-h-[800px] relative">
                    <img src="/assets/images/image-men/layout4-img4-men.webp" alt="" class=" mob:h-full object-cover object-right w-full">
                    <div class="mob:absolute bottom-[50px] left-[50px]">
                        <h3 class="text-[24px] font-medium mb-[10px]">Nike Fleece For Spring</h3>
                        <div class="inline-block bg-black rounded-[20px] font-medium py-[6px] px-[16px] text-white text-[16px] mt-4 mb-4">Shop</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `
    }
}
// Define the custom element 'more-to-explore-men' with the MenGrid class
customElements.define('more-to-explore-men', menGrid)