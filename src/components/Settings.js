import React from "react";

const Settings = (props) => {
  return (
    <div
      className={`container mt-5 pt-5  text-${
        props.toggleDark === "light" ? "dark" : "light"
      }`}
    >
      <p>
        Manage your application preferences and configurations here. Adjust
        themes, update your profile, set notification preferences, and customize
        your experience to suit your workflow. The settings page ensures you
        have full control over how the app behaves and looks.
      </p>
    </div>
  );
};

export default Settings;
