### 프로젝트 목표

멸종 위기 동물에 대한 관심을 높이고 동물 보호의 중요성을 알리기 위해 멸종 위기 동물들을 NFT로 제작하여 거래할 수 있는 웹 애플리케이션을 개발

### 진행 내용 및 결과

- 5종의 멸종 위기 동물(수리부엉이, 치타, 반달가슴곰, 하프물범, 시이우섬안경원숭이)을 선정하여 NFT 이미지 제작

![수리부엉이](https://github.com/user-attachments/assets/24631913-6393-4753-8029-4a3d79dea7e4)
![치타](https://github.com/user-attachments/assets/c02d9b32-29de-4a50-a9d7-8cd8d5cfacd7)
![반달곰](https://github.com/user-attachments/assets/aa5380db-c91d-4e90-aad4-afaac38463e7)
![물범](https://github.com/user-attachments/assets/7beb841e-8871-4860-be9e-9c490193389c)
![안경원숭이](https://github.com/user-attachments/assets/78b05b0f-0fb4-41dd-a9d6-9bf6d96965d0)



- 악세서리와 배경을 조합하여 총 100개의 NFT 이미지 생성

![image](https://github.com/user-attachments/assets/7c4b0d99-f27a-47d2-b7ec-aa6634a00854)
![image](https://github.com/user-attachments/assets/3a51abbd-6fd0-4e7a-8b37-c4141148e85f)
![image](https://github.com/user-attachments/assets/dfa78d1b-d969-4e53-b1c7-b228e43f0531)


- Klaytn 블록체인 기반의 스마트 컨트랙트를 작성하여 NFT 민팅, 판매, 구매 기능 구현

<p float="left">
  <img src="https://github.com/user-attachments/assets/24ba86d9-b828-4f60-af43-f6e2f7810640" width="250" alt="민팅" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/2743cb06-9f23-44ee-a973-3fa752a9addd" width="250" alt="판매" style="margin-right: 10px;" /> 
  <img src="https://github.com/user-attachments/assets/1707fc76-64b5-4204-b132-787138c59b3c" width="250" alt="구매" />
</p>


![서비스 시나리오](https://github.com/user-attachments/assets/43148289-8f53-471b-b42c-31a70afcbc73)


다음과 같은 과정을 걸쳐서 NFT 코인이 이동하게 된다.

- React를 사용하여 프론트엔드 개발 (메인 페이지, 동물 소개, NFT 탐색, 구매, 프로필 등)
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/18090d83-ad5c-49e6-af54-cf482ba33b47" width="350"/>
      <br>
      메인 페이지
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/e2851bbf-f707-4af7-bd3a-80100d092998" width="350"/>
      <br>
      상세 페이지
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/6e655714-5adc-44cf-9cf2-b68a23ff36b1" width="350"/>
      <br>
      랭킹 페이지
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/69588a96-e701-4620-9325-e91f3956e860" width="350"/>
      <br>
      상세 페이지
    </td>
  </tr>
</table>



### 시스템 구성도

![image](https://github.com/user-attachments/assets/5eb2231f-ea9b-4a20-8dcc-4dfaac7d27f8)


1. 사용자는 웹 브라우저를 통해 애플리케이션에 접근합니다.
2. React로 만들어진 프론트엔드가 사용자 인터페이스를 제공합니다.
3. Caver-js 라이브러리를 통해 프론트엔드와 Klaytn 블록체인이 연결됩니다.
4. Klaytn Baobab 테스트넷에 배포된 스마트 컨트랙트가 NFT 관련 로직을 처리합니다.
5. 스마트 컨트랙트는 Solidity로 작성되어 있습니다.
6. NFT 이미지들은 IPFS(InterPlanetary File System)에 저장되어 있습니다.

이 구조에서 모든 NFT 관련 트랜잭션(민팅, 판매, 구매 등)은 블록체인 상에서 처리되며, 프론트엔드는 이러한 트랜잭션을 시작하고 결과를 표시하는 역할을 합니다.

### 프로젝트 진행 방식

- Agile 소프트웨어 개발 방법론을 적용하여 팀원들과 협업

### 프로젝트 소감 및 시행착오

- 프로젝트 시작 시 팀원들의 기술 스택보다는 주제를 먼저 선정하여 진행함으로써 React와 Solidity 사용에 어려움을 겪음
- 동적 페이지 구현, 스마트 컨트랙트 작성, NFT 민팅 및 거래 기능 구현 등에서 고충이 있었으나, 팀원들과의 협업을 통해 문제를 해결해 나감
- Agile 방식의 개발로 각 문제와 고충들을 효과적으로 해결할 수 있었음
- 프로젝트를 통해 블록체인, 스마트 컨트랙트, 웹 개발 등 다양한 기술을 학습하고 적용하는 경험을 얻음

### 향후 개선 방향

- 프론트엔드와 백엔드 서버를 분리하여 보안성과 안정성 향상
- 백엔드 서버에서 스마트 컨트랙트와 연동하여 데이터를 처리하고, 처리된 데이터를 프론트엔드에 전달하는 구조로 개선 계획

### 성과
캡스톤 디자인 졸업 프로젝트에서 **A+** 받았습니다.
