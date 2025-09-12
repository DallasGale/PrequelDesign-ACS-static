import React from "react"
import ProfileLayout from "../layout.11ty"
import SecondaryButton from "../../secondaryButton/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const ProfilePhoto = ({title}) => {
  return (
    <ProfileLayout title={title} id="images_tab">
      <div className="profile-photo">
        <h2 className="display3">Recommend size (300 x 300) px</h2>
        <div className="profile-photo__content">
          <label htmlFor="profile_picture" className="profile-photo__label">
            <img
              id="profile_picture_show"
              className="profile-photo__bgImg"
              src="https://ui-avatars.com/api/?background=random&name=DA"
              alt="Profile Photo"
            />
            <input
              className="d-none"
              type="file"
              name="profile_picture"
              id="profile_picture"
              accept=".png, .jpg, .jpeg"
            />
            <span class="overlay d-flex align-items-center justify-content-center fs-2 w-100 h-100 position-absolute top-0 left-0 bg-opacity-50 text-white">
              <i class="fa fa-camera"></i>
            </span>
          </label>
        </div>
      </div>
      <div className="form-cta">
        <PrimaryButton type="submit" label="Save" />
      </div>
    </ProfileLayout>
  )
}

export default ProfilePhoto
