const interviewBtnElement = document.querySelectorAll('.interview-mark-btn')  ;
const  rejectBtnElement = document.querySelectorAll('.reject-mark-btn')  ;
const allJobsCntElement = document.getElementById('all-jobs-cnt') ; 
const deleteBtn = document.querySelectorAll('.btn-delete') ; 

const interviewJobsCntElement = document.getElementById('interview-jobs-cnt') ; 
const rejectedJobsCntElement = document.getElementById('rejected-jobs-cnt') ; 

const noJobsContainer = document.getElementById('no-jobs-container') ; 


const totalCntElement = document.getElementById('total-cnt'); 
const allCount = getJobCountByContainer('container-all'); 
allJobsCntElement.innerText=`${allCount} jobs`; 
totalCntElement.innerText =`${allCount}`;

rejectBtnElement.forEach(element => {
    element.addEventListener('click', ()=>{
        const interviewMarkElement = element.parentNode.querySelector('.mark') ; 
        //console.log(interviewMarkElement) ;

          if(interviewMarkElement.innerText == "Interviewed"){
            const cntElement = document.getElementById('interview-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ; 
           // console.log(newCount) ;
            cntElement.innerText=newCount ;
            element.parentNode.querySelector('.interview-mark-btn').disabled= false ;
            element.parentNode.classList.remove('interviewed-job') ; 
             const interviewBtn = document.getElementById('btn-interview');

           // console.log("Interview Tab Btn Class : " + interviewBtn.classList.contains('btn-primary')) ;

            // HIDE THE ITEM IF INSIDE interviewed TAB 
            if(interviewBtn.classList.contains('btn-primary')){
                 allJobsCntElement.innerText=`${newCount} of ${allCount} `;
                     element.parentNode.hidden = true; 
                 // show the no jobs tab if new counts becomes 0 after updating 
                     if(newCount ==0 ) {
                       noJobsContainer.classList.remove('hidden')  ; 
                     }
            }
        }

        interviewMarkElement.innerText= "Rejected" ;
        interviewMarkElement.classList.remove('btn-neutral',  'btn-soft');
        interviewMarkElement.classList.add('btn', 'btn-error'); 
        interviewMarkElement.disabled = false; 
        
        const cntElement = document.getElementById('rejected-cnt') ; 
       // console.log(cntElement) ;
        var newCount= Number(cntElement.innerText) + 1 ; 
       // console.log(newCount) ;
        cntElement.innerText=newCount ; 
        element.disabled= true;
         element.parentElement.classList.add('rejected-job');
    })
   
});

interviewBtnElement.forEach(element => {
    element.addEventListener('click', ()=>{

        // status 
        const interviewMarkElement = element.parentNode.querySelector('.mark') ; 

        // if status is already in rejected state - toggle to interview
        if(interviewMarkElement.innerText == "Rejected"){
            const cntElement = document.getElementById('rejected-cnt') ; 
            var newCount= Number(cntElement.innerText) - 1 ; 
            cntElement.innerText=newCount ;
            element.parentNode.querySelector('.reject-mark-btn').disabled= false ;
            element.parentNode.classList.remove('rejected-job') ;

            const rejectBtn = document.getElementById('btn-rejected');

            //console.log("Rejected Tab Btn Class : " + rejectBtn.classList.contains('btn-primary')) ;

            // HIDE THE ITEM IF INSIDE REJECTED TAB 
            if(rejectBtn.classList.contains('btn-primary')){
                 allJobsCntElement.innerText=`${newCount} of ${allCount} `;
                     element.parentNode.hidden = true; 
                      // show the no jobs tab if new counts becomes 0 after updating 
                     if(newCount == 0 ) {
                       noJobsContainer.classList.remove('hidden')  ; 
                     }
            }
        }
        //console.log(interviewMarkElement) ;
        interviewMarkElement.innerText= "Interviewed" ;
        interviewMarkElement.classList.remove('btn-neutral',  'btn-soft' , 'btn-error');
        interviewMarkElement.classList.add('btn', 'btn-success'); 
        interviewMarkElement.disabled = false; 
        
        const cntElement = document.getElementById('interview-cnt') ; 
        //console.log(cntElement) ;
        var newCount= Number(cntElement.innerText) + 1 ; 
        //console.log(newCount) ;
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

         if(rejectBtn.classList.contains('btn-primary')){
                      // show the no jobs container if new counts becomes 0 after updating 
                     if(newCount == 0 ) {
                       noJobsContainer.classList.remove('hidden')  ; 
                     }
            }

         if(interviewBtn.classList.contains('btn-primary')){
                 // show the no jobs container if new counts becomes 0 after updating 
                     if(newCount ==0 ) {
                       noJobsContainer.classList.remove('hidden')  ; 
                     }
            }


    }) ; 
       
});





