'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {

    Array.prototype.random = function() {
        return this[Math.floor((Math.random() * this.length))]
    }

    const slug = [
        "hello-world",
        "ciao-mondo",
        "tutorial-react",
        "tutorial-next-js",
        "test-driven-developmen",
    ].random()

    const router = useRouter();


    return <React.Fragment>
        <h1>Segmento</h1>
        <Link href={"/"}>Home</Link>

        <Link href={"/blog/hello-nextjs"}>NextJs</Link>
        |
        <Link prefetch={false} href={"/blog/hello-react"}>Reac</Link>


    </React.Fragment>
}