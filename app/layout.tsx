import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/app/page.module.css";
import "@/public/assets/css/plugins/bootstrap.min.css";
import "@/public/assets/css/plugins/animate.min.css";
import "@/public/assets/css/plugins/magnific-popup.css";
import "@/public/assets/css/plugins/slick.css";
import "@/public/assets/css/plugins/slick-theme.css";
import "@/public/assets/css/plugins/ion.rangeSlider.min.css";
import "@/public/assets/fonts/flaticon/flaticon.css";
import "@/public/assets/css/plugins/font-awesome.min.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/plugins/Chart.min.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maharatri Template",
  description: "Maharatri Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script src="assets/js/plugins/jquery-3.4.1.min.js"></Script>
  <Script src="assets/js/plugins/popper.min.js"></Script>
  <Script src="assets/js/plugins/bootstrap.min.js"></Script>
  <Script src="assets/js/plugins/imagesloaded.min.js"></Script>
  <Script src="assets/js/plugins/jquery.magnific-popup.min.js"></Script>
  <Script src="assets/js/plugins/jquery.countdown.min.js"></Script>
  <Script src="assets/js/plugins/jquery.waypoints.min.js"></Script>
  <Script src="assets/js/plugins/jquery.counterup.min.js"></Script>
  <Script src="assets/js/plugins/jquery.zoom.min.js"></Script>
  <Script src="assets/js/plugins/jquery.inview.min.js"></Script>
  <Script src="assets/js/plugins/jquery.event.move.js"></Script>
  <Script src="assets/js/plugins/wow.min.js"></Script>
  <Script src="assets/js/plugins/isotope.pkgd.min.js"></Script>
  <Script src="assets/js/plugins/slick.min.js"></Script>
  <Script src="assets/js/plugins/ion.rangeSlider.min.js"></Script>

  <Script src="assets/js/main.js"></Script>
  <Script src="assets/js/plugins/Chart.bundle.min.js"></Script>
  <Script src="assets/js/utils.js"></Script>
  <Script src="assets/js/chart.js"></Script>
      </body>
    </html>
  );
}
