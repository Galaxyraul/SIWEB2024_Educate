let selectedTags = [];

function openTagModal() {
    const tagModal = document.getElementById('tagModal');
    tagModal.style.display = 'block';
}

function closeTagModal() {
    const tagModal = document.getElementById('tagModal');
    tagModal.style.display = 'none';
}

function toggleTagSelection(tagElement) {
    const tagName = tagElement.textContent;
    if (selectedTags.includes(tagName)) {
        selectedTags = selectedTags.filter(tag => tag !== tagName);
        tagElement.classList.remove('selected');
    } else {
        selectedTags.push(tagName);
        tagElement.classList.add('selected');
    }
}

function addTags() {
    const output = document.getElementById('output');

    if (selectedTags.length === 0) {
        alert('Please select at least one tag.');
        return;
    }

    // Display selected tags
    const selectedTagsElement = document.createElement('p');
    selectedTagsElement.innerHTML = `Selected Tags: ${selectedTags.join(', ')}`;
    output.appendChild(selectedTagsElement);

    closeTagModal();

    // Clear selected tags
    selectedTags = [];
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => tag.classList.remove('selected'));
}
