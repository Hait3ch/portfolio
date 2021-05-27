import * as React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button';

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
export default class CreateNewUser extends React.Component {
  /**
   * Constructor
   *
   * @param props component properties
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Component render method
   */
  render() {
    const { open, text, positiveButtonText, cancelButtonText, onClose, onCancel, title, onConfirm } = this.props;
    return (
      <>
        <Dialog open={open} onClose={onClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
          <DialogTitle disableTypography id='alert-dialog-title'>
            <Typography style={{ fontSize: '100%' }}>{title}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description' style={{ fontSize: '100%' }}>
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {onCancel && cancelButtonText && (
              <Button onClick={onCancel} color='gray' style={{ fontSize: '100%' }}>
                {cancelButtonText}
              </Button>
            )}
            <Button variant='danger btn-lg' onClick={onConfirm} autoFocus style={{ fontSize: '100%' }}>
              <b>{positiveButtonText}</b>
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
