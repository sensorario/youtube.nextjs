import Link from "next/link"
import React from "react"

export const metadata = {
    title: 'next.js tutorial',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Next.js tutorial</h1>
                <div id="main-root">{children}</div>
            </body>
        </html>
    )
}