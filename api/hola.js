export default function handler(req, res) {
  res.status(200).json({
    saludo: "Hola desde flash.backend.clean 🎉",
  });
}
