import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

function PageControl() {
  return (
    <div className="control-button">
      <Button className="next-search material-buttons" variant="contained" color="default">
        <i class="fas fa-arrow-left"></i>
        Back
      </Button>



      <div style={{position:"absolute"}} className="pages-to-go">
123456
      </div>

      <Button  className="back-search" variant="contained" color="default">
        Next
        <i class="fas fa-arrow-right"></i>
      </Button>
    </div>
  );
}

export default PageControl;
