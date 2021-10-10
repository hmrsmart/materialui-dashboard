import { makeStyles, Theme } from "@material-ui/core";

export const sliderStyles = makeStyles((theme: Theme) => ({
    gridItem: {
        position: "relative",
        height: "250px",
        width: "400px",
        borderRadius: "20px",
    },
    gridContainer: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    overlay: {
        backgroundColor: "#1514147a",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20,
        borderRadius: "20px",
    },
    random: {
        color: "white",
        textAlign: "center",
        fontSize: "12px",
        zIndex: 30,
        position: "absolute",
        top: 0,
    },

    image: {
        borderRadius: "20px",
        zIndex: 1,
        height: "250px",
        width: "400px",
        position: "relative",
        margin: "auto",
    },
    slide: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "20px",
        height: "250px",
        width: "400px",
        zIndex: 50,
    },
    author: {
        color: "white",
        textAlign: "center",
        fontSize: "16px",
        zIndex: 30,
        position: "absolute",
        top: 30,
    },
    content: {
        fontSize: "14px",
        textAlign: "center",
        zIndex: 30,
        position: "absolute",
        color: "white",
    },
    newsSlide: {
        width: "600px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        borderRadius: "20px",
        zIndex: 50,
    },
    newsImage: {
        width: "300px",
        height: "250px",
    },
    title: {
        fontSize: "14px",
        textAlign: "center",
        margin: "10px 0",
        padding: 0,
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        margin: 5,
        padding: 0,
        "& h6": {
            fontSize: "12px",
            margin: "5px 0px",
        },
    },
    news: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "0px 10px",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        height: "250px",
    },
    newsContent: {
        fontSize: "13px",
        margin: "10px 0px",
    },
    [theme.breakpoints.down("xs")]: {
        newsImage: {
            display: "none",
        },
        title: {
            textAlign: "center",
        },
        paper: {
            height: "200px",
            alignItem: "center",
            padding: "10px",
        },
        gridContainer: {
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 0,
            marginBottom: 0,
        },
        gridItem: {
            display: "none",
        },
        news: {
            justifyContent: "center",
        },
        row: {
            width: "unset",
        },
        newsSlide: {
            width: "100%",
            height: "200px",
        },
    },
}));
