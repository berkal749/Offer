document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    
    button.addEventListener('click', function() {
        // Remove focus after a short delay to allow the click to complete
        setTimeout(() => {
            this.blur();
        }, 100);
    });
});
