const btn = document.querySelector('button');
let timerId,
    i = 0;

function myAnimation() {
    let elem = document.querySelector('.box'),
        pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
