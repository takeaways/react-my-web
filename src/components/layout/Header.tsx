import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  const [search, setSearch] = React.useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSearch('')
  }
  return (
    <Conainer>
      <Link to="/">
        <h1>Welcome</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="검색어를 입력하세요."
          value={search}
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
        <button type="submit">찾기</button>
      </form>
    </Conainer>
  )
}

const Conainer = styled.header`
  background-color: var(--color-purple);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1em;

  -webkit-box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  & h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    color: var(--color-light-purple);
  }

  form {
    align-self: flex-end;
    display: flex;
    width: 100%;
    height: 2rem;
    input {
      flex: 1;
      margin-right: 10px;
      border: 0;
      border-radius: 0.3em;
      font-size: 1rem;
      padding-left: 1rem;
      background-color: white;
    }
    button {
      cursor: pointer;
      width: 4em;
      border: 0;
      border-radius: 0.3em;
      font-size: 1rem;
      background: gold;
    }
  }
`
