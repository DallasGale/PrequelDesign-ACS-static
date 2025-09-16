import React from "react"

const TextInput = ({label, id, htmlFor, type, placeholder, search}) => {
  return (
    <>
      {label && (
        <label class="form-label label2" for={htmlFor}>
          {label}
          <strong class="text-danger">*</strong>
        </label>
      )}

      <input
        required
        class={`form-control text-input__field ${
          search ? "text-input__search" : ""
        }`}
        name={id}
        value=""
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </>
  )
}

export const data = {
  label: "",
  id: "",
  type: "text",
  htmlFor: "",
  placeholder: "",
  search: false,
}

export default TextInput
