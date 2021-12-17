//Métodos: Adicionar, ler e deletar

const myMap = new Map()

//Adicionar MAP
myMap.set('apple', 'fruit');
//Map(1) {"apple" => "fruit"}


//Ler
myMap.get('apple');
//"fruit"

//Adicionar
myMap.delete("apple")
//true

//ler
myMap.get('apple')
//undefined