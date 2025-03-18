### 프로젝트 목표

멸종 위기 동물에 대한 관심을 높이고 동물 보호의 중요성을 알리기 위해 멸종 위기 동물들을 NFT로 제작하여 거래할 수 있는 웹 애플리케이션을 개발

### 진행 내용 및 결과

- 5종의 멸종 위기 동물(수리부엉이, 치타, 반달가슴곰, 하프물범, 시이우섬안경원숭이)을 선정하여 NFT 이미지 제작

![수리부엉이 ](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/94163259-e9af-42ae-bd39-656778a94709/Untitled.png)

수리부엉이 

![치타](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/217d689f-2436-476e-a565-509ebd955c18/Untitled.png)

치타

![반달가슴곰 ](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/23058912-faef-4708-88ad-a84a58a55b7f/Untitled.png)

반달가슴곰 

![하프물범](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/7ef23a72-0100-4190-8cfe-a6bd7c19ffbd/Untitled.png)

하프물범

![시이우섬안경원숭이 ](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/eedcb0af-be59-44b8-9c15-e12fea2499ea/Untitled.png)

시이우섬안경원숭이 

- 악세서리와 배경을 조합하여 총 100개의 NFT 이미지 생성

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/c97996e5-3712-4332-b830-a263848f56f2/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/c5a416b3-3b0e-48a0-8b12-d8ff7394c350/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/92cfc7c8-a121-4ec6-afb7-d92833c11aa0/Untitled.png)

- Klaytn 블록체인 기반의 스마트 컨트랙트를 작성하여 NFT 민팅, 판매, 구매 기능 구현

![민팅](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/cf582240-1cf3-4d6b-a8fb-68b9e25bf2b4/Untitled.png)

민팅

![판매](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/fc04820c-fe0f-440d-80de-44113f7d6e69/Untitled.png)

판매

![구매](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/5a419cdc-fe00-42e0-b43d-5b9a21cb1ad5/Untitled.png)

구매

![다음과 같은 과정을 걸쳐서 NFT 코인이 이동하게 된다.](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/40be3b0b-8345-45b2-9f02-77463edfce04/Untitled.png)

다음과 같은 과정을 걸쳐서 NFT 코인이 이동하게 된다.

- React를 사용하여 프론트엔드 개발 (메인 페이지, 동물 소개, NFT 탐색, 구매, 프로필 등)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/8353a48f-535f-432f-aaae-038440733d25/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/c8ce633c-1b2b-4b7b-aa83-4884c48f4242/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/6a8c918a-c7c1-4bb5-bae7-e3c54dfd93a8/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/8993362a-0a1c-46f2-99d5-66aba5e0cfdd/Untitled.png)

### 시스템 구성도

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/80bb8d41-f644-4e30-9e01-7545488d520d/d48de773-b45e-4c29-a4f4-da766418b50f/Untitled.png)

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

# 📝 Sorce

💻 **Github :** [https://github.com/chesthyeon/Text-Recognition-kiosk](https://github.com/chesthyeon/WildEarth_NFT)
