import Link from "next/link";
import React from "react";

export default function Page() {
    return <React.Fragment>
        <h1>Linking and Navigating</h1>
        <Link href={"/segmento"}>Segmento</Link>
    </React.Fragment>
}