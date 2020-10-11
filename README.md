# react-my-web 프론트 개발 즐기기

### create-react-app1

1. 리액트 프로 젝트 생성을 위해서 다음 명령어를 실행 했습니다.
   - 타입스크립트를 같이 사용합니다.
   ```bash
   //타입 스크립트 셋팅을 같이 진행 하기 위해서 다음을 실행 합니다.
   $npx create-react-app --template typescript
   ```
2. 왜 유용한가? 1

   - create-react-app 패키지로 만든 프로젝트는 복잡한 애플리케이션 개밸을 위해 설계됐으며, 개발, 테스트, 배포를 위한 일체의 수단을 제공한다.

3. 리액트 프로젝트 구조
   - node_modules
     - 애플리케이션과 개발 도구가 필요로 하는 패키지들의 위치하는 폴더
   - public
     - 정적콘텐츠가 위치하는 폴더로 HTTP요청에 응답할 때 사용되는 index.html파일을 포함한다.
   - src
     - 애플리케이션 코드와 콘텐츠가 위치하는 폴더.
   - .gitignore
     - 깃(git)이 버전관리에서 제외 시킬 파일과 폴더를 기술하는 파일이다.
   - package.json
     - 프로젝트를 위한 의존성의 젠체 목록을 포함하는 파일.
     - ~: 마이너 버전이 다르면 수용하지 않는다.
     - ^: 메이저 버전이 다르면 수용하지 않는다.
   - package-lock.json
     - 프로젝트를 위한 의존성의 전체 목록을 포함하는 파일.
   - REACDME.md
     - 개발 도구에 관한 정보를 포함하는 파일
4. babel
   - 1. JSX콘텐프를 변환하는 작업
   - 2. 구식 브라우저에서도 최신의 자바스크립트 기능이 실행될 수 있게 자바스크립터 코드를 변환하는 작업
5. JSX

   - 1. HTML과 Javascript를 혼합할 수 있게 하는, 자바스크립트의 상위 집합이다.

     ```jsx
     import React from 'react'
     export default function App() {
       return <h1 className="main">hello world</h1>
     }

     //
     import React from 'react'
     export default function App() {
       return React.createElement(
         'h1',
         {
           className: 'main',
         },
         'hello world',
       )
     }
     ```

6. ESLint
   - [ESLint]('https://eslint.org/docs/rule')

### styled-components

1. css-in-js를 위한 컴포넌트 구현을 위하여 스타일 컴포넌트를 사용합니다.
   - [styled-components](https://styled-components.com/, 'styled-components link')
     ```bash
     $npm install styled-components
     $npm install @types/styled-components
     ```

### GraphQL

1. graphql을 사용해 봅니다.
2. movieql-server start at port 4000

   - [graphql](https://www.apollographql.com/docs/react/get-started, 'graphql link')

3. REST API는 다른 방식으로 사용합니다.
   - query를 작성한다.
   ```graphql
   {movies:{
      id
      description
      title
   }}
   ```
   - POST : request를 보낸다.
   - 클라이언트를 만든다. with "apollo-boost"

### 성능최적화

1. 사용자가 오래 머무르면, 서비스 가치가 올라간다.
2. 프론트엔트 개발자로서, "경쟁력"을 각추기 위해
   - 브라우저의 렌더링 원리
   - Performance 패널의 이용한 분석
   - Lighthouse 패널을 이용한 분석
   - Network 패널을 이용한 분석
   - webpack-bundle-analyzer를 이용한 분석
   - 텍스트 압축
   - 이미지 사이즈 최적화
   - 적절한 사이즈로 변환
   - 이미지 CDN을 통한 최적화
   - 리소스 캐싱
   - 이미지 preload
   - 컴포넌트 preload
   - component Lazy Load
   - React code Splitting
   - Image Lazy Load
   - 병목코드 제거
   - repaint, reflow 줄이기
3. 로딩 성능 & 렌더링 성능 (결국에 이 둘을 빠르게 하는 작업을 하는 것이다.)
   - 어떻게 빠르게 로드하고 빠르게 렌더링 할 것인가
   1. 로딩 성능 최적화 (다운로드를 최적화 하는 내용)
      - 이미지 사이즈 최적화
      - Code Split
      - 텍스트 압축
   2. 렌더링 성능 최적화 (서비스를 느리게 동작하게 되는 js코드를 찾아서 최적화 하는 방법)
      - Bottleneck 코드 최적화

### 파이어베이스 1
