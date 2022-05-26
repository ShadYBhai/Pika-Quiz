const correctAnwsers = ['A','A','A','A','B','A','A','B','B'];
const form = document.querySelector('.quiz-form');
const h2 = document.querySelector('.ans')

form.addEventListener ('submit',e => {
    e.preventDefault()
    let score = 0 ;
    const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value ,form.q9.value]

    userAns.forEach((ans,index) => {
        if (ans === correctAnwsers[index] ){
            score += 11;
        }
   })
    window.scrollTo(0,0)
   
   let output = 0;
    
    const timer = setInterval(()=>{
        h2.textContent = `YOUR CHILD'S HAPPINESS SCORE IS ${output}`
        if (output === score){
            clearInterval(timer)
        }
        else {
            output++;
        }
        
    },10)
   
})
