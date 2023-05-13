'use client'

import React, {Suspense} from "react";
import Foo from "./Foo";

export default function Page() {
    return <>
        <h2>Loading UI and Streaming</h2>
        {/* <Suspense fallback={<div>loading</div>}> */}
          <Foo />
        {/* </Suspense> */}
    </>
}