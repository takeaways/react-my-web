import React from 'react'
import styles from './image_file_input.module.css'
export default function ImageFileInput({
  imageUploader,
  name,
  onFileChange,
}: any) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const onButtonCloick = (e: any) => {
    e.preventDefault()
    inputRef.current!.click()
  }

  const onChange = async (event: any) => {
    const uploaded = await imageUploader.upload(event.target.files[0])
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonCloick}>
        {name || 'No file'}
      </button>
    </div>
  )
}
