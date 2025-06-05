export const chatAgent = async (message: string, ctx: any) => {
  const from: string = ctx.from;
  console.log("ctx", ctx);

  try {
    const response = await fetch(
      "https://agentebasicoimar-production-1193.up.railway.app/agent",
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
