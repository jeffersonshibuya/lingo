import db from "@/db/drizzle"
import { units } from "@/db/schema"
import { isAdmin } from "@/lib/admin"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export const GET = async () => {
  const {userId} = auth()

  if(!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await db.query.units.findMany()
  return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  if(!isAdmin()) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await req.json()
  console.log(body)
  const data = await db.insert(units).values({
    ...body
  }).returning()

  return NextResponse.json(data[0])
}