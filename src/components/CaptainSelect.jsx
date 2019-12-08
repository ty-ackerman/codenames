import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = [ 'username@gmail.com', 'user02@gmail.com' ];
const useStyles = makeStyles({
	avatar: {
		backgroundColor: blue[100],
		color: blue[600]
	}
});

export default function SimpleDialog(props) {
	const [ open, setOpen ] = React.useState(true);
	const [ selectedValue, setSelectedValue ] = React.useState(emails[1]);
	const classes = useStyles();
	const { onClose } = props;

	const handleClose = (value) => {
		onClose(selectedValue);
		setOpen(false);
		setSelectedValue(value);
	};

	const handleListItemClick = (value) => {
		// onClose(value);
		setOpen(false);
		console.log(value);
		props.setNoCaptain([ 'teamTwo' ]);
	};

	return (
		<Dialog aria-labelledby="simple-dialog-title" open={open}>
			<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
			<List>
				{emails.map((email) => (
					<ListItem button onClick={() => handleListItemClick(email)} key={email}>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<PersonIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={email} />
					</ListItem>
				))}

				<ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
					<ListItemAvatar>
						<Avatar>
							<AddIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="add account" />
				</ListItem>
			</List>
		</Dialog>
	);
}
