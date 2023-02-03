//페이스북 공유
function shareFacebook() {
    var sendUrl = ""; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: 'Disney 공주/왕자 테스트',    //카카오톡 전송 시 제목
            description: '#2023 #디즈니 #공주 #왕자 #오감자',   //카카오톡 전송 시 설명에 넣을 문구
            imageUrl: './image/disney.png',
            link: {
                mobileWebUrl: '',
                webUrl: '',
            },
        },
        buttons: [
            {
                title: '공주/왕자 만나러 가기', //카카오톡 전송 시 버튼에 넣을 문구
                link: {
                    mobileWebUrl: '',
                    webUrl: '',
                },
            },
        ],
    })
}

//클립보드에 복사
function clip() {

    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("클립보드에 복사되었습니다.")
}