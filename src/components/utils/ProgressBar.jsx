import React from "react";

export const ProgressBar = ({ progress }) => {
  return (
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped tex-tcenter"
        role="progressbar"
        style={{ width: progress+"%" }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}% completed
      </div>
    </div>
  );
};
