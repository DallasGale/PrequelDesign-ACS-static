import React from "react"

const SelectInput = ({label, id, placeholder}) => {
  return (
    <div>
      <label className="form-label label2">
        {label}
        <strong className="text-danger">*</strong>
      </label>
      <select
        required
        id={id}
        class="form-select select-input"
        aria-label={placeholder}
      >
        <option selected>{placeholder}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

export const data = {
  label: "",
  id: "",
  placeholder: "",
}

export default SelectInput
