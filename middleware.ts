import { NextRequest, NextResponse } from "next/server"

export function middleware(request : NextRequest) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('X-custom-foo', 'che vogliamo')
    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
    response.headers.set('X-custom-foo', 'che vogliamo')
    return response
}

export const config = {
    matcher: '/'
}