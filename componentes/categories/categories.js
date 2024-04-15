document.addEventListener('DOMContentLoaded', function() {
    const categoryContainer = document.querySelector('.category-container');
    let currentOpenDetails = null;
    
    // Define categories data
    const categories = [
        { name: 'Category 1', description: 'Description for Category 1', subcategories: ['Subcategory A', 'Subcategory B', 'Subcategory C'] },
        { name: 'Category 2', description: 'Description for Category 2', subcategories: ['Subcategory X', 'Subcategory Y', 'Subcategory Z'] },
        { name: 'Category 3', description: 'Description for Category 3', subcategories: ['Subcategory P', 'Subcategory Q', 'Subcategory R'] }
        // Add more categories as needed
    ];
    
    // Populate category container with categories
    categories.forEach((category, index) => {
        const categoryElem = document.createElement('div');
        categoryElem.classList.add('category');
        
        const categoryName = document.createElement('div');
        categoryName.classList.add('category-name');
        categoryName.textContent = category.name;
        
        const categoryDetails = document.createElement('div');
        categoryDetails.classList.add('category-details');
        
        const description = document.createElement('p');
        description.textContent = category.description;
        
        const subcategoriesList = document.createElement('ul');
        subcategoriesList.classList.add('subcategories');
        category.subcategories.forEach(subcategory => {
            const subcategoryItem = document.createElement('li');
            subcategoryItem.textContent = subcategory;
            subcategoriesList.appendChild(subcategoryItem);
        });
        
        categoryDetails.appendChild(description);
        categoryDetails.appendChild(subcategoriesList);
        
        categoryElem.appendChild(categoryName);
        categoryElem.appendChild(categoryDetails);
        
        categoryContainer.appendChild(categoryElem);
        
        // Event listener for category clicks
        categoryElem.addEventListener('click', function() {
            const details = this.querySelector('.category-details');
            
            // Close currently opened box
            if (currentOpenDetails && currentOpenDetails !== details) {
                currentOpenDetails.classList.remove('open');
            }
            
            details.classList.toggle('open');
            currentOpenDetails = details;
        });
    });
});
