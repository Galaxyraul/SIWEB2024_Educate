let videoWatched = false;

function openPaymentTab(optionName, price) {
    // Replace with your payment URL or logic
    const paymentUrl = `payment.html?option=${optionName}&price=${price}`;
    window.open(paymentUrl, '_blank');
}

function openVideoModal() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'block';
    
    // Reset video watched status and hide claim button
    videoWatched = false;
    const claimCoinsBtn = document.getElementById('claimCoinsBtn');
    claimCoinsBtn.style.display = 'none';

    // Simulate video watching
    setTimeout(() => {
        const claimCoinsBtn = document.getElementById('claimCoinsBtn');
        claimCoinsBtn.style.display = 'block';
        videoWatched = true;
    }, 5000); // Assuming 5 seconds to watch the video
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'none';
    
    // Reset video watched status and hide claim button
    videoWatched = false;
    const claimCoinsBtn = document.getElementById('claimCoinsBtn');
    claimCoinsBtn.style.display = 'none';
}

function claimCoins() {
    if (videoWatched) {
        // Add coins to the user's account (simulated)
        alert('Coins claimed! Check your account.');
        
        // Hide the claim button again
        const claimCoinsBtn = document.getElementById('claimCoinsBtn');
        claimCoinsBtn.style.display = 'none';
        
        videoWatched = false; // Reset video watched status
        closeVideoModal(); // Close the modal
    } else {
        alert('Please watch the video first.');
    }
}
