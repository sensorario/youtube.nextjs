import Link from "next/link";
import React from "react";

export default function Page() {
    return <React.Fragment>
        <h1>Blog Post</h1>
        <Link href={"/"}>Home</Link>
        <article>
            <title>Hello</title>
        </article>
    </React.Fragment>
}