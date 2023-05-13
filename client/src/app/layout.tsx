export const metadata = {
    title: "Ideal Canyon",
    description: "Ideal Canyon is a website for scooter riders.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
