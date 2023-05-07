import Link from "next/link"
import React from "react"

export const metadata = {
    title: 'next || 005 || route groups'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Route groups</h1>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contatti">Contatti</Link></li>
                </ul>
                <div id="primo-root">{children}</div>
            </body>
        </html>
    )
}