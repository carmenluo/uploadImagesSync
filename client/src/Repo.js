import React from 'react'
const Repo = (props) => {
  console.log(props.repo.login)
  return (
    <div className = 'repo'>
      <h4>Name: {props.repo.name}</h4>
      <div>Primary Language: {props.repo.language}</div>
      <div>Stars: {props.repo.stargazers_count}</div>
      <div>Watchers: {props.repo.watchers_count}</div>
    </div>
  )
}
export default Repo