import React from "react"

const CheckInput = ({label, id, name}) => {
  return (
    <div class="form-check form__check-input">
      <input
        name={name}
        class="form-check-input"
        type="checkbox"
        value=""
        id={id}
      />
      <label class="form-check-label label2" for={id}>
        {label}
      </label>
    </div>
  )
}

export const data = {
  label: "",
  id: "",
}

export default CheckInput
