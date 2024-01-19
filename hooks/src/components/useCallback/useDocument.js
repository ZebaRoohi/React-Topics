import {useEffect} from 'react'

const useDocument = (online) => {
    useEffect(()=>{
        document.title=online?'Online':'Offline';
    },[online])
  return (
    <div>
      <p>Example of Custom hooks</p>
    </div>
  )
}

export default useDocument
