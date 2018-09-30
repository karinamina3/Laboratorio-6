var menu = () => {    
    var opcion = prompt ("1. Agregar producto, 2. Modificar Stock, 3. Registrar venta y reducir stock, 4. Mostrar promedio de ventas, 5. Mostrar productos con stock 0, 6. Salir del sistema.");    
    j = true;
    while (j) {
        switch (parseInt(opcion)) {
            case 1:
                agregarProducto();
                break;
            case 2:
                modificarStock();
                break;
            case 3: 
                registrarVentas();
                break;
            case 4:
                promedioVentas();
                break;
            case 5:
                stockCero();
                break;
            case 6:
                j = false;
                console.log("Adiós Michelle")
                break;
            default:
                console.log("Ingrese una una opción válida");
                break;
        }
        if (j) {
            opcion = prompt ("1. Agregar producto, 2. Modificar Stock, 3. Registrar venta y reducir stock, 4. Mostrar promedio de ventas, 5. Mostrar productos con stock 0, 6. Salir del sistema.");
        }
    }   
}

var productos = [];
var cont = 0;
var total = 0;

var agregarProducto = () => {
    codigoN = prompt("Ingrese el código del nuevo producto:");
    descripcionN = prompt("Ingrese la descripción del nuevo producto:");
    tipoN = prompt("Ingrese el tipo del nuevo producto:");
    precio1N = prompt("Ingrese el precio al cual compró el nuevo producto:");
    precio2N = prompt("Ingrese el precio al cual venderá el nuevo producto:");
    stockN = prompt("Ingrese el stock del nuevo producto:");

    productoNuevo = {
        codigo : codigoN,
        descripcion : descripcionN,
        tipo : tipoN, 
        precio1 : precio1N,
        precio2 :precio2N,
        stock : stockN
    };
    productos.push(productoNuevo);
    return console.log(`Producto ingresado con éxito ${productoNuevo}`);    
}

var modificarStock = () => {
    let aux = prompt("Ingrese el código del producto a modificar:");
    productos.forEach(e => {
        if (aux == e.codigo) {
            let nuevo = prompt("Ingrese el nuevo stock del producto");
            e.stock = nuevo;
            return console.log("Producto modificado con éxito")
        }
    });
}

var registrarVentas = () => {
    let aux = prompt("Ingrese el código del producto a vender:");    
    productos.forEach(e => {
        if (aux == e.codigo) {
            var aux2 = prompt("¿Cúantos productos quiere vender?");
            var aux3 = e.stock - aux2;
            if (aux3 < 0) {
                return console.log("Productos insuficientes");
            } else {
                e.stock = aux3;
                cont = cont + 1;
                total = total + (e.precio2 * aux2);
                return console.log("Producto vendido");                
            }
        }
    });    
}

var promedioVentas = () => {
    var promedio = total / cont;
    return console.log(`El promedio de ventas realizadas es ${promedio.toFixed(2)}`);
}

var stockCero = () => {
    var cero = [];
    productos.forEach(e => {
        if (e.stock == 0) {
            cero.push(e);
        }
    });

    if (cero.length == 0) {
        return console.log("No hay productos con stock 0");
    } else {
        return console.log(cero);
    }
}

menu();