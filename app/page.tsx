'use client'

import React, { useState } from "react";

export default function Page() {
    const [state, setState] = useState(false)
    if (state === true) {
        throw new Error('!!!');
    }
    return <>
        <h2>Parallel routes</h2>
        <button onClick={() => setState(true)}>crash</button>
    </>
}