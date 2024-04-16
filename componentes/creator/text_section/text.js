document.addEventListener("DOMContentLoaded", function() {
    const addTextButton = document.getElementById("addTextButton");
    const addHeadingButton = document.getElementById("addHeadingButton");
    const addListButton = document.getElementById("addListButton");
    const addImageButton = document.getElementById("addImageButton");
    const toggleModeButton = document.getElementById("toggleModeButton");
    const textBlocks = document.getElementById("textBlocks");
    
    toggleModeButton.addEventListener("click", function() {
        const tools = document.querySelectorAll(".tools");
        const button = this;
        
        tools.forEach(tool => {
            if (tool.style.display === "none"){
                tool.style.display = "block";
                button.textContent = "Preview";
            } else {
                tool.style.display = "none";
                button.textContent = "Edit";
            }
        });
    });

    addTextButton.addEventListener("click", function() {
        const textContainer = document.createElement("div");
        textContainer.className = "text-container";
        textBlocks.appendChild(textContainer);
        
        const textInput = document.createElement("textarea");
        textInput.placeholder = "Start typing here";
        
        const fontSelect = document.createElement("select");
        fontSelect.className = "font-select";
        fontSelect.innerHTML = `
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
        `;

        const italicCheckbox = document.createElement("input");
        italicCheckbox.type = "checkbox";
        italicCheckbox.className = "italic-checkbox";
        const italicLabel = document.createElement("label");
        italicLabel.textContent = "Italic";
        italicLabel.htmlFor = "italicCheckbox";

        const boldCheckbox = document.createElement("input");
        boldCheckbox.type = "checkbox";
        boldCheckbox.className = "bold-checkbox";
        const boldLabel = document.createElement("label");
        boldLabel.textContent = "Bold";
        boldLabel.htmlFor = "boldCheckbox";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            textContainer.remove();
        });

        textContainer.appendChild(textInput);
        textContainer.appendChild(createTools(fontSelect, italicCheckbox, italicLabel, boldLabel, boldCheckbox, removeButton));

        italicCheckbox.addEventListener("change", function() {
            if (this.checked) {
                textInput.style.fontStyle = "italic";
            } else {
                textInput.style.fontStyle = "normal";
            }
        });

        boldCheckbox.addEventListener("change", function() {
            if (this.checked) {
                textInput.style.fontWeight = "bold";
            } else {
                textInput.style.fontWeight = "normal";
            }
        });

        fontSelect.addEventListener("change", function() {
            textInput.style.fontFamily = this.value;
        });
    });

    addHeadingButton.addEventListener("click", function() {
        const headingContainer = document.createElement("div");
        headingContainer.className = "heading-container";
        textBlocks.appendChild(headingContainer);
    
        const headingInput = document.createElement("input");
        headingInput.classList.add("heading-text");
        headingInput.type = "text";
        headingInput.placeholder = "Heading";
    
        const fontSelect = document.createElement("select");
        fontSelect.className = "font-select";
        fontSelect.innerHTML = `
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
        `;

        const italicCheckbox = document.createElement("input");
        italicCheckbox.type = "checkbox";
        italicCheckbox.className = "italic-checkbox";
        const italicLabel = document.createElement("label");
        italicLabel.textContent = "Italic";
        italicLabel.htmlFor = "italicCheckbox";

        const boldCheckbox = document.createElement("input");
        boldCheckbox.type = "checkbox";
        boldCheckbox.className = "bold-checkbox";
        const boldLabel = document.createElement("label");
        boldLabel.textContent = "Bold";
        boldLabel.htmlFor = "boldCheckbox";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            headingContainer.remove();
        });

        headingContainer.appendChild(headingInput);
        headingContainer.appendChild(createTools(fontSelect, italicCheckbox, italicLabel, boldLabel, boldCheckbox, removeButton));

        italicCheckbox.addEventListener("change", function() {
            if (this.checked) {
                headingInput.style.fontStyle = "italic";
            } else {
                headingInput.style.fontStyle = "normal";
            }
        });

        boldCheckbox.addEventListener("change", function() {
            if (this.checked) {
                headingInput.style.fontWeight = "bold";
            } else {
                headingInput.style.fontWeight = "normal";
            }
        });

        fontSelect.addEventListener("change", function() {
            headingInput.style.fontFamily = this.value;
        });
    });

    addListButton.addEventListener("click", function() {
        const listContainer = document.createElement("div");
        listContainer.className = "list-container";
        textBlocks.appendChild(listContainer);
    
        const list = document.createElement("ul");
        list.className = "disc";
        listContainer.appendChild(list);
        
        const listItemInput = document.createElement("input");
        listItemInput.placeholder = "Add another item";
        
        const typeSelect = document.createElement("select");
        typeSelect.innerHTML = `
            <option value="disc">Disc</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
        `;
    
        const fontSelect = document.createElement("select");
        fontSelect.className = "font-select";
        fontSelect.innerHTML = `
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
        `;
    
        const italicCheckbox = document.createElement("input");
        italicCheckbox.type = "checkbox";
        italicCheckbox.className = "italic-checkbox";
        const italicLabel = document.createElement("label");
        italicLabel.textContent = "Italic";
        italicLabel.htmlFor = "italicCheckbox";
    
        const boldCheckbox = document.createElement("input");
        boldCheckbox.type = "checkbox";
        boldCheckbox.className = "bold-checkbox";
        const boldLabel = document.createElement("label");
        boldLabel.textContent = "Bold";
        boldLabel.htmlFor = "boldCheckbox";
    
        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.addEventListener("click", addItem);
    
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            listContainer.remove();
        });
    
        listItemInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                addItem();
                event.preventDefault();
            }
        });
    
        typeSelect.addEventListener("change", function() {
            list.className = this.value;
        });
    
        function addItem() {
            const newItemText = listItemInput.value.trim();
            if (newItemText !== "") {
                const newItem = document.createElement("li");
                newItem.textContent = newItemText;
                
                // Apply selected styles to the new list item
                applyStyles(newItem);
                
                list.appendChild(newItem);
                listItemInput.value = "";
            }
        }
    
        function applyStyles(item) {
            const fontStyle = italicCheckbox.checked ? "italic" : "normal";
            const fontWeight = boldCheckbox.checked ? "bold" : "normal";
            const fontFamily = fontSelect.value;
    
            item.style.fontStyle = fontStyle;
            item.style.fontWeight = fontWeight;
            item.style.fontFamily = fontFamily;
        }
    
        listContainer.appendChild(createTools(listItemInput, typeSelect, fontSelect, italicCheckbox, italicLabel, boldCheckbox, boldLabel, addButton, removeButton));
    
        italicCheckbox.addEventListener("change", function() {
            applyStyles(listItemInput);
        });
    
        boldCheckbox.addEventListener("change", function() {
            applyStyles(listItemInput);
        });
    
        fontSelect.addEventListener("change", function() {
            applyStyles(listItemInput);
        });
    });
    
    addImageButton.addEventListener("click", function() {
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
        textBlocks.appendChild(imageContainer);

        const imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.accept = "image/*";

        const imageUrlInput = document.createElement("input");
        imageUrlInput.type = "text";
        imageUrlInput.placeholder = "Image URL";

        const floatSelect = document.createElement("select");
        floatSelect.className = "float-select";
        floatSelect.innerHTML = `
            <option value="none">None</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
        `;

        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.addEventListener("click", function() {
            const imageUrl = imageUrlInput.value.trim();
            if (imageUrl !== "") {
                addImage(imageUrl, imageContainer);
                imageUrlInput.value = "";
            }
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            imageContainer.remove();
        });
        
        imageContainer.appendChild(createTools(imageInput,imageUrlInput,floatSelect,addButton,removeButton));
    });

    function addImage(src, container) {
        const img = document.createElement("img");
        img.src = src;
        img.style.float = container.querySelector(".float-select").value;
        container.appendChild(img);
    }

    function createTools(...objects){
        const tools = document.createElement("div");
        tools.className = "tools";
        tools.style.display = "block"
        objects.forEach(object => {
            tools.appendChild(object);
        });
        return tools;
    }
});


function adjustTextareaRows(textarea) {
    textarea.rows = textarea.value.split("\n").length + 1;
}
