import React, {useReducer} from 'react'
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
  const reducer = (state, action)=> {
    switch (action.type){
      case 'load':
        return {...state, files:action.files, status:LOADED}
      case 'submit':
        return {...state, uploading:true, pending:state.files, status: INIT}
      default:
        return state;
    }  
  }
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
  return {...state, onSubmit,onChange}
}