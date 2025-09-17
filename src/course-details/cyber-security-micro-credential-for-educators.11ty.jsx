import React from "react"
import Layout from "../layout.11ty"
import Tabs from "../_includes/components/tabs/index.11ty"
import Accordion from "../_includes/components/accordion/index.11ty"

const CoursePage = ({title, children}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <p className="display3">Micro-Credential</p>
        <h1 className="display1">
          Cyber security micro-credential for educators
        </h1>
        <div className="generic-page__content">
          <Tabs
            tabs={[
              {
                id: "#Overview-tab",
                label: "Overview",
                active: true,
              },
              {
                id: "#Curriculum-tab",
                label: "Modules",
                active: false,
              },
            ]}
          />
          <div className="course-details__grid">
            <div className="tab-content">
              <div className="tab-pane active" id="Overview-tab">
                <div id="Overview" role="tabpanel">
                  <h2 className="display2 mb-3">Description</h2>
                  <p className="body1">
                    ACS has partnered with Entersoft to deliver the Cyber
                    Security Micro-credential for Educators. This
                    micro-credential supports teacher professional development
                    on the privacy and security section of the Australian
                    Digital Technologies Curriculum. The micro-credential
                    consists of 4 modules. Each module will take approximately 1
                    hour to complete. The course is structured to cover key
                    topics including:
                  </p>
                  <ul className="ul">
                    <li className="body1">
                      recognising cyber threats, understanding multi-factor
                      authentication (MFA) and its role in protecting passwords.
                    </li>
                    <li className="body1">
                      safeguarding personal and organisational data.
                    </li>
                    <li className="body1">managing digital footprints.</li>
                    <li className="body1">
                      applying Australian Privacy Principles.
                    </li>
                  </ul>
                  <p className="body1">
                    To compliment your professional development, the
                    micro-credential includes a range of teaching resources.
                    These will be available to download upon successful
                    completion of each module. Join our forums to connect and
                    collaborate with other teachers, share ideas, help with
                    classroom implementation and, most importantly, be part of
                    our online community.
                  </p>
                </div>
              </div>
              <div className="tab-pane" id="Curriculum-tab">
                <div id="Curriculum" role="tabpanel">
                  <h2 className="display2 mb-3">Modules</h2>
                  {/* Accordion */}
                  <Accordion />
                </div>
              </div>
            </div>
            <div>
              <div className="course-details__badge">
                <img src="../../assets/images/badge.png" alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = {
  title: "",
}
export default CoursePage
