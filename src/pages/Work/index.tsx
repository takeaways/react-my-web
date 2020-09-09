import React from 'react'
import styled from 'styled-components'
import './index.css'
export default function Work(props: any) {
  return (
    <Container>
      <div className="flex-container">
        <div className="flex-item">
          1 Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet
          consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor
          sit amet consectetur,
        </div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aut
      magnam sunt fugit nulla ut? Explicabo reprehenderit eaque dolores, beatae,
      eius magni rem voluptatem, architecto ad earum quos tempora blanditiis?
    </Container>
  )
}

const Container = styled.section`
  height: 100%;
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    /* flex-direction: column; */
    /* flex-wrap: nowrap; */
  }
`
