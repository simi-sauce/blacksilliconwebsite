import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from '../layout/style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  InputAdornment,
  FormControlLabel,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  Button,
  List,
  ListItem,
  TextField,
  ListItemText,
  Divider
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import AddIcon from '@material-ui/icons/Add';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import DialogContentText from '@material-ui/core/DialogContentText';

const emails = ['example1@example.com', 'example2@example.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      classes={{ paper: 'modal-content rounded-lg' }}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <div className="p-3 font-size-xl font-weight-bold">
        Set backup account
      </div>
      <Divider />
      <List>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}>
            <ListItemAvatar>
              <Avatar className="bg-first">
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function LivePreviewExample() {
  // Example 1

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // Example 2

  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  // Example 3

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  // Example 4

  const [open3, setOpen3] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen3 = (scrollType) => () => {
    setOpen3(true);
    setScroll(scrollType);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open3]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="boton" onClick={handleClickOpen3('paper')}>
          Learn More
        </Button>
        <Dialog
          open={open3}
          onClose={handleClose3}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description">
          <DialogTitle id="scroll-dialog-title">Finance</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}>
              <div>
              Electronic Payment Services: Electronic payment system has grown increasingly over the last decades due to the growing spread of internet-based banking and shopping.
As the world advances more with technology development, we can see the rise of electronic payment systems and payment processing devices. 
As these increase, improve, and provide ever more secure online payment transactions the percentage of check and cash transactions will decrease. 
Black Silicon deploys top-notch payment solution to its clients to tap into this rapidly growing service space to develop more seamless method of making payment and make existing payment channels run smoother.
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="bg-secondary p-4">
            <Button onClick={handleClose3} className="btn-success">
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
