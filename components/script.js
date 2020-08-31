var qzno=0
var score=0
answered=[];
displayQues()
function displayQues(){
qz=document.getElementById("quizform")
qz.innerHTML=`<h3 class="ques">${qzno+1}. ${myQuestions[qzno].question} </h3> <br><br><br>`

Object.keys(myQuestions[qzno].answers).forEach(key => {


    if(qzno in answered ){
        console.log("i")
        // console.log(key,answered[qzno].value)

        if(key==answered[qzno].value){
            qz.innerHTML+=`<div class="option ${key}"><label><input type="radio" id="choice" name=${qzno} value=${key} disabled checked >
                    ${eval("myQuestions[qzno].answers."+key)}</label></div><br>`




                    if(myQuestions[qzno].correctAnswer==answered[qzno].value){
                        document.getElementsByClassName(key)[0].style.backgroundColor="green"
                        console.log("correct")
                    }
                    else{
                        document.getElementsByClassName(key)[0].style.backgroundColor="red"
                        console.log("False")
                    }

        }
        else{
        qz.innerHTML+=`<div class="option ${key}"><label><input type="radio" id="choice" name=${qzno} value=${key} disabled >
                    ${eval("myQuestions[qzno].answers."+key)}</label></div><br>`

        }

        
        
    }

    else{
    qz.innerHTML+=`<label><div class="option ${key}"><input type="radio" id="choice" name=${qzno} value=${key} onchange=check(event)>
                    ${eval("myQuestions[qzno].answers."+key)}</div></label><br>`
    }

  });



}
function check(e){
    q=e.target.name
    o=e.target.defaultValue
    answered.push({
        key:   q,
        value: o
    })
    q=parseInt(q)
    console.log(document.getElementsByClassName(o))
    if(myQuestions[qzno].correctAnswer==o){
        document.getElementsByClassName(o)[0].style.backgroundColor="green"
        console.log("correct")
        score+=10
    }
    else{
        document.getElementsByClassName(o)[0].style.backgroundColor="red"
        console.log("False")
    }
    opts=document.getElementsByName(qzno)
    for(var i=0;i<opts.length;i++){
        opts[i].disabled=true
    }
    console.log(answered)

    
    // console.log(e)
}

function next(){ 
    console.log("in")
    qzno++
    if(qzno>myQuestions.length-1){
        document.getElementsByTagName("button")[0].style.display="none"
        document.getElementsByTagName("button")[1].style.display="none"

        displayScore()

    }
    else{

    
displayQues()
    }

}

function prev(){ 
    console.log("in")
    if(qzno!=0){
    qzno--
    }   
    
displayQues()


}

function displayScore(){

    qz=document.getElementById("quizform")
qz.innerHTML=`<h1 id="score">${score} out of ${myQuestions.length*10}</h1>`
}
