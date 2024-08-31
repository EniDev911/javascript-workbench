// POO

class Product {
  // Lo que se va a solicitar al instanciar nuestra clase
  constructor(name, qty, price) {
    this.name = name;
    this.quantity = qty;
    this.price = price;
  }
}

class UI {

  addProduct(product) {
    const listProduct = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML = /*HTML*/ `
    <div class="card text-center mb-4 shadow">
      <div class="card-body">
      <strong>Producto</strong>: ${product.name}
        <strong>Cantidad</strong>: ${product.quantity}
        <strong>Precio</strong>: ${product.price}
        <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
      </div>
    </div>
    `;
    listProduct.appendChild(element);
  }
  cleanBox() {
    document.getElementById('product-form').reset();
  }
  // delete
  deleteProduct(element) {
    if (element.name === 'delete' && confirm('¿Estás seguro de eliminar el producto?')) {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('Producto eliminado exitosamente', 'warning')
    }
  }
  // messages
  showMessage(message, contextClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${contextClass} mt-3`;
    div.appendChild(document.createTextNode(message));
    // mostrando en el dom
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 2000);
  }
}

// Eventos del DOM
document.getElementById('product-form')
.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const qty = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;

  const product = new Product(name, qty, price);

  const ui = new UI();
  if (name === '' || qty === '' || price === '') {
    return ui.showMessage('Todos los campos son requeridos', 'danger');
  }

  ui.addProduct(product);
  ui.cleanBox();
  ui.showMessage('Producto añadido exitosamente', 'success');

});

// Capturar el boton de eliminar
document.getElementById('product-list')
.addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
