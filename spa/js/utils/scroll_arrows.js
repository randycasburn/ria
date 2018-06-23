window.addEventListener('scroll', hideArrow);
document.querySelector('body > header nav ul').addEventListener('click', hightlightMenu);
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
    if (window.innerHeight + window.scrollY - document.querySelector('body > header').clientHeight >= document.querySelector('aside').clientHeight) {
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

function hightlightMenu(e){
    if(e.target.nodeName !== 'A') return;
    document.querySelectorAll('body > header > nav > ul > li').forEach(link=>link.classList.remove('active'));
    e.target.parentNode.classList.add('active');
}
