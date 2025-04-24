import "./globals.css";

export const metadata = {
  title: "Mahesh & ShreeRaksha Wedding",
  description: "Join us to celebrate the union of Mahesh N Shetty & ShreeRaksha R Shetty. The wedding details, reception, and muhurtham timings are listed below.",
  icons: {
    icon: "/assets/logo.jpg", // Replace with the actual path to your logo
  },
  openGraph: {
    title: "Mahesh & ShreeRaksha Wedding",
    description: "Join us in celebrating the wedding of Mahesh N Shetty & ShreeRaksha R Shetty.",
    image: "/assets/logo.jpg", // Replace with the image for sharing on social media
    url: "https://your-wedding-website.com", // Replace with your website URL
    site_name: "Mahesh & ShreeRaksha Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh & ShreeRaksha Wedding",
    description: "Join us in celebrating the wedding of Mahesh N Shetty & ShreeRaksha R Shetty.",
    image: "/assets/logo.jpg", // Replace with your Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
