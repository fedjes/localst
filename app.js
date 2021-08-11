  localStorage.clear();

  let div = document.getElementById('add');
  const btn = document.getElementById('press');
  const btn2 = document.getElementById('end');
  let newDiv = document.createElement('div');



let score = 0;
let a = localStorage.setItem('test', score);
let endScoreLocal = localStorage.setItem('end_score', score);
 function moreScore () {
     
         score++;  
         a = localStorage.setItem('test', score);
         console.log(score);
         newDiv.textContent = localStorage.getItem('test');
         document.body.append(newDiv);
      
    }
    
    btn.addEventListener('click', moreScore);


function endScore () {
    if(localStorage.getItem('end_score') < score ) {  
        localStorage.setItem('end_score', score);       
        div.textContent = localStorage.getItem('end_score'); 
    }else{
        alert('Top score : ' + localStorage.getItem('end_score'));
    }
    score = 0; 
}

btn2.addEventListener('click', endScore);