# TIL
Today I Learned (Book: 모던 자바스크립트 핵심 가이드(Complete Guide to Modern JavaScript))

<h3>< chapter00 자바스크립트 기초 ></h3>  






<h3>< chapter01 var, let, const ></h3>


내용




<h3>< chapter02 화살표 함수 ></h3>


* error= Uncaught TypeError : box1.addEventListener is not a function<br>
  원인= 코드 스펠 미스(addEventListner -> addEventListener)<br>
  해결 방법= code spell checker 다운로드함.<br>


<h3>< chapter03 ~  ></h3>


<h3>< chapter04 템플릿 리터럴 ></h3>
map(function()) : 새로운 함수를 리턴<br>
ex: let a = [1, 2, 3]; <br>
a.map(x => x*x) // [1, 4, 9]<br>

백틱 사용법 추가 <br><br>

<h3>< chapter05 문자열 메서드 ></h3>
  <li> slice() 메서드 <br>
    ex) const str = "pizza, orange, cereals"; <br>
    str.slice(0,5); // 0,5는 인덱스 번호(숫자 사이의 순서) <br>
    출력 결과 : pizza<br>
    &nbsp; p&nbsp;&nbsp; i&nbsp;&nbsp; z&nbsp;&nbsp; z &nbsp;&nbsp;a <br>
    0&nbsp;&nbsp; 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3 &nbsp;&nbsp;4&nbsp;&nbsp; 5 <br><br><br>

<h3>< chapter06 디스트럭처링 ></h3>
디스트럭처링 : 배열의 값, 객체의 속성을 풀어서 별개의 변수로 사용 가능<br>
<li>기본값 설정 <br>
const person = {<br>
&nbsp;links: {<br>
&nbsp;&nbsp;social: {<br>
&nbsp;&nbsp;&nbsp;facebook: "https://www.facebook.com/alberto.montalesi"},<br>
&nbsp;},<br>
&nbsp;};<br>
// 변수를 fb로 명명하고 기본값을 설정<br>
const {facebook: fb = "https://www.facebook.com"} = persons.links.social; </li>
<li> 배열 디스트럭처링 : {} 대신에 [] 사용 <br>
const person = ["Alberto", "Montalesi", 25];<br>
const [name, surname, age] = person;</li><br><br><br>

<h3>< chapter07 루프 ></h3>
<li>for of와 for in의 차이<br>
let list = [4, 5, 6];<br>
for in : 키의 목록 반환 (0, 1, 2)<br>
for of : 값을 반환(4, 5, 6)</li>
