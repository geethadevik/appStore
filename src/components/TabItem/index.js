// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    onClickTab(tabId)
  }
  const activeTabClassName = isActive ? 'active tab-button' : 'tab-button'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
