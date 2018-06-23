window.addEventListener('scroll', hideArrow);
/**
 * Demonstrates:
 * 1. determine scroll position
 * 2. change CSS styles conditionally
 */
function hideArrow() {
    let up = 'none';
    let down = 'none';
    let upArrow = document.querySelector('.arrow-up');
    let downArrow = document.querySelector('.arrow-down');
    console.log(window.innerHeight + window.scrollY, document.body.clientHeight)
    if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
        down = 'none';
        up = 'inherit';
    } else {
        down = 'inherit';
        up = 'inherit';
    }
    if(window.scrollY === 0){
        up = 'none';
    }
    upArrow.style.display = up;
    downArrow.style.display = down;
}

