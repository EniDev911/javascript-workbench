// POO

class Product{
    // Lo que se va a solicitar al instanciar nuestra clase
    constructor(name, qty, price){
        this.name = name;
        this.quantity = qty;
        this.price = price;
    }
}

class UI{
    addProduct(product){
        const listProduct = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Quantity</strong>: ${product.quantity}
                    <strong>Price</strong>: ${product.price}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        listProduct.appendChild(element);
    }
    cleanBox(){
        document.getElementById('product-form').reset();
    }
    // delete
    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted succesfully', 'warning')
        }
    }
    // messages
    showMessage(message, contextClass){
        const div = document.createElement('div');
        div.className = `alert alert-${contextClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        // mostrando en el dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
}

// Eventos del DOM
document.getElementById('product-form')
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const qty = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        const product = new Product(name, qty, price);

        const ui = new UI();
        if(name === '' || qty === '' || price === ''){
            return ui.showMessage('All input are required', 'danger');
        }

        ui.addProduct(product);
        ui.cleanBox();
        ui.showMessage('Product added succesfully', 'success');
        e.preventDefault();
    });

// Capturar el boton de eliminar
document.getElementById('product-list')
    .addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);
        
    });
