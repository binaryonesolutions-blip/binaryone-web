// Cloudflare Pages Function: the one server endpoint for all site forms.
// The site itself is a static export (no Worker per page view), so this is the
// only code that runs on request — and only when someone submits a form. A
// submit is a network call to Microsoft Graph (I/O, not CPU), so it stays well
// within the free Cloudflare limits.
import { handleSubmit } from "../../lib/forms/handlers";

interface Ctx {
  request: Request;
  env: Record<string, string | undefined>;
}

export async function onRequestPost(context: Ctx): Promise<Response> {
  try {
    const fd = await context.request.formData();
    const result = await handleSubmit(fd, context.env);
    return Response.json(result);
  } catch (err) {
    console.error("[api/submit] error:", err);
    return Response.json(
      { ok: false, error: "We couldn't send that just now. Please email info@binaryone.co.ke." },
      { status: 200 },
    );
  }
}
