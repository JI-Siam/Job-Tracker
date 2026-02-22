const allBtn = document.getElementById('btn-all') ; 
const interviewBtn = document.getElementById('btn-interview') ; 
const rejectBtn = document.getElementById('btn-rejected');

allBtn.addEventListener('click' , (e)=>{
    removeAllBtn(); 
    markPrimaryBtn(allBtn); 
   unHideAllJobs() ; 
   allJobsCntElement.innerText=`${allCount} jobs`; 
  // console.log(document.getElementById('no-jobs-container')) ;
     document.getElementById('no-jobs-container').classList.add('hidden')  ;  
}); 


interviewBtn.addEventListener('click' , ()=>{

    removeAllBtn(); 
    markPrimaryBtn(interviewBtn); 

    const container = document.getElementById('container-all');
    const interviewedJobs = container.querySelectorAll('.interviewed-job');
    //console.log(interviewedJobs.length);
    hideAllJobs() ;

    interviewedJobs.forEach(element => {
        element.hidden = false; 
    });

    const interviewCount = interviewedJobs.length; 
    allJobsCntElement.innerText=`${interviewCount} of ${allCount} `;
    
    if(interviewedJobs.length ==0){
        //console.log(document.getElementById('no-jobs-container')) ;
          document.getElementById('no-jobs-container').classList.remove('hidden')  ; 
    }
    else{
        document.getElementById('no-jobs-container').classList.add('hidden')  ; 
    }
}) ;


rejectBtn.addEventListener('click' , ()=>{

    removeAllBtn(); 
    markPrimaryBtn(rejectBtn); 

    const container = document.getElementById('container-all');
    const rejectedJobs = container.querySelectorAll('.rejected-job');

    console.log(rejectedJobs.length);

    hideAllJobs() ;

    rejectedJobs.forEach(element => {
        element.hidden = false; 
    });

    const rejectedCount = rejectedJobs.length; 
    allJobsCntElement.innerText=`${rejectedCount} of ${allCount} `; 

    console.log(rejectedCount) ; 
    if(rejectedCount == 0 ){
        //console.log(document.getElementById('no-jobs-container')) ;
        document.getElementById('no-jobs-container').classList.remove('hidden')  ; 
    }
     else{
        document.getElementById('no-jobs-container').classList.add('hidden')  ; 
    }
}) ;
