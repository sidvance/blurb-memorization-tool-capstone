import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const colors = ['#E52A01', '#97292C', '#FFD700', '#B18B0E', '#FFBF80', '#FF8726', '#A5BD68', '#4D7F17', '#805489', '#9E2283', '#F0CFCF', '#F44681', '#4F859A', '#3366CC']

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
    const [color, setColor] = useState(colors[Math.floor(Math.random()*colors.length)])


    const getBlurb = () => {
        axios.get(`/api/blurb/${blurbId}`)
            .then(res => {
                setBlurb(res.data)
                setTitle(res.data.title)
                setSource(res.data.source)
                setQuote(res.data.quote)
                setSplicedBlurb(res.data.quote)
             })
            .catch(theseHands => console.log(theseHands))
    }

    useEffect(getBlurb, [])
    console.log(blurb)
    

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
          <section className='bg-lightTan w-screen h-screen'>
            <form className='mt-[10vh]' onSubmit={e => handleSubmitEdit(e)}>
              <div className="flex flex-col items-center">
                <input className='w-1/2 rounded shadow-md m-2 p-1' value={title} onChange={e => setTitle(e.target.value)}></input>
                <input className='w-1/2 rounded shadow-md m-2 p-1' value={source} onChange={e => setSource(e.target.value)}></input>
                <textarea className='w-1/2 h-96 rounded shadow-md m-2 p-1' value={quote} onChange={e => setQuote(e.target.value)}></textarea>
                <button className="p-2 m-2 bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan">save</button>
                <button className='text-sm p-1 hover:underline' onClick={deleteBlurb}>delete blurb</button>
              </div>
            </form>
          </section>
          ) : (
          <div className='bg-lightTan w-screen h-screen mt-4' id='memory-page-bg'>
              <div id='container' style={{backgroundColor: color}} className={`flex flex-col items-center content-center w-3/4 h-3/4 m-auto shadow-lg rounded items-end`}>
                  <div className='w-11/12 h-3/4 bg-lightTan rounded mt-10'>
                      <h4 className='m-4'>{splicedBlurb}</h4>
                  </div>
                  <h1 className='text-lightTan flex mt-auto font-bold text-xl '>{blurb.title}</h1>
                  <h2 className='text-lightTan flex mt-auto mb-3 font-bold text-md'>{blurb.source}</h2>
                  <div className='flex justify-between inline w-11/12' id='input-container'>
                    <div className='flex text-center items-center justify-center'>
                      <p className='text-lightTan flex self-center p-1'>I want every</p>
                      <input className='rounded w-6 p-1 flex' onChange={e => setWordSplice(e.target.value)} placeholder="#"/>
                      <p className='text-lightTan flex self-center p-1'>nd/th word omitted.</p>
                      <button className="flex self-center bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan py-1 px-3 m-1" onClick={() => replaceOddIndices(blurb.quote)}>enter</button>
                    </div>
                      <button className="flex self-center bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan py-1 px-3 m-1" onClick={() => setEditing(!editing)}>edit</button>
                  </div>
              </div>
          </div>
        )}
      </section>
      )
    }


export default MemoryPage