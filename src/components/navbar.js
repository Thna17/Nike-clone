class Navbar extends HTMLElement {
    constructor() {
        super();
   
    }

    connectedCallback() {
        // Define navigation paths
        const homepagepath = this.getAttribute('homepageUrlPath');
        const menPath = this.getAttribute('menUrlPath');
        const womenPath = this.getAttribute('womenUrlPath');
        const kidsPath = this.getAttribute('kidsUrlPath');

        // Set the class attribute for styling
        this.setAttribute('class', 'w-[1920px] flex flex-col HelveticaNowText-Medium font-black');
        
         // Define top navigation items
        const navTopArr = [
            { text: 'Find a Store' },
            { text: '', imgSrc: '/assets/images/icons & logos/line.svg' },
            { text: 'Help' },
            { text: '', imgSrc: '/assets/images/icons & logos/line.svg' },
            { text: 'Join Us' },
            { text: '', imgSrc: '/assets/images/icons & logos/line.svg' },
            { text: 'Sign In' }
        ];

        // Define bottom navigation items
        const navDownArr = [
            { name: 'New & Featured', path: '#' },
            { name: 'Men', path: menPath },
            { name: 'Women', path: womenPath },
            { name: 'Kids', path: kidsPath },
            { name: 'Jordan', path: '' },
            { name: 'Shop', path: '' },
        ];

        // Generate HTML for bottom navigation
        let navDown = '';
        navDownArr.forEach(item => {
            navDown += `<span class="px-3"><a href="${item.path}">${item.name}</a></span>`;
        });

        // Generate HTML for top navigation
        const spanItemsHtml = navTopArr.map(item => 
            item.imgSrc 
                ? `<span class="px-2"><img src="${item.imgSrc}" alt=""></span>` 
                : `<span class="px-2">${item.text}</span>`
        ).join('');

        // Set inner HTML for Navbar element
        this.innerHTML = `
                <!-- First navigation bar -->
                <nav class="h-9 p-desktop flex justify-between items-center max-[960px]:hidden">
                    <div class="w-auto h-auto inline-block">
                        <img src="/assets/images/icons & logos/jordan.svg" alt="" class="inline-block">
                        <img src="/assets/images/icons & logos/converse.svg" alt="" class="inline-block">
                    </div>
                    <div class="flex text-center items-center text-xs">
                        ${spanItemsHtml}
                    </div>
                </nav>

                <!-- Second navigation bar -->
                <nav class="w-full h-15 flex items-center p-desktop max-[960px]:p-teblet">
                    <!-- Add logo -->
                    <div class="h-full w-full flex justify-start">
                        <a href="${homepagepath}">
                            <img src="/assets/images/icons & logos/logo.svg" alt="" class="h-full">
                        </a>
                    </div>
                    <!-- Add menu items -->
                    <div class="w-full justify-center flex max-[960px]:hidden text-nowrap">
                        ${navDown}
                    </div>
                    <!-- Add search and other buttons -->
                    <div class="w-full flex justify-end">
                    <button class="p-2 relative min-[961px]:left-10 z-10">
                        <object data="/assets/images/icons & logos/search.svg" type=""></object>
                    </button >
                    <button class="bg-[#F5F5F5] relative py-[8px] px-[48px] rounded-3xl border-2 border-solid border-transparent z-0 max-[960px]:hidden">
                        <input type="text" placeholder="Search" class="inline-block w-[84px] outline-none bg-transparent fill-none ">
                    </button>
                    <button class="p-2 max-[960px]:hidden">
                        <object data="/assets/images/icons & logos/heart.svg" type=""></object>
                    <button class="p-2 ">
                        <object data="/assets/images/icons & logos/shop.svg" type=""></object>
                    </button>
                    <button class="p-2 " id="hidden">
                        <img src="/assets/images/icons & logos/account.svg" alt="">
                    </button>
                    <button class="p-2 z-10 min-[1200px]:hidden" id="humburger-icon">
                            <img src="/assets/images/icons & logos/humburger.svg" alt="">
                     </button>
                    </div>
                    </nav>
                    <div class="bg-black bg-opacity-50 fixed inset-0 z-10 hidden opacity-0 transition-opacity duration-300" id="backDrop"></div>
                    <div class="w-80 fixed right-0 h-screen top-0 bg-white z-10 hidden transform translate-x-full transition-transform duration-300" id="humburger">
                        <div class="pt-[24px] px-[24px] flex justify-end hidden" id="exitHumburger">
                            <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.22513" y1="11.8314" x2="11.7748" y2="1.16823" stroke="black"></line>
                                <line x1="11.8316" y1="11.7749" x2="1.16835" y2="1.2252" stroke="black"></line>
                            </svg>
                        </div>
                        <div class="py-[24px]">

                            <div class="py-[8px] pr-[24px] pl-[36px] flex justify-between">
                                <h2>
                                    <a href="">New & Featured</a>
                                </h2>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                            </div>
                            <div class="py-[8px] pr-[24px] pl-[36px] flex justify-between">
                                <h2><a href="${menPath}">Men</a></h2>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                            </div>
                            <div class="py-[8px] pr-[24px] pl-[36px] flex justify-between">
                                <h2>
                                    <a href="${womenPath}">Women</a>
                                </h2>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                            </div>
                            <div class="py-[8px] pr-[24px] pl-[36px] flex justify-between">
                                <h2>
                                    <a href="${kidsPath}">Kids</a>
                                </h2>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                            </div>
                            <div class="py-[8px] pr-[24px] pl-[36px] flex justify-between text-center">
                                <h2>
                                    <a href="">Jordan</a>
                                </h2>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                            </div>
                        </div>
                        <div class="py-[24px]">
                            <div class="py-[8px] pr-[24px] pl-[30px] flex">
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="30px" height="30px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z" clip-rule="evenodd"></path></svg>
                                <p>Jordan</p>
                            </div>
                            <div class="py-[8px] pr-[24px] pl-[30px] flex">
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="30px" height="30px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.045 10.99V7.73L6.19 10.37 3.115 9.35l1.94 2.64-1.905 2.64 3.045-1.005 1.855 2.64v-3.26l3.11-1.02-3.115-.995zm12.84 1.02l-6.82 7.49H8.21l6.825-7.49L8.21 4.5h5.856l6.819 7.51z" clip-rule="evenodd"></path></svg>
                                <p>Converse</p>
                            </div>
                        </div>
                        <div class="py-[48px] px-[36px] ">
                            <h4>Become a Nike Member for the best products, inspiration and stories in sport. <Span>Learn More</Span></h4>
                            <div class="flex gap-[10px] mt-[16px]">
                                <button class="py-[6px] px-[16px] border border-solid border-black bg-black text-nike-white rounded-[20px]">Join Us</button>
                                <button class="py-[6px] px-[16px] border border-solid border-gray-400 rounded-[20px]">Sign In</button>
                            </div>
                        </div>
                        <div  class="py-[8px] pr-[24px] pl-[30px] flex gap-[10px]">
                            <svg aria-hidden="true" class="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M11.99 18v-1.5M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15m9.75-3c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z"></path></svg>
                            <p>Help</p>
                        </div>
                        <div  class="py-[8px] pr-[24px] pl-[30px] flex gap-[10px]">
                            <svg aria-hidden="true" class="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                            <p>Orders</p>
                        </div>
                        <div  class="py-[8px] pr-[24px] pl-[30px] flex gap-[10px]">
                            <svg aria-hidden="true" class="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13.5v-7c0-1.74 1.01-2.75 2.25-2.75h4.39l1.61 6m0 0H3.75m16.5 0v10.5H3.75V9.75m0 0l1.61-6h5.14"></path></svg>
                            <p>Orders</p>
                        </div>
                        <div  class="py-[8px] pr-[24px] pl-[30px] flex gap-[10px]">
                            <svg aria-hidden="true" class="nav-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25m4.5 13.25v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
                            <p>Find a Store</p>
                        </div>
                    </div>
        `;
    }
}
// Define custom element
customElements.define('component-navbar', Navbar);
