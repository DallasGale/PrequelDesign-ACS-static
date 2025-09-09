import React from "react"

const CourseList = ({courses}) => {
  return (
    <div className="forum-table-container">
      <table className="forum-table">
        <thead className="forum-table__head">
          <th>
            <div className="label1">Course</div>
          </th>
          <th>
            <div className="label1">Category</div>
          </th>
          <th>
            <div className="label1">Replies</div>
          </th>
          <th>
            <div className="label1">Views</div>
          </th>
        </thead>
        <tbody className="forum-table__body">
          {courses.map((course) => {
            return (
              <tr key={course.id} className="forum-table__row">
                <td width="50%">
                  <div className="display2">{course.name}</div>
                </td>
                <td>
                  <div className="label2">{course.category}</div>
                </td>
                <td>
                  <div className="label2">{course.replies}</div>
                </td>
                <td>
                  <div className="label2">{course.views}</div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export const data = {
  courses: [],
}
export default CourseList
