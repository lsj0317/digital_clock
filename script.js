let handleId = 0; // 
const h1 = document.getElementById("time")
const go = document.getElementById("go")
const stop = document.getElementById("stop")

function getTime() { // <-- 시간을 호출하는 메서드
    const date = new Date();
    const hour = date.getHours(); // 시간을 가져오는 변수
    const minutes = date.getMinutes(); // 분을 가져오는 변수
    const seconds = date.getSeconds(); // 초를 가져오는 변수
    const time = `${hour}:${minutes}:${seconds}`; // 시:분:초 를 문자열로 가져온다
    h1.textContent = time; // 변수 time에 있는 시간을 h1태그의 textcontent로 변환한다
}

go.onclick = function() {
    if(handleId == 0) {
        handleId = setInterval(getTime, 1000)
    }
}

stop.onclick = function() {
    clearInterval(handleId) // 0이 아닌 핸들 아이디를 제거한다
    handleId = 0;
}