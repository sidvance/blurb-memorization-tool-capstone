import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const MemoryPage = () => {
    const {blurbId} = useParams()
    const navigate = useNavigate()
    const [blurb, setBlurb] = useState({})
    const [splicedBlurb, setSplicedBlurb] = useState('')
    const [wordSplice, setWordSplice] = useState(null)
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [source, setSource] = useState('')
    const [quote, setQuote] = useState('')

    const getBlurb = () => {
        axios.get(`/api/blurb/${blurbId}`)
            .then(res => {
                setBlurb(res.data)
                setTitle(res.data.title)
                setSource(res.data.source)
                setQuote(res.data.quote)
                setSplicedBlurb(res.data.quote)})
            .catch(theseHands => console.log(theseHands))
    }

    useEffect(getBlurb, [])
    console.log(blurb)

    let randomNumber = Math.floor(Math.random() * 10)

    const replaceOddIndices = str => {
        const wordsArr = str.split(' ')
        
      wordsArr.forEach((word, i) => {
          wordsArr.forEach(el => {
            if(i % wordSplice === 0){
              wordsArr.splice(i, 1, '⚪')
            }  
          })
        })
          setSplicedBlurb(wordsArr.join(' '))
      }

      const deleteBlurb = () => {
        axios.delete(`/api/blurb/${blurbId}`)
        .then(res => {
          console.log(res)
          navigate('/home')
        })
        .catch(theseHands => console.log(theseHands))
        }

      const editBlurb = () => {
        axios.put(`/api/blurb/${blurbId}`)
        .then(res => {
          console.log(res)
          navigate(`/memory-page/${blurbId}`)
        })
        .catch(theseHands => console.log(theseHands))
      }

      const handleSubmitEdit = e => {
        e.preventDefault()
        axios.put('/api/blurb', {title, source, quote, blurbId: blurb.id})
        .then(res => {
          setBlurb(res.data)
          setTitle(res.data.title)
          setSource(res.data.source)
          setQuote(res.data.quote)
          setSplicedBlurb(res.data.quote)
          setEditing(false)
        })
        .catch(theseHands => console.log(theseHands))
      }
      

    return (
      <section>
        {editing ? (
          <section>
            <form onSubmit={e => handleSubmitEdit(e)}>
              <input value={title} onChange={e => setTitle(e.target.value)}></input>
              <input value={source} onChange={e => setSource(e.target.value)}></input>
              <input value={quote} onChange={e => setQuote(e.target.value)}></input>
              <button>save</button>
            </form>
            <button className='text-sm p-1 hover:underline' onClick={deleteBlurb}>delete</button>
          </section>
          ) : (
          <div className='bg-lightTan w-screen h-screen mt-4' id='memory-page-bg'>
              <div id='container' className='flex flex-wrap flex-col content-center w-3/4 h-3/4 bg-black m-auto shadow-lg rounded items-end'>
                  <h1 className='text-lightTan'>{blurb.title}</h1>
                  <h2 className='text-lightTan'>{blurb.source}</h2>
                  <div className='w-11/12 h-3/4 bg-lightTan rounded'>
                      <h4>{splicedBlurb}</h4>
                  </div>
                  <input onChange={e => setWordSplice(e.target.value)} placeholder="Type the # that you want to skip"/>
                  <button className='text-lightTan'  onClick={() => replaceOddIndices(blurb.quote)}>splice</button>
                  <button className='text-lightTan' onClick={() => setEditing(!editing)}>edit</button>
              </div>
          </div>
        )}
      </section>
        )
    }


export default MemoryPage