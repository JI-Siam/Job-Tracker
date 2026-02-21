function getJobCountByContainer (id){
    const container = document.getElementById(id) ; 
    const jobCount = container.querySelectorAll('.job-card').length;

    console.log(container) ; 
    console.log(jobCount) ; 

    return jobCount ; 
}

function hideAllJobs(){
     const jobs = document.querySelectorAll('.job-card') ; 
    console.log(jobs) ; 
    jobs.forEach(element => {
        element.hidden = true; 
    });
}

function unHideAllJobs(){
    const jobs = document.querySelectorAll('.job-card') ; 
    console.log(jobs) ; 
    jobs.forEach(element => {
        element.hidden = false; 
    });
}

function removeAllBtn(){
const allBtn = document.getElementById('btn-all') ; 
const interviewBtn = document.getElementById('btn-interview') ; 
const rejectBtn = document.getElementById('btn-rejected');

allBtn.classList.remove('btn-soft', 'btn-primary');
interviewBtn.classList.remove('btn-soft', 'btn-primary');
rejectBtn.classList.remove('btn-soft' ,'btn-primary');
}

function markPrimaryBtn(id){
const allBtn = document.getElementById('btn-all') ; 
const interviewBtn = document.getElementById('btn-interview') ; 
const rejectBtn = document.getElementById('btn-rejected');

allBtn.classList.add('btn-soft');
interviewBtn.classList.add('btn-soft');
rejectBtn.classList.add('btn-soft');
id.classList.remove('btn-soft') ; 
id.classList.add('btn-primary') ;
}