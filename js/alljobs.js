const interviewBtnElement = document.querySelectorAll('.interview-mark-btn')  ;
const  rejectBtnElement = document.querySelectorAll('.reject-mark-btn')  ;
const allJobsCntElement = document.getElementById('all-jobs-cnt') ; 
const interviewJobsCntElement = document.getElementById('interview-jobs-cnt') ; 
const rejectedJobsCntElement = document.getElementById('rejected-jobs-cnt') ; 

const allCount = getJobCountByContainer('container-all'); 
allJobsCntElement.innerText=`${allCount} jobs`; 

console.log(interviewBtnElement) ; 
console.log(rejectBtnElement); 

rejectBtnElement.forEach(element => {
    element.addEventListener('click', ()=>{
        const interviewMarkElement = element.parentNode.querySelector('.mark') ; 
        console.log(interviewMarkElement) ;

          if(interviewMarkElement.innerText == "Interviewed"){
            const cntElement = document.getElementById('interview-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ; 
            console.log(newCount) ;
            cntElement.innerText=newCount ;
            element.parentNode.querySelector('.interview-mark-btn').disabled= false ;
            element.parentNode.classList.remove('interviewed-job') ; 
        }

        interviewMarkElement.innerText= "Rejected" ;
        interviewMarkElement.classList.remove('btn-neutral',  'btn-soft');
        interviewMarkElement.classList.add('btn', 'btn-error'); 
        interviewMarkElement.disabled = false; 
        
        const cntElement = document.getElementById('rejected-cnt') ; 
        console.log(cntElement) ;
        var newCount= Number(cntElement.innerText) + 1 ; 
        console.log(newCount) ;
        cntElement.innerText=newCount ; 
        element.disabled= true;
         element.parentElement.classList.add('rejected-job');
    })
   
});


interviewBtnElement.forEach(element => {
    element.addEventListener('click', ()=>{

        const interviewMarkElement = element.parentNode.querySelector('.mark') ; 

        if(interviewMarkElement.innerText == "Rejected"){
            const cntElement = document.getElementById('rejected-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ; 
            console.log(newCount) ;
            cntElement.innerText=newCount ;
            element.parentNode.querySelector('.reject-mark-btn').disabled= false ;
            element.parentNode.classList.remove('rejected-job') ; 
        }
        console.log(interviewMarkElement) ;
        interviewMarkElement.innerText= "Interviewed" ;
        interviewMarkElement.classList.remove('btn-neutral',  'btn-soft' , 'btn-error');
        interviewMarkElement.classList.add('btn', 'btn-success'); 
        interviewMarkElement.disabled = false; 
        
        const cntElement = document.getElementById('interview-cnt') ; 
        console.log(cntElement) ;
        var newCount= Number(cntElement.innerText) + 1 ; 
        console.log(newCount) ;
        cntElement.innerText=newCount ; 

        element.disabled= true;
        element.parentNode.classList.add('interviewed-job');

    })
   
});


