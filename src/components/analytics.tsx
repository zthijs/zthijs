import Script from "next/script";

export const Analytics = () => (
    <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon={JSON.stringify({ token: process.env.NEXT_PUBLIC_CF_BEACON_TOKEN })} />
)