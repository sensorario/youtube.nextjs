'use client'

import Link from "next/link"
import React from "react"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Next.js tutorial</h1>
                <Link href="/">home</Link>
                <div className="container">{children}</div>
            </body>
        </html>
    )
}