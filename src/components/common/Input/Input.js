import { memo } from 'react'

const Input = ({ label, value, checkValue, type }) => {
  console.log('re-render Input', type)
  console.log(type)
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value[type]}
        onChange={(e) => checkValue(e.target.value, type)}
      />
    </div>
  )
}

export default memo(Input)
