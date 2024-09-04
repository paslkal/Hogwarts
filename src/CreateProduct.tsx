import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { loadFromStorage, saveToStorage } from "./localStorage"
import { NewBook } from "./ProductTypes"
import dayjs from "dayjs"

function CreateProduct() {
  const [title, setTitle] = useState('')
  const [originalTitle, setOriginalTitle] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [description, setDescription] = useState('')
  const [pages, setPages] = useState(0)
  const [cover, setCover] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const books = loadFromStorage()
    const lastBook = books[books.length - 1]
    const {number} = lastBook 
    const {index} = lastBook
    
    const newNumber = 1 + number
    const newIndex = 1 + index
    const newReleaseDate = dayjs(releaseDate).format('MMM D, YYYY')

    const newBook: NewBook = {
      number: newNumber,
      title,
      originalTitle,
      releaseDate: newReleaseDate,
      description,
      pages,
      cover,
      index: newIndex,
      isLiked: false
    }

    books.push(newBook)

    saveToStorage(books)

    navigate('/products')
  }

  return (
    <>
      <h1>Create Product</h1>
      <h2>Add new J.K. Rowling book</h2>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          required 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Title"
        />
        <p>Original Title</p>
        <input
          required 
          type="text" 
          value={originalTitle} 
          onChange={e => setOriginalTitle(e.target.value)} 
          placeholder="Original Title"
        />
        <p>Release Date</p>
        <input
          required 
          type="date" 
          value={releaseDate} 
          onChange={e => setReleaseDate(e.target.value)} 
          placeholder="Release Date"
        />
        <p>Description</p>
        <input
          required 
          type="text" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          placeholder="Description"
        />
        <p>Pages</p>
        <input
          required 
          type="number" 
          value={pages} 
          onChange={e => setPages(Number(e.target.value))} 
          placeholder="Pages"
        />
        <p>Link to the image</p>
        <input
          required 
          type="url" 
          value={cover} 
          onChange={e => setCover(e.target.value)} 
          placeholder="Image Link"/>
        <input
          type="submit" 
          value="Submit" 
        />
      </form>
    </>
  )
}

export default CreateProduct