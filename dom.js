function changeButton() {
    const buttonElement = document.querySelector('.button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function costOf() {
    const  inputElement = document.querySelector('.cost');
    let cost = Number(inputElement.value);
    if(cost < 40){
        cost = cost + 10;
    }
    const result = document.querySelector('.output').innerHTML = `$${cost}`;
}
function callerTone(){
    for(let i = 0; i < 6; i++) {
        if(i === 0) {
            console.log('zero');
        }
        console.log(i);
    }
   let x = 5
    console.log(x);
}
callerTone();