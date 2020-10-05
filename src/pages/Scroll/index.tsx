import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

function Scroll() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let step
      let li
      let boundRect
      const divs = wrapRef.current?.querySelectorAll('.wrapper > div')
      const lis = wrapRef.current?.querySelectorAll('.list > li')
      for (let i = 0; i < divs?.length!; i++) {
        step = divs![i]
        li = lis![i]
        boundRect = step.getBoundingClientRect()

        // console.log(window.innerHeight)
        console.log(boundRect)

        if (boundRect.top > -10 && boundRect.top < window.innerHeight * 0.9) {
          li.classList.add('active')
        } else {
          li.classList.remove('active')
        }
      }

      console.log(divs)
    })
  }, [])

  return (
    <Container ref={wrapRef} className={'wrapper'}>
      <div className={'first'} id={'first'}>
        1
      </div>
      <ul className={'list'}>
        <li className={'active'} data-id={1}>
          first
        </li>
        <li data-id={2}>second</li>
        <li data-id={3}>third</li>
      </ul>
      <div className={'second'} id={'second'}>
        2
      </div>
      <div className={'third'} id={'third'}>
        3
      </div>
    </Container>
  )
}

const Container = styled.div`
  .first {
    height: 450px;
    background-color: tomato;
  }
  .list {
    position: sticky;
    top: 0;

    /* opacity: 0.4; */

    height: 54px;
    background-color: saddlebrown;
    display: flex;

    align-items: center;

    li {
      height: 100%;
      line-height: 54px;
      text-align: center;
      flex: 1;
      cursor: pointer;
    }

    li.active {
      background-color: red;
    }
  }
  .second {
    height: 700px;
    background-color: yellow;
  }
  .third {
    height: 550px;
    background-color: goldenrod;
  }
`

export default Scroll
