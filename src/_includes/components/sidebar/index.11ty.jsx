import React from "react"

const Sidebar = ({isHeaderMenu}) => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list card-bg">
        {navItems.map((item, _index) => {
          return (
            <li key={_index}>
              <a
                href={item.link}
                className={`btn sidebar__list-item-link ${
                  isHeaderMenu ? "no-active-state" : ""
                } sidebar-${item.id}-icon
                `}
              >
                {item.label}
              </a>
            </li>
          )
        })}
        {isHeaderMenu && (
          <li>
            <a
              href="/login"
              className={`btn sidebar__list-item-link sidebar-logout-icon`}
            >
              Logout
            </a>
          </li>
        )}
      </ul>
    </aside>
  )
}

export const data = {
  isHeaderMenu: false,
}
export default Sidebar

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/student-dashboard/",
  },
  {
    id: "my-profile",
    label: "My Profile",
    link: "/users/settings/",
  },
  {
    id: "forum",
    label: "Forum",
    link: "/forum/",
  },
  {
    id: "calendar",
    label: "Calendar",
    link: "/calendar-view/",
  },
  {
    id: "badges",
    label: "Badges",
    link: "/course-badges/",
  },
  {
    id: "certificate",
    label: "Certificate",
    link: "/my-certificate/",
  },
  {
    id: "ticket",
    label: "Ticket",
    link: "/student/support-ticket/",
  },
]
