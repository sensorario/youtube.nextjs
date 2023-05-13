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
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/sss">sss</Link></li>
                </ul>
                <div id="main-root">{children}</div>
            </body>
        </html>
    )
}