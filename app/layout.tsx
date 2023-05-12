import React from "react"

export const metadata = {
    title: 'next || 006 || dynamic routes'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Dynamic routes</h1>
                <div id="main-root">{children}</div>
            </body>
        </html>
    )
}