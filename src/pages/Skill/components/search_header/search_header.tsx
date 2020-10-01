import React, { useRef } from 'react'
import styles from './search_header.module.css'
function SearchHeader({ onSearch }: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSearch = () => {
    const value = inputRef.current!.value
    onSearch(value)
  }
  const onClick = () => {
    handleSearch()
  }
  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') handleSearch()
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>VideoBe</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search...."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  )
}

export default React.memo(SearchHeader)
