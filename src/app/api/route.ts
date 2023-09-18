import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prompts`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const prompts = await res.json()

  return NextResponse.json(prompts)
}
