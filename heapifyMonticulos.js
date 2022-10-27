//Convertir un array en un montículo
function heapify(element){
    let indice_hijo = 0;
    let temp=0;

    let nuevoHeap=[];
    nuevoHeap.push(undefined);

    for(let i=0;i<element.length;i++){

        //insertando el nuevo valor en el array heap
        nuevoHeap.push(element[i]);

        //indice del nuevo elemento
        indice_hijo = nuevoHeap.length - 1;
        indice_padre = Math.trunc(indice_hijo / 2);

        //compara padre e hijo e invierte valores si padre es mayor
        while (nuevoHeap[indice_padre] > nuevoHeap[indice_hijo]){
            //console.log("1111",indice_padre,indice_hijo,nuevoHeap[indice_padre] , nuevoHeap[indice_hijo]," - ",nuevoHeap);
            temp = nuevoHeap[indice_hijo];
            nuevoHeap[indice_hijo] = nuevoHeap[indice_padre];
            nuevoHeap[indice_padre] = temp;

            indice_hijo=indice_padre;
            indice_padre = Math.trunc(indice_hijo / 2);
            //console.log("2222",indice_padre,indice_hijo,nuevoHeap[indice_padre] , nuevoHeap[indice_hijo]," - ",nuevoHeap);
        }
    }
    return nuevoHeap;
}
    // salidas de muestras
    nuevoHeap = heapify([20, 3, 8, 14, 9, 6, 2]); // res= [undefined, 2, 6, 3, 9, 8, 14, 20]
    console.log(nuevoHeap);
    
    