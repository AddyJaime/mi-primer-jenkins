const suma = require("./suma");

if (suma(2, 3) === 5) {
  console.log("✅ Prueba pasada! - Trigger funcionando");

  process.exit(0);
} else {
  console.log("Prueba fallida");
  process.exit(1);
}
