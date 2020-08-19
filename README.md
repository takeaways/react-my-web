# react-my-web 프론트 개발 즐기기!!

### create-react-app

1. 리액트 프로 젝트 생성을 위해서 다음 명령어를 실행 했습니다.
   - 타입스크립트를 같이 사용합니다.
   ```bash
   //타입 스크립트 셋팅을 같이 진행 하기 위해서 다음을 실행 합니다.
   $npx create-react-app --template typescript
   ```

### styled-components

1. css-in-js를 위한 컴포넌트 구현을 위하여 스타일 컴포넌트를 사용합니다.
   - [styled-components](https://styled-components.com/, 'styled-components link')
   ```bash
   $npm install styled-components
   $npm install @types/styled-components
   ```

### GraphQL

1. graphql을 사용해 봅니다.

   - [graphql](https://www.apollographql.com/docs/react/get-started, 'graphql link')

2. REST API는 다른 방식으로 사용합니다.
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
