import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core"


const StyledPaper = withStyles({
	root: {
		boxShadow: "0 0 0",
		height: '15vh'
	}
})(Paper)


export default function Header() {
    return (
        <StyledPaper>
            TEST
        </StyledPaper>
    )
}
