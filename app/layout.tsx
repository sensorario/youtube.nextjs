'use client'

import React, { useState } from "react"

export default function RootLayout({ children, login, dashboard }) {
    const isLoggedIn = true
    
    const slot = isLoggedIn
        ? dashboard
        : login

    return (
        <html lang="en">
            <body>
                <h1>Next.js tutorial</h1>
                <div className="container">
                    <div id="children-container">{children}</div>
                    <div id="slot-container">{slot}</div>
                </div>
            </body>
        </html>
    )
}