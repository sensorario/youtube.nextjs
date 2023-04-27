export const metadata = {
    title: 'mamma mia '
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root-container">{children}</div>
            </body>
        </html>
    )
}