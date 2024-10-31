export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head></head>
            <body>
                <div className="grow">{children}</div>
            </body>
        </html>
    );
}
