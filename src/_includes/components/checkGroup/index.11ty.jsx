import React from "react"

const CheckGroup = ({label, children}) => {
  return (
    <div>
      <label className="form-label label2">
        {label}
        <strong className="text-danger">*</strong>
      </label>
      <div class="form__check-group">{children}</div>
    </div>
  )
}

export const data = {
  label: "",
}

export default CheckGroup
