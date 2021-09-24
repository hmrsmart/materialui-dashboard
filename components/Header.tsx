import { Grid, AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Logo from "@components/Logo";
import { headerStyles } from "@styles/Header.style";
import { UIActions } from "@store/actions/uiActions";
import useRedux from "@hooks/useRedux";

export default function Header() {
    const { dispatch } = useRedux();
    const classes = headerStyles();

    function toggleMenu() {
        dispatch(UIActions());
    }
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Grid container className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <Logo />
                        </IconButton>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                        <Button color="inherit">News</Button>
                        <Button color="inherit">Logout</Button>
                        <Button onClick={toggleMenu} color="inherit">
                            Menu
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
