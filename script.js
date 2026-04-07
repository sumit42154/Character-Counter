const textInput = document.getElementById('textInput');
const currentCount = document.getElementById('currentCount');
const progressFill = document.getElementById('progressFill');

const maxLength = parseInt(textInput.getAttribute("maxlength"));

textInput.addEventListener("input", ()=>{
    const currentLength = textInput.value.length;
    const percentage = (currentLength/maxLength)*100;

    currentCount.textContent = currentLength;

    progressFill.style.width = `${percentage}%`;

    currentCount.classList.remove('warning','danger');

    if((percentage>=80) && (percentage<100) ){
        currentCount.classList.add('warning');
    }
    if(percentage>=100){
        currentCount.classList.add('danger');
    }
});