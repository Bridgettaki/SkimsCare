import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-container">
      {isEditing ? (
        // ------------------ Edit Profile Screen ------------------
        <div className="card">
          <div className="profile-header">
            <div className="profile-pic-container">
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="profile-pic"
              />
              <button className="edit-icon">✎</button>
            </div>
            <h2>Edit Profile</h2>
          </div>

          <form className="form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>Birth</option>
            </select>
            <select>
              <option>Gender</option>
            </select>

            <button type="button" className="btn primary">
              🔒 Change Password
            </button>
          </form>
        </div>
      ) : (
        // ------------------ My Profile Screen ------------------
        <div className="card">
          <div className="header">
            <button onClick={() => alert("Back clicked")}>←</button>
            <h2>My Profile</h2>
            <button onClick={() => alert("Settings clicked")}>⚙️</button>
          </div>

          <div className="profile-info">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <h3>Sabrina Aryan</h3>
            <p>SabrinaAry208@gmail.com</p>
            <button onClick={() => setIsEditing(true)} className="btn primary">
              Edit Profile
            </button>
          </div>

          <div className="menu">
            <ProfileItem label="Favourites" />
            <ProfileItem label="Downloads" />
            <hr />
            <ProfileItem label="Languages" />
            <ProfileItem label="Location" />
            <ProfileItem label="Subscription" />
            <ProfileItem label="Display" />
            <hr />
            <ProfileItem label="Clear Cache" />
            <ProfileItem label="Clear History" />
            <ProfileItem label="Log Out" />
          </div>

          <p className="version">App Version 2.3</p>
        </div>
      )}
    </div>
  );
};

const ProfileItem = ({ label }) => (
  <div className="menu-item">
    <span>{label}</span>
    <span>›</span>
  </div>
);

export default ProfilePage;
 