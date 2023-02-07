const main = document.querySelector("#main"); //html 문서에 id 값을 main이라고 선언하기 
const qna = document.querySelector("#qna")

//html 끝나는 부분 body에 마지막에 start.js 파일 실행하는 선언문 작성하기
function addAnswerButton(answerText, qIndex){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    //a에게 answer라는 버튼을 자식으로 추가되게 함
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click",function(){
        var childrens = document.querySelectorAll('.answerList');
        for(let i =0;i<childrens.length;i++){
            childrens[i].disabled = true;
            childrens[i].style.display='none';
        }
        goNext(++qIndex);
    },false);


}
function goNext(qIndex){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIndex].q;
    //답변의 수만큼 for 반복
    for(let i in qnaList[qIndex].a){
        //답변을 addAnswerButton 함수로 넘겨주고, 이 함수에서는 버튼을 생성해서 append 함
        addAnswerButton(qnaList[qIndex].a[i].answer,qIndex);
    }
    

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