// aqui usei a famosa recursão, uma função que chama ela própria 

function stringAoContrario(str) {
    return (str === '') ? '' : stringAoContrario(str.substr(1)) + str.charAt(0);
  }
  console.log(stringAoContrario("Fala galera da Target, estou ansioso para fazer parte do time!!"));