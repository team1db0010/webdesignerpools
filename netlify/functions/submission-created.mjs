export default async (req) => {
  try {
    const { payload } = await req.json();

    console.log("Form submission received:", JSON.stringify({
      form_name: payload.form_name,
      created_at: payload.created_at,
      data: payload.data,
    }));

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Error processing submission:", error);
    return new Response("Error", { status: 500 });
  }
};
