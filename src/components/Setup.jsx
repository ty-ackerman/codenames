import React, { useState, useEffect } from 'react';
import { Input, Container, Paper, Tabs, Tab, Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	}
}));

export default function Setup() {
	const [ teamSettings, setTeamSettings ] = useState({ teamOne: { members: [], name:"Team One" }, teamTwo: { members: [], name:"Team Two" } });
	const [ value, setValue ] = useState(0);
	const [ formStatus, setFormStatus ] = useState(false);
	const theme = useTheme();
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const doesPropertyExist = (object, property) => {
		return object[property] ? object[property] : '';
	};

	const handleTeamSettingChange = (e, team, index) => {
		let teamSettingState = teamSettings
		const currentTeam = teamSettingState[team];
		const settingChange = e.target.name;

		if (settingChange === 'member') {
			currentTeam.members[index] = e.target.value;
		} else {
			currentTeam[e.target.name] = e.target.value;
		}

		teamSettingState[team] = currentTeam;
		setTeamSettings({ ...teamSettingState });

		setFormStatus(isSetupComplete(teamSettingState));
	};

	const isSetupComplete = (settings ) => {
		const filteredSettings = Object.keys(settings).filter(teamName => {
			const team = settings[teamName];
			if (team.name && team.members.length > 1) {
				const filteredTeam = team.members.filter(member => {
					return member.length
				})
				return filteredTeam.length === team.members.length ;
			}
		})

		return filteredSettings.length === Object.keys(settings).length ? true : false;
	}

	return (
		<div>
			<Paper position="static">
				<Tabs value={value} onChange={handleChange} centered>
					{Object.keys(teamSettings).map((team, key) => {
						return <Tab key={key} label={teamSettings[team].name ?  teamSettings[team].name : `Team ${key + 1}`}/>
					})}

				</Tabs>
			</Paper>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				{Object.keys(teamSettings).map((team, key) => {
					const teamName = doesPropertyExist(teamSettings[team], 'name');
					return (
						<TabPanel value={value} index={key} dir={theme.direction}>
							<Container className={classes.container} noValidate autoComplete="off">
								<div style={{ margin: '0 auto' }}>
									<div>
										<TextField
											id="standard-basic"
											className={classes.textField}
											label="Team Name"
											margin="normal"
											name="name"
											onChange={(e) => handleTeamSettingChange(e, team)}
										/>
									</div>
									<div>
										<TextField
											id="standard-basic"
											className={classes.textField}
											label="Team Member"
											margin="normal"
											name="member"
											onChange={(e) => handleTeamSettingChange(e, team, 0)}
										/>
									</div>
									<div>
										<TextField
											id="standard-basic"
											className={classes.textField}
											label="Team Member"
											margin="normal"
											name="member"
											onChange={(e) => handleTeamSettingChange(e, team, 1)}
										/>
									</div>
								</div>
							</Container>
						</TabPanel>
					);
				})}
			</SwipeableViews>
			<Button variant="contained" className={classes.button} color="secondary" disabled={!formStatus}>
				Start
			</Button>
		</div>
	);
}
