import * as React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from "@mui/material";

/* Different way to add new players? 
   Maybe with a pop up
*/
/**
 * Component properties
 *
 * title: string;
 * text: string;
 * positiveButtonText: string;
 * cancelButtonText: string;
 * onClose: () => void;
 * onCancel: () => void;
 * onConfirm: () => void;
 * open: boolean;
 */

/**
 * React component displaying confirm dialogs
 */
const CreateNewUser = (props) => {
  const {
    open,
    text,
    positiveButtonText,
    cancelButtonText,
    onClose,
    onCancel,
    title,
    onConfirm,
  } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography style={{ fontSize: "100%" }}>{title}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: "100%" }}
          >
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {onCancel && cancelButtonText && (
            <button onClick={onCancel} className="btn-secondary">
              {cancelButtonText}
            </button>
          )}
          <button onClick={onConfirm} autoFocus className="btn-danger">
            <b>{positiveButtonText}</b>
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateNewUser;
