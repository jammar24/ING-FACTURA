 function calcularFactura() {
    const precioServicio = parseFloat(document.getElementById("precioServicio").value);
    const porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value);
    const tasaIVA = parseFloat(document.getElementById("tasaIVA").value);

    if (
      isNaN(precioServicio) || isNaN(porcentajeDescuento) || isNaN(tasaIVA) ||
      precioServicio < 0 || porcentajeDescuento < 0 || tasaIVA < 0
    ) {
      alert("Ingrese valores numéricos válidos y mayores o iguales a cero.");
      return;
    }

    const descuento = precioServicio * (porcentajeDescuento / 100);
    const precioConDescuento = precioServicio - descuento;
    const IVA = precioConDescuento * (tasaIVA / 100);
    const totalAPagar = precioConDescuento + IVA;

    document.getElementById("resultado").innerHTML = `
      <p><strong>Precio del servicio:</strong> $${precioServicio.toFixed(2)}</p>
      <p><strong>Descuento aplicado:</strong> $${descuento.toFixed(2)}</p>
      <p><strong>Precio con descuento:</strong> $${precioConDescuento.toFixed(2)}</p>
      <p><strong>IVA:</strong> $${IVA.toFixed(2)}</p>
      <p><strong>Total a pagar:</strong> $${totalAPagar.toFixed(2)}</p>
    `;
  }
