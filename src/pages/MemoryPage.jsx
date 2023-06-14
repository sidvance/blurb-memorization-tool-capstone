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

    
    const colors = ['#E52A01', '#97292C', '#FFD700', '#B18B0E', '#FFBF80', '#FF8726', '#A5BD68', '#4D7F17', '#805489', '#9E2283', '#F0CFCF', '#F44681', '#4F859A', '#3366CC']
    let randomColor = colors[Math.floor(Math.random()*colors.length)] 
    

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
                  <div className='w-11/12 h-3/4 bg-lightTan rounded mt-10'>
                      <h4 className='m-4'>{splicedBlurb}</h4>
                  </div>
                  <h1 className='text-lightTan flex self-start mt-auto font-bold text-xl'>{blurb.title}</h1>
                  <h2 className='text-lightTan flex self-start mt-auto mb-3 font-bold text-md'>{blurb.source}</h2>
                  <div className='flex inline mr-auto ' id='input-container'>
                      <input className='rounded w-10 p-1 mb-2 flex self-start' onChange={e => setWordSplice(e.target.value)} placeholder="Type the # that you want to skip"/>
                      <button className='text-lightTan flex self-start self-center mb-2 ml-2 mr-20' onClick={() => replaceOddIndices(blurb.quote)}>splice</button>
                      <button className='text-lightTan flex self-center ml-96 mb-2 hover:underline' onClick={() => setEditing(!editing)}>edit</button>
                  </div>
              </div>
          </div>
        )}
      </section>
        )
    }


export default MemoryPage