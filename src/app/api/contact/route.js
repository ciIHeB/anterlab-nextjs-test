export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log("📥 Contact received:", name, email, message);

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }

  return Response.json({ success: true, received: { name, email, message } });
}
