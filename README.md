# Introduction

새로운 프로젝트를 시작할때마다 드는 생각.

<br/>

> 아 .. 설정
> <br/>

**"시작이 반이다"** 라는 말처럼 시작을 한다는건 아주 좋은 일 이다.
하지만 시작할때에는 엄청난 고민과 고난을 겪는다.

프로젝트를 예로들면...<br/>
매번 이전프로젝트와 같은 설정 및 컴포넌트 작업, 반복작업을 하고있는 나를 보니 안쓰러웠다.<br/>
나의 깃헙 저장소를 보면 알겠지만 전부 기본 템플릿을 만들다가 포기한.. 하나로 정형화 된것이 없는 그런 저장소들이 되어버렸다.

"시작이 반 이다"는 말처럼 기본적인것이라도! <br/>

하나로 정형화된 셋팅을 하기 위해 이 템플릿을 작성합니다. (저장소 다 지워야겠다..)

<br/>

<br/>

> 나의 정신건강을 위해  cheers~

<br/>

<br/>

------



### 라이브러리

이 템플릿에 사용된 라이브러리 입니다.

- **[axios](https://github.com/axios/axios):** API 호출을 위한 라이브러리

- **[immutable](https://facebook.github.io/immutable-js/):** 자바스크립트상에서 불변성의 데이터를 다루기 위해 사용합니다.

- **[react-loadable](https://github.com/jamiebuilds/react-loadable):** 동적으로 컴포넌트를 가져와 구성 요소를 로드하기위한 HOC 요소입니다.

- **[react-redux](https://github.com/reactjs/react-redux):** 상태관리를 위한 라이브러리입니다.

- **[react-router](https://github.com/ReactTraining/react-router):** 페이지 라우팅을 하기위해 필요합니다.

- **react-router-dom**

- **react-router-redux**

- **[react-spring](https://github.com/drcmda/react-spring):** 애니메이션을 위한 라이브러리입니다. (사용방법을 익히는 중입니다.)

- **[recompose](https://github.com/acdlite/recompose):** HOC를 만들어주는 라이브러리입니다.

- **[redux](https://github.com/reactjs/redux):** 상태관리를 위한 라이브러리입니다.

- **[redux-actions](https://github.com/redux-utilities/redux-actions):** 액션 생성라이브러리입니다.

- **[redux-form](https://redux-form.com/7.3.0/):** 폼 컨트롤 

- **[redux-saga](https://github.com/redux-saga/redux-saga):** 비동기식의 작업을 쉽게 **관리**하기 위한 라이브러리

- **[redux-thunk](https://github.com/gaearon/redux-thunk):**  비동기 작업을 **처리** 할 때 사용하기 위한 라이브러리

- **[reselect](https://github.com/reduxjs/reselect):** 리덕스가 가능한 최소상태를 저장할수 있게 하는 라이브러리 (성능을 위해)

- **[styled-components](https://github.com/styled-components/styled-components):** 컴포넌트식으로 스타일을 관리하는 라이브러리

- **[Draft.js](https://draftjs.org/):**  텍스트 에디터 (사용방법 익히는중 미적용)

  ​

------



### 폴더 구조

아래와 같은 폴더구조를 가지고 있다. (프로젝트의 성향에따라 구조가 달라질수 있다.)

```
+-- _src
|   +-- _helpers 
|		-- 각종 헬퍼 함수들을 위치한다.
|		-- (아직 정체성을 못찾은 폴더이다. 현재는 스토어와 벨리데이션 체크 js만 있는 상태)
|		-- 윤곽이 잡히면 다시 정리할 폴더
|   +-- common
|		+-- 공통파일.
|		+-- 최소 5군데 이상 사용되는 컴포넌트들이 위치할 폴더
|   +-- (...page명 폴더)
|		+-- components: 페이지별로 폴더를 만들어 페이지에서 필요한 컴포넌트 배치 
|   +-- style
|		+--components =  
|		+--config = 스타일 설정값들이 있다. (간격, 색상, 폰트) 폴더명을 global로 바꿀예정

```



------



### 컴포넌트's

- 버튼
- 타이포그래피
- 탭
- 리스트


- 인풋's
  - 텍스트
  - 라디오
  - 체크박스


- 테이블

+계속해서 추가하는중ing





------



### TODO / Doing

- [ ] 프로젝트 특성상 매번 바뀔수 있는 디자인에 대비하여 global style config 작성
- [ ] 스타일 컴포넌트 작성
- [ ] 컴포넌트 사용방법 작성
- [ ] 폴더구조 정의
- [ ] 라우팅
- [ ] on and on.. (redux, saga, 등등 기본 액션 생성)

![yarn]()
