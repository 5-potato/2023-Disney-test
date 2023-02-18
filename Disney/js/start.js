const main = document.querySelector("#main"); //html 문서에 id 값을 main이라고 선언하기 
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 13;

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation="fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation="fadeIn 1s";
        result.style.animation="fadeIn 1s";
        setTimeout(()=>{
            qna.style.display="none";
            result.style.display="block";
        },450)})
}


function addAnswerButton(answerText, qIndex){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
   //div 태그 달아줌 (폰트 바꾸기 위해서)
    answer.innerHTML = "<div class = 'answerText'>"+answerText+"</div>"

    //답변이 선택되었을 때의 이벤트 추가
    answer.addEventListener("click",function(){
        var childrens = document.querySelectorAll('.answerList');
        for(let i =0;i<childrens.length;i++){
            childrens[i].disabled = true;
            childrens[i].style.WebkitAnimation = "fadeOut 0.5s";
            childrens[i].style.animation="fadeOut 0.5s";
        }
        setTimeout(() => {
            for(let i =0;i<childrens.length;i++){
                childrens[i].style.display='none';
            }
            goNext(++qIndex)
        }, 450);
    },false);


}
function goNext(qIndex){
    if(qIndex+1==endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIndex].q;
    //답변의 수만큼 for 반복
    for(let i in qnaList[qIndex].a){
        //답변을 addAnswerButton 함수로 넘겨주고, 이 함수에서는 버튼을 생성해서 append 함
        addAnswerButton(qnaList[qIndex].a[i].answer,qIndex);
    }
    var status = document.querySelector('.statusBar');
    status.style.width= (100/endPoint) *(qIndex+1) +"%"
    

}
function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation="fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation="fadeIn 1s";
        qna.style.animation="fadeIn 1s";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
    
        },450)
        let qIndex =0;
        goNext(qIndex);
    },450);

}