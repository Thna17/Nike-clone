class Navbar extends HTMLElement {
    constructor() {
        super();
   
    }

    connectedCallback() {
        this.setAttribute('class', 'w-screen HelveticaNowText-Medium font-black')
        this.innerHTML = `
                <!-- First navigation bar -->
                <nav class="h-9 p-desktop flex justify-between items-center max-[960px]:hidden">
                    <div class="w-auto h-auto inline-block">
                        <img src="./assets/images/icons & logos/jordan.svg" alt="" class="inline-block">
                        <img src="./assets/images/icons & logos/converse.svg" alt="" class="inline-block">
                    </div>
                    <div class="flex text-center items-center text-xs">
                        <span class="px-2">Find a Store</span>
    
                        <span class="px-2">
                            <img src="./assets/images/icons & logos/line.svg" alt="">
                        </span>
                        <span class="px-2"> Help</span>
                        <span class="px-2">
                            <img src="/assets/images/icons & logos/line.svg" alt="">
                        </span>
                        <span class="px-2">Join Us</span>
                        <span class="px-2">
                            <img src="/assets/images/icons & logos/line.svg" alt="">
                        </span> 
                        <span class="px-2">Sign In</span>
                    </div>
                </nav>

                <!-- Second navigation bar -->
                <nav class="w-screen h-15 flex items-center p-desktop max-[960px]:p-teblet">
                    <!-- Add logo -->
                    <div class="h-full w-full flex justify-start">
                        <img src="./assets/images/icons & logos/logo.svg" alt="" class="h-full">
                    </div>
                    <!-- Add menu items -->
                    <div class="w-full justify-center flex max-[960px]:hidden text-nowrap">
                        <span class="px-3">New & Featured</span>
                        <span class="px-3">Men</span>
                        <span class="px-3">Women</span>
                        <span class="px-3">Kids</span>
                        <span class="px-3">Jordan</span>
                        <span class="px-3">Sale</span>
                    </div>
                    <!-- Add search and other buttons -->
                    <div class="w-full flex justify-end">
                    <button class="p-2 relative min-[961px]:left-10 z-10">
                        <object data="./assets/images/icons & logos/search.svg" type=""></object>
                    </button >
                    <button class="bg-[#F5F5F5] relative py-[8px] px-[48px] rounded-3xl border-2 border-solid border-transparent z-0 max-[960px]:hidden">
                        <input type="text" placeholder="search" class="inline-block w-[84px] outline-none bg-transparent fill-none text-lg">
                    </button>
                    <button class="p-2 max-[960px]:hidden">
                        <object data="./assets/images/icons & logos/heart.svg" type=""></object>
                    <button class="p-2 ">
                        <object data="./assets/images/icons & logos/shop.svg" type=""></object>
                    </button>
                    <button class="p-2 " id="hidden">
                        <img src="./assets/images/icons & logos/account.svg" alt="">
                    </button>
                    <button class="p-2 " id="hidden">
                        <img src="./assets/images/icons & logos/humburger.svg" alt="">
                    </button>
                        </div>
                    </nav>
  
        `;
    }
}

customElements.define('custom-navbar', Navbar);
