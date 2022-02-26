// import {Link} from 'react-router-dom'

import './index.css'

const HistoryItem = props => {
  const {eachHistoryItem, deleteHistoryItem} = props

  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistoryItem

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      {/* <li className="logo-title-url-container"> */}
      {/* <div className="logo-title-url"> */}
      <img src={logoUrl} alt="domain logo" className="domain-logo" />
      <p className="title">{title}</p>

      <p className="domain-url">{domainUrl}</p>

      <button type="button" className="delete-button" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
      {/* </div> */}
    </li>
  )
}

export default HistoryItem
