var convertidor = {
    medida: 0,
    unidad1: "",    
    unidad2: "",
    tipo: "",
    
    recibir : function recibir (medidaR, unidad1R, unidad2R, tipoR) {
        medida = medidaR;
        unidad1 = unidad1R;
        unidad2 = unidad2R;
        tipo = tipoR;        
        return console.log(`Medida: ${medida}, Unidad 1: ${unidad1}, Unidad 2: ${unidad2}, Tipo: ${tipo}`);
    },

    convertir : (convertir) => {
        let medidaAux = 0;       
        switch (tipo) {
            case ("L"):
                switch (unidad1) {
                    case "m":
                        switch (unidad2) {
                            case "cm":
                                medidaAux += medida * 100;
                                break;
                            case "km":
                                medidaAux += medida * 0.001;
                                break;
                            case "ft":
                                medidaAux += medida * 3.2808;
                                break;
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;
                    case "cm":
                        switch (unidad2) {
                            case "m":
                                medidaAux += medida * 0.01;
                                break;
                            default:                                
                                return console.log("Unidades no válidas");
                        }
                        break;
                    case "km":
                        switch (unidad2) {
                            case "m":
                                medidaAux += medida * 1000;
                                break;
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;
                    case "ft":
                        switch (unidad2) {
                            case "m":   
                                medidaAux += medida * 0.3048;
                                break;
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;
                    default:
                        return console.log("Unidades no válidas");                        
                } 
                break;               
            case "T":
                switch (unidad1) {
                    case "C":
                        switch (unidad2) {
                            case "K":
                                medidaAux += medida + 273.15;
                                break;
                            case "F":
                                medidaAux += ((9 * medida)/5) + 32;
                                break;                            
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;
                    case "F":
                        switch (unidad2) {
                            case "K":
                                medidaAux += ((5 * (medida - 32))/9) + 273.15;
                                break;
                            case "C":
                                medidaAux += ((5 * (medida - 32))/9);
                                break;                            
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;
                    case "K":
                        switch (unidad2) {
                            case "C":
                                medidaAux += medida - 273.15;
                                break;
                            case "F":
                                medidaAux += ((9 * (medida - 273.15))/5) + 32;
                                break;                            
                            default:
                                return console.log("Unidades no válidas");
                        }
                        break;                    
                    default:
                        return console.log("Unidades no válidas");                        
                }
        }
        return console.log(`Conversión: ${medidaAux.toFixed(4)} ${unidad2}`);
    }
}

var medidaR = prompt ("Ingrese la medida a convertir: ");
var unidad1R = prompt ("Ingrese la unidad de la medida: ");
var unidad2R = prompt ("Ingrese la unidad a la que se va a convertir: ");
var tipoR = prompt ("Ingrese el tipo de la medida: ");

convertidor.recibir(medidaR, unidad1R, unidad2R, tipoR);
convertidor.convertir();