const modalCantidadProducto = new bootstrap.Modal(document.getElementById('modalCantidadProducto'));
const onclick = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

onclick(document, 'click', '.btnAumentar', async (e) => {
    const fila = e.target.parentNode.parentNode;
    const inventory_id = fila.getAttribute("id");
    const product_id = fila.getAttribute("product_id");
    const productoTb = fila.children[2].innerHTML;

    product_aumentar.value = productoTb;
    modalCantidadProducto.show();
    console.log('click');

    frmActualizarCantidad.addEventListener('submit', async (e) => {
        e.preventDefault();
      
        const productAmount = document.getElementById('amount_aumentar').value;
        const productPrice = document.getElementById('price_current').value;
      
        const unitPrice = parseFloat(productPrice) / parseFloat(productAmount).toFixed(2);
      
        const incrementProduct = async () => {
          try {
            const response = await fetch(`http://localhost:8082/api/Products/increment/${inventory_id}/${product_id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'authenticate': localStorage.getItem("authenticate"),
              },
              body: JSON.stringify({
                actualPrice: unitPrice,
                amount: productAmount,
                products: [{
                  amountIncome: productAmount,
                  price: productPrice,
                }]
              })
            });
      
            const responseData = await response.json();
      
            if (response.ok) {
              console.log(responseData);
              alert('Se aumentó correctamente');
              location.reload();
            } else {
              alert(responseData.error);
              console.log(responseData);
            }
          } catch (error) {
            console.error('Error al hacer el descuento del producto:', error);
          }
        };
      
        incrementProduct();
      
        modalCantidadProducto.hide();
      });
      
});