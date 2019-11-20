import React from 'react'
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
export default function useFileHandlers(){
  return {}
}