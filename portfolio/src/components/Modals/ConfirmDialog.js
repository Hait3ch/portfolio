import * as React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  TextField,
} from "@mui/material";

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
const ConfirmDialog = (props) => {
  const {
    open,
    text,
    positiveButtonText,
    cancelButtonText,
    onClose,
    onCancel,
    title,
    field1,
    field2,
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
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

export default ConfirmDialog;
