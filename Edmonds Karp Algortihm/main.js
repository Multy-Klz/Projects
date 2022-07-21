class Node { 
    constructor(id, vizinhos) {
        this.id = id;
        this.vizinhos = vizinhos;
        this.pai = '';
    } 
}

let nodeList = [];
let node1 = [];
let i = 0;
let caminho = [];

            
//adicionar todos os Nodes numa lista seguindo o formato abaixo ('node do Nó', [arestas])
//[arestas] é no formato = ['Nó destino',custo],['Nó destino',custo],['Nó destino',custo]... como um vetor
for (let index = 0; index < 6; index++) {
    if (0 === index) { nodeList.push(node1 = new Node("1", [['2', 10], ['3', 15], ['4', 20]])); };
    if (1 === index) { nodeList.push(node1 = new Node("2", [['6', 10], ['5', 5]]));};
    if (2 === index) {nodeList.push(node1 = new Node("3", [['5', 12]])); };
    if (3 === index) { nodeList.push(node1 = new Node("4", [['5', 15], ['6', 5]]));  };
    if (4 === index) { nodeList.push(node1 = new Node("5", [['6', 20]]));  };
    if (5 === index) { nodeList.push(node1 = new Node("6", []));  };
    i++;
}

//função para exibir todos os Nodes de um grafo G orientado
function mostrarNodes(nodeList) {
    nodeList.forEach(element => {
        console.log('id: ' + element.id + '  pai: ' + element.pai + '   vizinho: ' + element.vizinhos);
    });
}


//apaga todos os Pais registrados
function resetPai() {
    console.log('Atualizando ! ! ! !');    
    nodeList.forEach(element => {
        element.pai = ''; 
    });
}

//verifica se já foi adicionado o elemento na lista de caminho[i]
function checkIfExist(caminho, id) {
    let bol = false;
    for (let index = 0; index < caminho.length; index++) {
        if (caminho[index] === id) bol = true;
    }
    return bol;
}

//retorna o caminho aumentante
function getPath(destino) {
    let path = [];
    let i = getNodeListIndex(nodeList, destino);
    path.unshift(destino);
    if (nodeList[i].pai === '') return null;
    while (nodeList[i].pai !== '') {
        i = getNodeListIndex(nodeList, nodeList[i].pai)
        path.unshift(nodeList[i].id);
    }
    return path;
}

//retorna o indice de do próximo elemento que será a origem, na próxima interação
function getCaminhoIndex(caminho, origem) {
        let i = origem;
    for (let index = 0; index < caminho.length; index++) {
        if (caminho[index] === origem) {
            i = index;  
        }
    }
    return i;
}

//retorna todos os Nós criados e seus atributos
function getNodeListIndex(nodeList, origem) {
    let i;
    for (let index = 0; index < nodeList.length; index++) {
        if (nodeList[index].id === origem) {
            i = index;  
        }
    }
    return i;
}

//retorna o fluxo de uma aresta
function getFluxoVizinho(node, vizinho){
    let fluxoVizinho = null;
    for (let index = 0; index < node.vizinhos.length; index++) {
        if(node.vizinhos[index][0] === vizinho) fluxoVizinho = node.vizinhos[index][1]; 
    }
    return fluxoVizinho
}

//Busca em largura para o primeiro caminho aumentante
function bfs(nodeList, origem, destino) {
    let header = 0;
    let i = 0;
    let path;
    let caminho = [];
    caminho.push(origem);
    while (i === 0) {
        
        header = getNodeListIndex(nodeList, origem);
        for (let index = 0; index < nodeList[header].vizinhos.length; index++) {
            if (checkIfExist(caminho,nodeList[header].vizinhos[index][0]) === false  && nodeList[header].vizinhos[index][1] > 0) {
                
                
                caminho.push(nodeList[header].vizinhos[index][0]);
                nodeList[getNodeListIndex(nodeList, nodeList[header].vizinhos[index][0])].pai = origem;
                
            }
        }

        
        header++;
        while (nodeList[header].pai === '' && nodeList[header].id != destino) {
            header++;
  
        }
        origem = caminho[getCaminhoIndex(caminho, nodeList[header].id)];
        console.log('buscando arestas de :  ' + origem);
        if (origem === destino || origem == null) i = 1;
    }
    path = getPath(destino);
    return path;
}

//reduz o gargalo de todas as arestas pertencentes ao caminho mínimo
function atualizarFluxo (nodeList, gargalo,path){

    for (let index = 0; index < path.length; index++) {
        let j = getNodeListIndex(nodeList, path[index]);
        
        for (let i = 0; i < nodeList[j].vizinhos.length; i++) {
            
            if(nodeList[j].vizinhos[i][0] === path[index+1]) nodeList[j].vizinhos[i][1] -= gargalo;
            
        }
    }
}

//retorna um vetor, contendo os Id's dos Nós com caminho aumentante
function fluxoMinimo(path, nodeList){
    let minFluxo = 1000;

  
    for (let index = path.length-1; index > 0; index--) {
        
        let destino = getNodeListIndex(nodeList,path[index-1])
        if(getFluxoVizinho(nodeList[destino], path[index]) < minFluxo) minFluxo = getFluxoVizinho(nodeList[destino], path[index]);
        

    }

    return minFluxo;
}

let fMax = 0;

function edmondsKarp(nodeList) {
    while (true) {
        let path = [];
        let gargalo
        path = bfs(nodeList, '1', '6');
        if (path === null) return false;
        gargalo = fluxoMinimo(path, nodeList);
        fMax = fMax + fluxoMinimo(path, nodeList);
        atualizarFluxo(nodeList, gargalo, path);
        resetPai();
        mostrarNodes(nodeList);
        console.log('------------------------ path: ' + path + '  fluxo minimo: '+  gargalo);
    }
    
}

edmondsKarp(nodeList);
console.log('Fluxo Máximo: ' + fMax);