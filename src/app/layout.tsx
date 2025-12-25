import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluxprice AI",
  description: "Fluxprice AI is a smart repricer for Shopify that helps you automate your pricing strategy and stay competitive.",
  keywords: ["Fluxprice AI", "Shopify", "Repricer", "Pricing", "Automation", "Competition", "Shopify Repricing", "Shopify Pricing", "Shopify Automation", "Shopify Competition", "Shopify Pricing Strategy", "Amazon Pricing Automation", "Shopify Pricing Competition", "Shopify Pricing Automation", "Shopify Pricing Competition"],
  authors: [{ name: "Fluxprice AI", url: "https://fluxpriceai.com" }],
  creator: "Fluxprice AI",
  publisher: "Fluxprice AI",
  openGraph: {
    title: "Fluxprice AI",
    description: "Fluxprice AI is a smart repricer for Shopify that helps you automate your pricing strategy and stay competitive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script
            id="hotjar-snippet"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:${
                process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION || 6
              }};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
