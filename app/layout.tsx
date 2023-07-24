import "../styles/globals.css";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "WeMakeBetterDrivers | Driving Education",
  openGraph: {
    title: "WeMakeBetterDrivers | Driving Education",
    description:
      "Nigeria’s leading experts in driver education will provide you with the skills required to be a safe and confident driver for life.",
    images: [
      {
        url: "/logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeMakeBetterDrivers | Driving Education",
    description:
      "Nigeria’s leading experts in driver education will provide you with the skills required to be a safe and confident driver for life.",
    images: ["/logo.svg"],
    creator: "@jimo",
  },
  metadataBase: new URL(
    "https://res.cloudinary.com/enthusiasm/image/upload/f_auto,q_auto/v1/onroad/k9allvaylqtz9yis18i3"
  ),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
