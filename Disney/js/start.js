const main = document.querySelector("#main"); //html 문서에 id 값을 main이라고 선언하기 
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 13;
//사용자가 선택한 버튼
const selectButton = [];

function showResult(resultMbti){
    location.href="./"+resultMbti+".html";
    console.log(resultMbti);
}


function calResult(){

    var pointArray=[
        {name:'M', value:0, key:0},
        {name:'W', value:0, key:1},
        {name:'I', value:0, key:2},
        {name:'E', value:0, key:3},
        {name:'S', value:0, key:4},
        {name:'N', value:0, key:5},
        {name:'F', value:0, key:6},
        {name:'T', value:0, key:7},
        {name:'J', value:0, key:8},
        {name:'P', value:0, key:9},
    ]


    for(let i=0; i<selectButton.length;i++){
        //선택된 버튼 정보를 target 에 담음
        var target = qnaList[i].a[selectButton[i]];
        console.log(target.type);
        for(let j=0;j<pointArray.length;j++){
            if(target.type==pointArray[j].name){
                pointArray[j].value+=1;
                console.log(pointArray[j].value);
            }
        }
    }

    var mbti="";

    for(let i=0;i<pointArray.length;i+=2){
        if(pointArray[i].value>=pointArray[i+1].value){
            mbti+=pointArray[i].name;
            console.log(mbti);
        }
        else{
            mbti+=pointArray[i+1].name;
            console.log(mbti);
        }
    }
    console.log(mbti);
    return mbti;
}

function setResult(){
    let last_mbti = calResult(); 
    console.log(last_mbti);

    let sex = last_mbti.substring(0,1);
    let firstMbti =last_mbti.substring(1,2);
    let secondMbti = last_mbti.substring(2,5);

    let resultMbti ="";
    resultMbti+=firstMbti;
    resultMbti+= secondMbti.toLocaleLowerCase();
    console.log(resultMbti);

    if(sex=="M")
        resultMbti+="_boy";
    else
        resultMbti+="_girl";

    showResult(resultMbti);

}

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

        console.log(selectButton);
        
}


function addAnswerButton(answerText, qIndex, index){
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
            selectButton[qIndex] = index
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
        addAnswerButton(qnaList[qIndex].a[i].answer,qIndex,i);
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