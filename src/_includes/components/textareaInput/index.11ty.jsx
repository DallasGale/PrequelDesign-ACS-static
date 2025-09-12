import React from "react"

const TextareaInput = ({className, label, id, htmlFor}) => {
  return (
    <div>
      <label class="form-label label2" for={htmlFor}>
        {label}
        <strong class="text-danger">*</strong>
      </label>
      <textarea
        className={`form-control textarea-input__field ${
          className ? className : ""
        }`}
        name={id}
        value=""
        id={id}
        placeholder=""
      />
    </div>
  )
}

export const data = {
  label: "",
  id: "",
  htmlFor: "",
  className: "",
}

export default TextareaInput
