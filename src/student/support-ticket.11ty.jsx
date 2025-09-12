import React from "react"

import Layout from "../layout.11ty"
import SelectInput from "../_includes/components/selectInput/index.11ty"
import PrimaryButton from "../_includes/components/primaryButton/index.11ty"
import SecondaryButton from "../_includes/components/secondaryButton/index.11ty"

const SupportTicket = ({title}) => {
  return (
    <Layout>
      <div className="support-ticket__header">
        <h1 className="display1">{title}</h1>
        <PrimaryButton type="submit" label="Add New" />
      </div>
      <div className="card-bg generic-page">
        <div className="generic-page__content">
          <form
            action="{{route('users.basic_info.update')}}"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="row">
              <div className="col-12 col-lg-4  mb-3">
                <SelectInput label="Category" />
              </div>
              <div className="col-12 col-lg-4 mb-3">
                <SelectInput label="Priority" />
              </div>
              <div className="col-12 col-lg-4 mb-3">
                <SelectInput label="Status" />
              </div>
            </div>

            <SecondaryButton type="submit" label="Search" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SupportTicket
export const data = {
  title: "Support Ticket",
}
