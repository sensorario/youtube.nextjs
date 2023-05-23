import { cookies } from "next/dist/client/components/headers"
import { redirect } from "next/dist/server/api-utils"
import { NextResponse } from "next/server"

export async function GET(request:Request) {
    const response = await request.json()
    return new NextResponse(response)
}