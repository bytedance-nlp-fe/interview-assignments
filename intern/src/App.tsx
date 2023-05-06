import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [isClicked,setisClicked] = useState(false)
  const [isRightBarShow,setisRightBarShow]=useState(false)
  const manage=useRef(null)
  const option=useRef(null)
  useEffect(()=>{
    const element= manage.current as unknown as HTMLLIElement
     if(isRightBarShow){
      element.classList.add('last')
     }else{
       element.classList.remove('last')
     }
     
  })
  const rightbar=isRightBarShow===true? <div className='rightbar' onMouseEnter={()=>{setisRightBarShow(true)}}>
  <div><i className="iconfont icon-githublogo"/><span>Github</span>
  </div>
  <div><i className='iconfont icon-duigou'/><span className='stitch'>Stitches</span></div>
  <div><i className='iconfont icon-twitter-fill'/><span> Twitter</span></div>
  </div>:<></>
  document.addEventListener('click',(e)=>{
   const temp=document.getElementById('ulbar')!
   const temp2=document.getElementById('option')!
      if(!temp.contains(e.target as Node) && !temp2.contains(e.target as Node)){
        console.log(2)
        setisClicked(false)
        setisRightBarShow(false)
      }
    
  })
  return (
    <>
      <div className='options' onClick={()=>{isClicked===false? setisClicked(true):setisClicked(false)}} id='option' ref={option}>
         <p className='pspan'>Options</p>
         <i className='iconfont icon-xiangxia'></i>
      </div>

      <ul className={isClicked===true?'bardisplay':'barnotdisplay'} id='ulbar' >
        <li>new Tab</li>
        <li>new Window</li>
        <li onMouseEnter={()=>{setisRightBarShow(true)}} onMouseLeave={()=>{setisRightBarShow(false)}}  ref={ manage }>Favorites<i className={`iconfont icon-xiangyou1 `}></i></li>
        {rightbar}
        <li>Downloads</li>
        <li> <i className='iconfont icon-duigou tick'/>Show ToolBar</li>
        <li>Show Full Urls</li>
      </ul>

    </>
  )
}

export default App
