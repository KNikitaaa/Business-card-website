export async function POST(request) {
  try {
    const body = await request.json()

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000'
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return Response.json(data, { status: response.status })
  } catch (error) {
    return Response.json(
      { success: false, message: 'Ошибка при обработке запроса' },
      { status: 500 }
    )
  }
}
