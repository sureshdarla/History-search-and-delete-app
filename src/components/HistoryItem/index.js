import './index.css'

const deleteIconUrl = 'https://assets.ccbp.in/frontend/react-js/delete-img.png'

const HistoryItem = props => {
  const {eachHistoryItem, deleteHistoryItem} = props
  //   console.log(eachHistoryItem)
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const deleteHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <div className="history-item-container">
      <div>
        <div className="history-item">
          <span>{timeAccessed}</span>
          <img src={logoUrl} className="brand-icon" />
          {/* <div className="domain-name-delete-button-container"> */}
          <span>{title}</span>
          <span>{domainUrl}</span>

          <button type="button" onClick={deleteHistory} className="delete-icon">
            <img src={deleteIconUrl} />
          </button>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  )
}

export default HistoryItem
