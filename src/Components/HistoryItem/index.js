import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteClickedItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDeleteItem = () => {
    deleteClickedItem(id)
  }

  return (
    <li className="list-item">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>
        <div className="domain-container">
          <div className="logo-container">
            <img src={logoUrl} className="image" alt="domain logo" />
          </div>
          <p className="title"> {title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-container"
        testid="delete"
        onClick={onDeleteItem}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
