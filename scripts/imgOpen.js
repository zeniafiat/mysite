const diplomasContainer = document.querySelector(".diplomas");
const imgs = document.querySelectorAll(".diplomas img");
const overlay = document.createElement('div');

overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 998;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
`;
document.body.appendChild(overlay);

document.addEventListener("click", function(e) {
    const clickedImg = e.target.closest('img');
    
    if (clickedImg && diplomasContainer.contains(clickedImg)) {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
        
        imgs.forEach(img => {
            img.style.cssText = "width: 100px; height: auto; border-radius: 0.75rem; opacity: 0.4; cursor: zoom-in;";
        });
        
        clickedImg.style.cssText = `
            position: fixed;
            z-index: 999;
            width: auto;
            height: auto;
            max-width: 80vw;
            max-height: 80vh;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
            cursor: zoom-out;
            border-radius: 0;
            transition: all 0.3s ease;
        `;
    } else {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        
        imgs.forEach(img => {
            img.style.cssText = "width: 100px; height: auto; border-radius: 0.75rem; opacity: 0.4; cursor: zoom-in;";
        });
    }
});

overlay.addEventListener('click', function() {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    
    imgs.forEach(img => {
        img.style.cssText = "width: 100px; height: auto; border-radius: 0.75rem; opacity: 0.4; cursor: zoom-in;";
    });
});
