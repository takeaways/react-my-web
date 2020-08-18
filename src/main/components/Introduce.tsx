import React from "react";
import styled from "styled-components";

const Introduce:React.FC = ()=>{
  return (
    <Container>
      <MyImage src={"images/my.png"} alt="내 사진"/>
      <HomeTitle>Hello, I'm one of the JS developer in Ko.</HomeTitle>
      <HomeDescription>Javascript Developer</HomeDescription>
    </Container>
  )
}

const Container = styled.section`
  background: url(images/home_background.png) center/cover no-repeat;
  padding: 40px;
  padding-top: 120px;
  text-align: center;
  
  color:var(--color-white);
`
const MyImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin:0 auto;
  border: 1px solid var(--color-light-white);
`
const HomeTitle = styled.h1`
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  margin: 16px 0;
`
const HomeDescription = styled.h2`
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  margin: 8px 0;
`


export default React.memo(Introduce)