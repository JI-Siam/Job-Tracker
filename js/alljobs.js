const interviewBtnElement = document.querySelectorAll('.interview-mark-btn')  ;

console.log(interviewBtnElement) ; 

interviewBtnElement.forEach(element => {
    element.addEventListener('click', ()=>{
        const interviewMarkElement = element.parentNode.querySelector('.interview-mark') ; 
        console.log(interviewMarkElement) ;
        interviewMarkElement.innerText= "Interviewed" ;
        interviewMarkElement.classList.remove('btn-neutral',  'btn-soft');
        interviewMarkElement.classList.add('btn', 'btn-success'); 
        interviewMarkElement.disabled = false; 
        
        const cntElement = document.getElementById('interview-cnt') ; 
        console.log(cntElement) ;
        var newCount= Number(cntElement.innerText) + 1 ; 
        console.log(newCount) ;
        cntElement.innerText=newCount ; 

        element.disabled= true;
    })
   
});