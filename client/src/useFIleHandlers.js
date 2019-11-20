import React, {useReducer, useCallback, useEffect, useRef} from 'react'
export default function useFileHandlers(){
  const LOADED = 'LOADED'
  const INIT = 'INIT'
  const PENDING = 'PENDING'
  const FILES_UPLOADED = 'FILES_UPLOADED'
  const UPLOAD_ERROR = 'UPLOAD_ERROR'
  const initialState = {
    files:[],
    pending: [],
    next: null,
    uploading: false,
    uploaded: {},
    status:'idle'
  }
  const api = {
    uploadFile({timeout =1000}){
      return new Promise((resolve)=>{
        setTimeout(()=>resolve())
      },timeout)
    }
  }
  const reducer = (state, action)=> {
    switch (action.type){
      case 'load':
        return {...state, files:action.files, status:LOADED}
      case 'submit':
        return {...state, uploading:true, pending:state.files, status: INIT}
      case 'next':
          return {
            ...state,
            next: action.next,
            status: PENDING,
          }
      default:
        return state;
    }  
  }
  const logUploadedFile = (num, color = 'green') => {
    const msg = `%cUploaded ${num} files.`
    const style = `color:${color};font-weight:bold;`
    console.log(msg, style)
  }
  const countRef =useRef(0)

// Processes the next pending thumbnail when ready
useEffect(()=>{
  if (state.pending.length && state.next){
    const {next}=state
    api
      .uploadFile(next)
      .then(()=>{
        const prev = next
        logUploadedFile(++countRef.current)
        const pending = state.pending.slice(1)
        dispatch({type:"file-uploaded", prev, pending})
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: 'set-upload-error', error })
      })
  }
},[state])
  const [state,dispach] = useReducer(reducer, initialState)
  const onChange = (e)=>{
    if (e.target.files.length) {
      const arrFiles = Array.from(e.target.files)
      const files = arrFiles.map((file, index)=>{
        const src = Window.URL.createObjectURL(file)
        return {file, id:index, src}
      })
      dispach({type:'load', files})
    }
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if (state.files.length){
      dispatch({type:'submit'})
    } else {
      window.alert("You don't have any files loaded")
    }
  }
  useEffect(() => {
    if (state.pending.length && state.next == null) {
      const next = state.pending[0]
      dispatch({ type: 'next', next })
    }
  }, [state.next, state.pending])
  return {...state, onSubmit,onChange}
}