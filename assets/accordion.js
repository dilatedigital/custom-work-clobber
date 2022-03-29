const elements = document.querySelectorAll('.accordion-item');

elements.forEach(element =>{
    let btn = element.querySelector('.question');
    var answer = element.querySelector('.answer');
    var answers = document.querySelectorAll('.answer');
    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            if(answer !== ans){
                ans.classList.add('hidden');
            }
        });
        answer.classList.toggle('hidden');
        //console.log(answer)
    });
});
