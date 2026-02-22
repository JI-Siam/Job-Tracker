const interviewBtnElement = document.querySelectorAll('.interview-mark-btn')  ;
const  rejectBtnElement = document.querySelectorAll('.reject-mark-btn')  ;
const allJobsCntElement = document.getElementById('all-jobs-cnt') ; 
const deleteBtn = document.querySelectorAll('.btn-delete') ; 

console.log(deleteBtn) ; 

const interviewJobsCntElement = document.getElementById('interview-jobs-cnt') ; 
const rejectedJobsCntElement = document.getElementById('rejected-jobs-cnt') ; 

const totalCntElement = document.getElementById('total-cnt'); 
const allCount = getJobCountByContainer('container-all'); 
allJobsCntElement.innerText=`${allCount} jobs`; 
totalCntElement.innerText =`${allCount}`;

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
            element.parentNode.hidden = true; 
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
            element.parentNode.hidden = true; 
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

deleteBtn.forEach(element => {
    element.addEventListener('click' , ()=>{
        console.log(element.parentNode.parentNode.parentNode); 
       element.parentNode.parentNode.parentNode.remove();
       const allCount = getJobCountByContainer('container-all'); 
    allJobsCntElement.innerText=`${allCount} jobs`; 
    totalCntElement.innerText =`${allCount}`;
   
    const interviewMarkElement = element.parentNode.parentNode.parentNode.querySelector('.mark') ; 

          if(interviewMarkElement.innerText == "Interviewed"){
            const cntElement = document.getElementById('interview-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ;
            cntElement.innerText=newCount ;
        }

        if(interviewMarkElement.innerText == "Rejected"){
            const cntElement = document.getElementById('rejected-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ; 
            cntElement.innerText=newCount ;
        }
    }) ; 
       
});





