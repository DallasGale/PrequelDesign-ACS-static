import React from "react"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {navItems.map((item) => {
          return (
            <li>
              <a href={item.link} className="sidebar__list-item-link">
                <img src={item.icon} className="sidebar__list-item-icon" />
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar

const navItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: "/assets/svgs/dashboard.svg",
    link: "/dashboard/",
  },
  {
    id: 2,
    label: "My Profile",
    icon: "/assets/svgs/my-profile.svg",
    link: "/my-profile/",
  },
  {
    id: 3,
    label: "Forum",
    icon: "/assets/svgs/forum.svg",
    link: "/forum",
  },
  {
    id: 4,
    label: "Calendar",
    icon: "/assets/svgs/calendar.svg",
    link: "/calendar",
  },
  {
    id: 5,
    label: "Badges",
    icon: "/assets/svgs/badges.svg",
    link: "/badges",
  },
  {
    id: 6,
    label: "Certificates",
    icon: "/assets/svgs/certificate.svg",
    link: "/certificates",
  },
]
