// DZ 1.1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

gmailButton.addEventListener('click', () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = 'red'
    }
})

// DZ 1.2

const circle = document.querySelector('.child_block');
moveRight(circle, 0);

function moveRight(element, position) {
    if (position < 444) {
        position += 4;
        element.style.left = position + 'px';
        setTimeout(() => moveRight(element, position), 50);
    }
}

