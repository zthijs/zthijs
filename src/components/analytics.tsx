import Script from "next/script";

export const Analytics = () => (
  <>
    <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </>
);
