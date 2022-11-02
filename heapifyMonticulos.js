//Convertir un array en un montículo
function heapify(element){
    //crear monticulo inicial
    let temp=element[0];
    element[0]=undefined;
    element.push(temp);

    let nuevoHeap=[];
    for (let i = 0; i < element.length; i++) {
        nuevoHeap.push(element[i]);
    }

   
    //heapify de nuevo monticulo
    let j = nuevoHeap.length - 1;
    let idx_padre = Math.trunc(j / 2);
    let idx_hijoMenor = idx_padre * 2;
    let idx_hijoMayor = (idx_padre * 2) + 1;

    while (idx_padre > 0) {
        temp = nuevoHeap[idx_padre];

        if (nuevoHeap[idx_padre] > nuevoHeap[idx_hijoMayor]) {
                nuevoHeap[idx_padre] = nuevoHeap[idx_hijoMayor];
                nuevoHeap[idx_hijoMayor] = temp;
        }
        if (nuevoHeap[idx_padre] > nuevoHeap[idx_hijoMenor]) {
                nuevoHeap[idx_padre] = nuevoHeap[idx_hijoMenor];
                nuevoHeap[idx_hijoMenor] = temp;
        } 
        idx_padre = idx_padre - 1;
        idx_hijoMenor = idx_padre * 2;
        idx_hijoMayor = (idx_padre * 2) + 1;
    }

    return nuevoHeap;
}

    // salidas de muestras
    nuevoHeap = heapify([20, 3, 8, 14, 9, 6, 2]); // res= [undefined, 2, 6, 3, 9, 8, 14, 20]
    console.log(nuevoHeap);
    
    