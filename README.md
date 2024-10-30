# 🕊 입문주차 개인과제 Olympic Medal Tracker 만들기 
![스크린샷 2024-10-30 140746](https://github.com/user-attachments/assets/f3c4ad97-82b7-42e0-8ba5-926c41fb8618)

<br>

- 🔭[배포용 링크](https://medal-tracker-tau.vercel.app/)

- 🔭[블로그 포스팅1](https://velog.io/@hhyun19/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C-%EC%98%AC%EB%A6%BC%ED%94%BD-%EB%A9%94%EB%8B%AC-%ED%8A%B8%EB%9E%99%EC%BB%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0)

- 🔭[블로그 포스팅2](https://velog.io/@hhyun19/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C-%EC%98%AC%EB%A6%BC%ED%94%BD-%EB%A9%94%EB%8B%AC-%ED%8A%B8%EB%9E%99%EC%BB%A4-%EB%A7%8C%EB%93%A4%EA%B8%B02)

- 🔭[블로그 포스팅3 (예정)]
<br>

## 💻기술 스택

<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/git-orange?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/react-0769AD?style=for-the-badge&logo=react&logoColor=white">  
</div>
<br>

## ✔과제 로드맵
![스크린샷 2024-10-30 135307](https://github.com/user-attachments/assets/3def240d-8d4e-46d0-bb3c-23cafe16ecba)

## ✔필수 요구사항
![스크린샷 2024-10-30 135217](https://github.com/user-attachments/assets/d9fa1ee4-0624-4564-ac3f-42efa04b83ef)
<br>

## 👍선택 요구사항
![스크린샷 2024-10-30 135238](https://github.com/user-attachments/assets/784d1c26-fe33-472e-be26-67208a7770c6)

---

  ## 🎥기능 구현
  ### - CRUD
  
  ![데이터 추가](https://github.com/user-attachments/assets/ecbccf70-c3c7-4605-9388-b6739cf0c6f1)<br/>
  
  #### 데이터 추가
  
  ![데이터 수정](https://github.com/user-attachments/assets/c6663998-e349-4b81-8a18-87f09eb9116d)<br/>
  
  #### 데이터 수정
  
  ![데이터 삭제](https://github.com/user-attachments/assets/ebef4c0e-5a79-4097-a6f4-80b2848412cc)<br/>
  
  #### 데이터 삭제
  
  ### - 중복국가 및 존재하지 않는 국가알림
  ### - 메달순으로 정렬
  ### - 로컬스토리지 활용

  ## 자료구조
  ![스크린샷 2024-10-30 141140](https://github.com/user-attachments/assets/b084710e-da53-4d05-93d7-da182c2931e4)  
  
  ### - App.jsx : 메인로직이 담겨있는곳으로 Header, Editor, MedalList를 가지고있으며, 로컬스토리지를 담는 로직, CRUD의 기능들이 담겨있다.
  ### - Header.jsx : 단순하게 타이틀을 담고있다.
  ### - Editor.jsx : EditorItem을 담고있으며, 추가, 수정 함수를 App.jsx로부터 받아와서 새로운 formData를 전달한다.
  ### - EditorItem.jsx : Editor에 담겨질 컴포넌트로서 상황에 맞는 로직을 구현한다. ex)국가명, input타입 등.
  ### - MedalList.jsx : App.jsx로부터 medalData와 삭제함수를 받아와서 국가와 메달의 정보를 렌더링해주고, 삭제함수를 작동시킨다.
  ### - 각 CSS : 충분히 유추가능했겠지만 각 컴포넌트별로 CSS를 분리해주었다.



