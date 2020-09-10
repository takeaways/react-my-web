import React from 'react'
import styled from 'styled-components'

export default function Skills() {
  return (
    <Container>
      <h1>Skills</h1>
      <h2>Skills &amp; Attributes</h2>
      <p>
        배움을 즐기며, 사이드 프로젝트를 통하여 학습했던 것을 연습하고 익히고
        있습니다.
      </p>
      <div className="skillset">
        <div className="skillset__left">
          <h3 className="skillset__title">Skills</h3>
          <div className="skill">
            <div className="skill__description">
              <span>HTML</span>
              <span>85%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__value" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>CSS</span>
              <span>85%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__value" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>Javascript</span>
              <span>90%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__value" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>Typescript</span>
              <span>85%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__value" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="skillset__right">
          <div className="tools">
            <h3 className="skillset__title">Tools</h3>
            <ul className="tools__list">
              <li>
                <span>Visual Studio Code</span>
              </li>
              <li>
                <span>WebStorm</span>
              </li>
              <li>
                <span>Sourcetree</span>
              </li>
              <li>
                <span>Android Studio</span>
              </li>
            </ul>
          </div>
          <div className="etc">
            <h3 className="skillset__title">Etc</h3>
            <ul className="etc__list">
              <li>
                <span>Git</span>
              </li>
              <li>
                <span>Jira</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.article`
  /* height: 100%; */
  h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0;
  }

  h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
  }

  p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-red);
    margin: 4px 0;
  }
  .skillset {
    display: flex;
    flex-direction: column;
    background-color: var(--color-light-purple);
    margin: 20px 0;
  }

  @media (min-width: 480px) {
    .skillset {
      flex-direction: row;
    }
  }

  .skillset__title {
    font-size: 1.3rem;
  }
  .skillset__title::before {
    content: '';
  }
  .skillset__left {
    flex-basis: 60%;
    padding: 20px 40px;

    .skill__description {
      display: flex;
      justify-content: space-between;
    }

    .skill {
      margin-bottom: 32px;
    }
    .skill__bar {
      width: 100%;
      height: 3px;
      background-color: var(--color-white);
    }
    .skill__value {
      height: 3px;
      background-color: var(--color-purple);
    }
  }
  .skillset__right {
    flex-basis: 60%;
    background-color: var(--color-red);
    .tools {
      padding: 20px 40px;
      background-color: var(--color-purple);
      .tools__list {
        margin: 1rem 0;
        & > li {
          margin-bottom: 1rem;
        }
      }
    }
    .etc {
      padding: 20px 40px;
      background-color: var(--color-yellow);
      .etc__list {
        margin: 1rem 0;
        & > li {
          margin-bottom: 1rem;
        }
      }
    }
  }
`
