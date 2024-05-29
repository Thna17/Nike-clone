// Function to dynamically generate HTML based on data
async function generateDynamicComponent(jsonFileName) {
    const container = document.getElementById("dynamicComponentContainer");
    container.innerHTML = ""; // Clear previous content
    
    try {
        // Fetch the JSON data
        const response = await fetch(jsonFileName);
        const data = await response.json();

        // Loop through data and create elements
        data.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("flex-shrink-0", "min-w-[300px]", "max-w-[610px]", "w-full", "md:w-[calc(33.33%-10px)]");

            const img = document.createElement("img");
            img.src = item.imageUrl;
            img.alt = "";
            img.classList.add("w-full");

            const textDiv = document.createElement("div");
            textDiv.classList.add("pt-[16px]");

            const title = document.createElement("h3");
            title.textContent = item.title;
            title.classList.add("text-[20px]");

            const button = document.createElement("h4");
            button.textContent = item.buttonText;
            button.classList.add("mt-[18px]", "underline");

            textDiv.appendChild(title);
            textDiv.appendChild(button);

            div.appendChild(img);
            div.appendChild(textDiv);

            container.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function with the appropriate JSON file
const jsonFileName = document.currentScript.getAttribute('data-json');
generateDynamicComponent(jsonFileName);
