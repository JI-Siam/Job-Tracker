<h1>Job Tracker App -  JS DOM Manipulation Practise</h1>
<h2>Live Link : <a href="https://job-tracker-tawny-sigma.vercel.app/">Visit Website</a> </h2>

<dl>
    <dt>What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</dt>
    <dd>
     Get Element By ID : get an element by Id name <br>
     getElementsByClassName : get elements by class name - return HTML collections<br>
     querySelector : get an element using id , class , tagname  
     querySelectorAll : get all elements using id , class , tagname - returns multiple 
    </dd>

<dt>How do you create and insert a new element into the DOM?</dt>

  <dd>
    const containerElement = document.getElemenyById('box') ; 
    containerElement.appendChild(newDiv) ; 
  </dd>

<dt>What is Event Bubbling? And how does it work?</dt>

  <dd>
    When an event is triggered (ex: click) it finds the target starting from the parent node
    first the root - then its child - then its child - then its child ------ finally to the target. 
    and when the target is triggered, again it bubbles back to parent from the target triggering the parent elements as well.
  </dd>

<dt>What is Event Delegation in JavaScript? Why is it useful?</dt>

  <dd>Event Delegation is triggering the child events without adding seperate/specific events for tthe childs , instead add one event to the parent and delegate it to the childs. It is helps write cleaner code and faster execution because of less number of event listeners</dd>

<dt> What is the difference between preventDefault() and stopPropagation() methods?</dt>

  <dd>
    Prevent Default : prevents the default behaviour of the browser. 
    Stop Propagation: stops the bubbling from the target to parent , so only the target element is triggered.
  </dd>
</dl>
