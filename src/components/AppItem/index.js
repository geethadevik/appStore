import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="apps-list-container">
      <img className="app-item-image" src={imageUrl} alt={appName} />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
