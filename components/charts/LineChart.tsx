/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Grid, Divider, Typography } from "@material-ui/core";
import useError from "@hooks/useError";
import ThreeDots from "@components/ThreeDotsLoader";
import cryptoAxiosInstance from "@api/crypto/cryptoAxiosInstance";
import { chartStyles } from "@styles/Chart.style";

export default function CryptoAreaChart() {
    const [chartData, setChartData] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const { error, onError, displayError } = useError();

    const classes = chartStyles();

    useEffect(() => {
        if (chartData.length === 0) {
            cryptoAxiosInstance
                .get("/sparkline?ids=BTC,ETH&start=2021-08-21T00%3A00%3A00Z")
                .then((response) => {
                    setChartData(response.data);
                })
                .catch((error) => {
                    console.error("cryptoAxiosInstance error", error);
                    onError(error);
                });
        }
    }, [chartData, onError]);

    const convertToDate = (itemDate) => new Date(itemDate).toLocaleDateString();
    let dummyArray = [];
    const cryptoData = (coinName) =>
        chartData.filter((data) => data.currency === coinName);

    function coinObject(name) {
        const cryptoCoin = cryptoData(name);
        const key = name.toLocaleLowerCase();
        return chartData.length !== 0
            ? {
                  date: cryptoCoin.map((coin) =>
                      coin.timestamps.map((timestamp) =>
                          convertToDate(timestamp),
                      ),
                  )[0],
                  [key]: cryptoCoin.map((coin) =>
                      coin.prices.map((price) => price),
                  )[0],
              }
            : [];
    }

    let aa = {};
    function serializeData() {
        dummyArray = [
            ...dummyArray,
            { ...coinObject("BTC"), ...coinObject("ETH") },
        ];
        return dummyArray.map((item) => {
            return item.date.map((dateItem, index) => {
                aa = {
                    ...aa,
                    date: dateItem,
                    btc: item.btc[index],
                    eth: item.eth[index],
                };
                return aa;
            });
        })[0];
    }

    useEffect(() => {
        if (chartData.length > 0) {
            let coinData = serializeData();
            setData(coinData);
        }
    }, [chartData]);

    console.log("data", data);

    return (
        <Grid container className={classes.lineChart}>
            <Typography className={classes.title} component="h3">
                Bitcoin (BTC) and Etherum (ETH) Chart
            </Typography>
            <Divider className={classes.divider} />
            <Grid item className={classes.chart} xs={12}>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Legend />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="btc"
                                stroke="#8884d8"
                                fill="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="eth"
                                stroke="#82ca9d"
                                fill="#82ca9d"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <ThreeDots />
                )}
            </Grid>
            <Grid item>
                {error && chartData.length === 0 && displayError()}
            </Grid>
        </Grid>
    );
}