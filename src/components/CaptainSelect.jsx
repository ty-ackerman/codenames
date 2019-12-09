import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

const emails = [ 'username@gmail.com', 'user02@gmail.com' ];

export default function SimpleDialog(props) {
	const { noCaptain, setNoCaptain, teams, setProcessCompleted } = props;
	const [ open, setOpen ] = useState(true);
	const [ selectedValue, setSelectedValue ] = useState(emails[1]);

	const { members, name } = props.teams[noCaptain[0]];

	const handleListItemClick = (value) => {
		setOpen(false);
		setNoCaptain([ 'teamTwo' ]);
		setProcessCompleted(true);
		console.log(teams);

		// Here we will take the value that is submitted and create a patch route to update the changed team
		// We will then call the setTeams function to update the teams on client side
	};

	return (
		<Dialog aria-labelledby="simple-dialog-title" open={open}>
			<DialogTitle id="simple-dialog-title">{`Select ${name} Captain`}</DialogTitle>
			<List>
				{members.map((member) => (
					<ListItem button onClick={() => handleListItemClick(member)} key={member}>
						<ListItemText primary={member} />
					</ListItem>
				))}
			</List>
		</Dialog>
	);
}
