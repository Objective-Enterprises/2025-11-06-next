'use client'

import { useState } from 'react'

export default function Dog (props) {
  const [image, setImage] = useState(props.image)
  async function handleClick() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setImage(data.message)
  }
  return (
    <>
      <button onClick={handleClick}>New Image</button>
      <img src={image} alt="A Random Dog" />
    </>
  )
}