import React from "react";
import styles from "./latout.module.css"
import utilStyles from "../src/styles/utils.module.css"
import Link from "next/link";
import Head from "next/head";

const name = 'Oshimmmm'
export const siteTitle = 'Next.js Tutorial'

interface LayoutProps {
    children: any;
    home?: any;
};

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                {/* <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png....`}
                /> */}
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) :(
                    <>
                        <Link href="/" legacyBehavior>
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className={`${styles.headerImages} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" legacyBehavior>
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/" legacyBehavior>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Layout