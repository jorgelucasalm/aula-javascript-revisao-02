/*
1)      Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.

a) Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.
b) Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
c) Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
*/

function compra(carro){
  switch (carro){
    case "hatch":
      return "Compra efetuada com sucesso";
      break;
    case "sedans":
      return "Tem certeza que não prefere este modelo?";
      break;
      case "motocicletas":
        return "Tem certeza que não prefere este modelo?";
        break;
      case "caminhonetes":
        return "Tem certeza que não prefere este modelo?";
        break;
    default: 
      return "Não trabalhamos com este tipo de automóvel aqui!";
  }
}

console.log(compra("hatch"));
console.log(compra("sedans"));
console.log(compra("motocicletas"));
console.log(compra("caminhonetes"));
console.log(compra("camaro"));