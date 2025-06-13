
    function calcularFactura() {
      const cliente = {
        nombre: document.getElementById("nombreCliente").value.trim(),
        apellido: document.getElementById("apellidoCliente").value.trim(),
        ci: document.getElementById("ciCliente").value.trim(),
        correo: document.getElementById("correoCliente").value.trim(),
        telefono: document.getElementById("telefonoCliente").value.trim(),
        ruc: document.getElementById("rucCliente").value.trim()
      };

      const factura = {
        numero: document.getElementById("numeroFactura").value.trim(),
        vencimiento: document.getElementById("fechaVencimiento").value
      };

      const emisor = {
        nombre: document.getElementById("nombreEmisor").value.trim(),
        telefono: document.getElementById("telefonoEmisor").value.trim(),
        correo: document.getElementById("correoEmisor").value.trim()
      };

      const precioServicio = parseFloat(document.getElementById("precioServicio").value);
      const porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value);
      const tasaIVA = parseFloat(document.getElementById("tasaIVA").value);

      // Validar entradas
      if (
        !cliente.nombre || !cliente.apellido || !cliente.ci || !cliente.correo || !cliente.telefono || !cliente.ruc ||
        !factura.numero || !factura.vencimiento ||
        !emisor.nombre || !emisor.telefono || !emisor.correo ||
        isNaN(precioServicio) || isNaN(porcentajeDescuento) || isNaN(tasaIVA) ||
        precioServicio < 0 || porcentajeDescuento < 0 || tasaIVA < 0
      ) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
      }

      const descuento = precioServicio * (porcentajeDescuento / 100);
      const precioConDescuento = precioServicio - descuento;
      const IVA = precioConDescuento * (tasaIVA / 100);
      const totalAPagar = precioConDescuento + IVA;

      const textoResultado = `
Datos del Cliente:
  Nombre: ${cliente.nombre} ${cliente.apellido}
  CI/Pasaporte: ${cliente.ci}
  Correo: ${cliente.correo}
  Teléfono: ${cliente.telefono}
  RUC: ${cliente.ruc}

Factura Nº: ${factura.numero}
Fecha de Vencimiento: ${factura.vencimiento}

Datos del Emisor:
  Nombre: ${emisor.nombre}
  Teléfono: ${emisor.telefono}
  Correo: ${emisor.correo}

Detalle de Facturación:
  Precio del Servicio: $${precioServicio.toFixed(2)}
  Descuento Aplicado (${porcentajeDescuento}%): $${descuento.toFixed(2)}
  Precio con Descuento: $${precioConDescuento.toFixed(2)}
  IVA (${tasaIVA}%): $${IVA.toFixed(2)}
  Total a Pagar: $${totalAPagar.toFixed(2)}
      `;

      document.getElementById("resultado").textContent = textoResultado.trim();
      window.scrollTo({top:document.body.scrollHeight, behavior:"smooth"});
    }
