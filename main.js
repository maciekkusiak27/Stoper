const main = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
let time = 0;
let active = false;
let Idinterval;

start=() =>{
    if(!active){
        active = !active;
        main.textContent ="Pause";
        Idinterval = setInterval(go, 10);
    }else{
        active = !active;
        main.textContent ="Start";
        clearInterval(Idinterval)
    }
}
const go = () =>{
    time++;
    document.querySelector('.time div').textContent = (time/100).toFixed(2);
}
const reset = () =>{
    document.querySelector('.time div').textContent = '---';
    time = 0;
}
main.addEventListener('click', start)
resetBtn.addEventListener('click', reset)
