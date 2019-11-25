import React from 'react';
import './App.scss';
import Search from './Search';
import Repo from './Repo';
import useFileHandlers from './useFileHandlers'
import useSearchHandlers from './useSearchHandlers'
import Status from './Status';
const Input = (props) => (
  <input type="file" name="file-input" multiple {...props} />
)
function App() {
  const inputEl = React.useRef()
  const focusInput = () => {
    inputEl.current.focus()
  }
  // const {
  //   files,
  //   pending,
  //   next,
  //   uploading,
  //   uploaded,
  //   status,
  //   onSubmit,
  //   onChange,
  // } = useFileHandlers()
  const {
    state,
    setSearchValue,
    onSubmit,
  } = useSearchHandlers()
  // return <div className='container'>
  //   <form className='form' onSubmit={onSubmit}>
  //   {status === 'FILES_UPLOADED' && (
  //         <div className="success-container">
  //           <div>
  //             <h2>Congratulations!</h2>
  //             <small>You uploaded your files. Get some rest.</small>
  //           </div>
  //         </div>
  //       )}
  //     <div>
  //       <Input onChange={onChange} />
  //       <button type="submit">Submit</button>
  //       <input ref={inputEl} type="text" />
  //       <button onClick={focusInput}>Focus input</button>
  //     </div>
  //     <div>
  //       {files.map(({ file, src, id }, index) => (
  //         <div style={{opacity: uploaded[id]?0.2:1}}key={`thumb${index}`} className="thumbnail-wrapper">
  //           <img className="thumbnail" src={src} alt="" />
  //           <div className="thumbnail-caption">{file.name}</div>
  //         </div>
  //       ))}
  //     </div>
  //   </form>
  let repos = state.repos.map((repo, index) => {
    return <Repo key={index} repo={repo}></Repo>
  })
  return <div className='container'>
    <Search onChange={setSearchValue} onSubmit={onSubmit} value={state.searchValue}></Search>
    <div className="repos">
      {state.loading && !state.errorMessage ? (
        <Status message="Loading"></Status>
      ) : state.errorMessage ? (
        <div className="errorMessage">{state.errorMessage}</div>
      ) : (
            repos
          )}
    </div>
  </div>
}

export default App;
