# 나만의 사전 만들기

## 📌 프로젝트 소개

나만의 사전을 등록할 수 있는 웹페이지 입니다.

### 기술스택 소개
<p align="center">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/js-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
<hr>

### 주요 기능 

1. 파이어스토어와 리덕스를 연동하여 단어 데이터 관리 
2. 버튼을 이용한 페이지 이동 
3. 단어의 수정 및 삭제 가능 

<hr>

### 프로젝트 중 어려웠던 기능

객체형태의 데이터 전달 <br>
문제 <br>
파이어스토어에서 데이터를 객체형태로 받아온 데이터중 내가 선택한 데이터만 상세페이지에 state 형태로 전달하는 부분이 잘 되지않았음. 

해결 <br>
\<Link> 태그를 이용하여 'to' 프로퍼티의 객체 중 state인자 에 저장하여 페이지 이동 작업을 진행하였음.
<br>
<br>
reducer 동작
문제 
middleware에서 삭제 진행 후 삭제한 데이터의 반환이 이루어지지 않고 텅비어있는 state만 가져옴 

해결 
middleware에서 삭제 진행 후 dispatch를 통해서 삭제한 데이터의 인덱스를 전달하여 현재 state안에 있는 데이터를 삭제하지 않고 비어 있는 state를 반환하여 
생기는 문제로 확인하여 reducer 함수내에 추가하여 해결하였음.

