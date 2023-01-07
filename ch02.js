   // 화살표 함수를 사용할 때 this 키워드는 상위 스코프에서 상속
    // querySelector : 요소를 css방식으로 검색
    //const box1 = document.getElementById("box");
    const box1 = document.querySelector(".box p");
    box1.addEventListener("click", function() {
        this.classList.toggle("opening");
        setTimeout(() => {
            this.classList.toggle("opening");
        }, 500);
    });