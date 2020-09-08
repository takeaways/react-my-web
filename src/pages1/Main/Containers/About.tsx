import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/common/Heading'

export default function About() {
  return (
    <Container>
      <Heading heading="About Me" />

      <Content>
        사용자가 서비스를 적극적으로 이용할 수 있는 서비스를 만들기 위해
        고민하는 개발자입니다.
        <br />
        사용자 편의성을 높이는 UI/UX와 사용자가 입력한 데이터를 효과적으로
        수집할 수 있는 화면을 좋은 코드로 작성하기 위해 매일 2시간 이상 개발
        공부를 하고 있습니다.
      </Content>
      <div className="about__majors">
        <Major>
          <div className="major__icon">
            <img src="/images/ts.png" alt="typescript" />
          </div>
          <h2 className="major__title">Typescript</h2>
          <div className="major__description">Using Js with Typescript.</div>
        </Major>
        <Major>
          <div className="major__icon">
            <img src="/images/react.png" alt="typescript" />
          </div>
          <h2 className="major__title">Front-end</h2>
          <div className="major__description">
            HTML5, CSS3, Javascript, React
          </div>
        </Major>
        <Major>
          <div className="major__icon">
            <img src="/images/node.png" alt="typescript" />
          </div>
          <h2 className="major__title">Back-end</h2>
          <div className="major__description">nodejs, go, Java, Python</div>
        </Major>
      </div>
      <div className="about__jobs">
        <div className="job">
          <img
            src="/images/jobs/happytalk.png"
            alt="happytalk"
            className="job__logo"
          />
          <div className="job__description">
            <p className="job__name">Happytalk</p>
            <p className="job__period">2019.11 ~ 현재</p>
          </div>
        </div>
        <div className="job">
          <img
            src="/images/jobs/npay.png"
            alt="happytalk"
            className="job__logo"
          />
          <div className="job__description">
            <p className="job__name">NIT</p>
            <p className="job__period">2018.12 ~ 2019.11</p>
          </div>
        </div>
        <div className="job">
          <img
            src="/images/jobs/spring.png"
            alt="happytalk"
            className="job__logo"
          />
          <div className="job__description">
            <p className="job__name">Spring Works</p>
            <p className="job__period">2018.06 ~ 2018.12</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.article`
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 1rem;
`
const Content = styled.p`
  padding: 1rem;
  border-radius: 15px;
  background-color: var(--color-light-purple);
  margin-bottom: 5px;
`
const Major = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  background-color: var(--color-light-purple);

  .major__title {
    font-size: 2rem;
  }
  .major__description {
    font-size: 1.2rem;
  }
  .major__icon {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid var(--color-yellow);
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      display: block;
      width: 50%;
      height: 50%;
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
    }

    & > img:hover {
      transform: rotate(35deg);
    }
  }
`
