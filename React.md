# 오랫동안 배우고 성장해 나가는 개발자 되기

1. 호기심을 가지고 흥미롭게
2. 문제 해결능력 연습이 중요하다.

# 리액트를 배워야 하는 이유

1. 페이스북에서 만든 자바스크립트 라이브러리 입니다.
2. user interfaces를 만들 수 있는 UI라이브러리 입니다.
3. MV(React)C
4. Framework vs Libraries
   - 이미 완성된 기능으로 구성된 기능제공 vs 내가 원하는 기능을 조합

# React = components

1. 리액트는 컴포넌트가 모여서 만들어진 user interface이다.
2. 서로다른 컴포넌트를 조합해서 만들어 낸다.
3. 컴포넌트도 DOM트리 처럼 트리가 만들어져 있다.
   - cohesive building block
4. 부모에서 자식으로 -> 렌더함수를 다시 호출하기 때문에 다시 호출된다.
   - 가상 돔트리가 존재한다.(메모리에 존재)
   - Virtual DOM Tree + previos Tre => DOM tree
5. 데이터가 변경될 때 마다 re-render the whole app on every update

# React Tools

1. nodejs
   - javascript 실행기
   - Javascript everywhere
   - server-side redering
   - command line tools
   - npm
2. npm
   - Package Manager
   - Publish and share coure code of Node.js packages simplyfy installation, updating, and uninstallation of packages.
   - package.json 버전의 정도가 들어 있습니다.
3. yarn
   - facebook에서 만든 package's manager
4. create react app
   - 페이스북에서 만든 리액트 툴!
   ```bash
   npx create-react-app
   npm start
   ```
5. .gitigore
   - 깃 버전관리 대상에 포함되지 않기를 원하는 파일의 이름을 적어준다.
6. node_modules
   - 프로젝트에서 사용중인 패키지

# Hide React Tools

1. create-react-app
   - 페이스북에서 만든 리액트 툴
2. npm run eject
   - 숨겨져 있는 설정파일을 확인할 수 있다.
3. BABEL
   - javascript transcompiler
   - convert ECAMScript 2015+ -> oreder version
   - 최신의 코드를 오래된 자바스크립트로 만들어서 지원하는 브라우져 영역을 설정할 수 있디ㅏ.
4. Webpck
   - Bundling the code, Javascript Module bundler
   - 변수나 이름을 다른 사람들이 못알아 보게 바꾸거나 javascript를 조금더 쉽게 serving 하기 위해서
5. ESLint
   - Checking your code
6. Jest
   - Unit Testing framework
7. PostCss
   - expandable CSS libraries
     - tool for transforming CSS with Javascript
