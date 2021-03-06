import Script from "next/script";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as AuthProvider } from "next-auth/client";
import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import store, { persistor } from "@store/store";
import Layout from "@layouts/Layout";
import Auth from "@components/Auth";
import "nprogress/nprogress.css";
import "@styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();

function App({ Component, pageProps: { session, ...pageProps } }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.on("routeChangeStart", start);
            Router.events.on("routeChangeComplete", end);
            Router.events.on("routeChangeError", end);
        };
    }, []);

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT}`}
            />
            <Script strategy="lazyOnload">
                {`
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT}', {
										page_path: window.location.pathname,
									});
							`}
            </Script>
            <AuthProvider
                options={{ clientMaxAge: 0, keepAlive: 0 }}
                session={pageProps?.session}
            >
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            {Component.auth ? (
                                <Auth>
                                    <Layout>
                                        <Component {...pageProps} />
                                    </Layout>
                                </Auth>
                            ) : (
                                <Component {...pageProps} />
                            )}
                        </PersistGate>
                    </Provider>
                </QueryClientProvider>
            </AuthProvider>
        </>
    );
}

export default App;
