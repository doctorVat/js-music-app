window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#800000",
        '#FFFF00',
        '#00FF00',
        '#C0C0C0',
        '#000000',
        '#FF00FF'
    ];
    
    
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
    });
});

        const createBubbles = (index) => {
            const bubble = document.createElement('div');
            visual.appendChild(bubble);
            bubble.style.backgroundColor = colors[index];
            bubble.style.animation = 'jump 1.5s ease';
            bubble.addEventListener('animationend', function(){
                visual.removeChild(this)
            })
        };
});
//