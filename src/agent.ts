export const chatAgent = async (message: string, ctx: any) => {
  const from: string = ctx.from;
  console.log("ctx", ctx);

  let url = "https://agentebasicoimar-production-7a72.up.railway.app/agent"

  try {
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: message,
          from,
          source: "whatsapp",
        }),
      }
    );
    if (response.status == 200) {
      console.log("response: ", response);

      const data = await response.json();
      console.log("data", data);

      return data;
    } else {
      return "No se pudo obtener respuesta";
    }
  } catch (error) {
    throw new Error("Error al hacer la petición" + error.message);
  }
};
