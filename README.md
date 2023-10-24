# TailWindCSS

React + TailWindCSS 연습

## 설치

```
npm install -D tailwindcss postcss autoprefixer
```

- tailwind.config.js 파일 생성
  - -p: postcss.config.js 생성

```
npx tailwindcss init -p
```

- vscode > extensions > Tailwind CSS IntelliSense 설치

## postCSS

- javascript로 CSS를 변환하는 도구
- 사용 이점

  1. 코드 가독성 향상 : Can I Use(https://caniuse.com/) 사이트의 값을 사용하여 CSS 규칙에 공급업체 접두사를 추가한다. Autoprefixer(https://www.npmjs.com/package/autoprefixer)은 현재 브라우저 인기도 및 속성 지원을 기반으로 데이터를 사용하여 접두사를 적용

     - _autoprefixer 설치한 이유가 이러한 걸 이용하기 위헤 postcss 설치 시 같이 설치한 것임_

     * 변환 전

     ```css
     :fullscreen {
     }
     ```

     - 변환 후

     ```css
     :-webkit-full-screen {
     }
     :-ms-fullscreen {
     }
     :fullscreen {
     }
     ```

  2. 최신 CSS를 대부분의 브라우저가 이해할 수 있는 것으로 변환하고, cssdb(https://preset-env.cssdb.org/)를 사용하여 대상 브라우저 또는 런타임 환경에 따라 필요한 폴리필을 결정할 수 있다.

     - 변환 전
       - oklch() 함수는 실험적인 함수임

     ```css
     body {
       color: oklch(61% 0.2 29);
     }
     ```

     - 변환 후

     ```css
     body {
       color: rgb(225, 65, 52);
     }
     ```

  3. CSS 모듈(https://github.com/css-modules/css-modules)을 사용하면 이름이 너무 일반적이지 않을까 걱정할 필요가 없다. 즉, 중복 걱정이 없다.

     - 자동으로 unique한 css이름으로 변환을 해준다.
     - 예를 들어 a.css 파일과 b.css파일이 있는 데 아래 코드처럼 똑같이 .name로 사용해도 자동으로 unique하게 변환해준다

       - 변환 전

       ```css
       .name {
         color: gray;
       }
       ```

       - 변환 후

       ```css
       .Logo__name__SVK0g {
         color: gray;
       }
       ```

  4. 최신 CSS 린터인 stylelint(https://stylelint.io/)를 사용하여 일관된 규칙을 적용하고 스타일시트의 오류를 방지한다. SCSS와 같은 CSS와 유사한 구문뿐만 아니라 최신 CSS 구문을 지원한다.
     - 아래 코드처럼 #d3와 같이 올바르지 않은 값을 입력 시
     ```css
     a {
       color: #d3;
     }
     ```
     - 아래처럼 console ouput으로 수정하라고 알려줌
     ```
      app.css
      2:10 invalid hex color
     ```

* **즉, postCSS는 툴인데, 이런 툴 안에서 위 4가지에 적용된 플러그인들뿐만 아니라 많은 플러그인들을 사용하여 css를 변환을 시켜주는 것이다.**
