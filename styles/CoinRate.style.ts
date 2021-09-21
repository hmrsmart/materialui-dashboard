import { makeStyles } from "@material-ui/core";

export const coinRateStyles = makeStyles((theme) => ({
    coinRate: {
        flexDirection: "column",
    },
    row: {
        display: "Flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
    },
    rate: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: 600,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: 800,
        marginTop: 20,
        marginBottom: 10,
    },
    divider: {
        marginBottom: 10,
    },
}));
