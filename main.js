
class List {

    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }

}



class TodoList extends List {
    constructor(){
        super(); // para adicionar novas propriedades
        
    }

     soma(a,b){
      return a +b;
    }

}
// class apenas para metodos estaticos 
// metodos que nao alteram valores das propriedades 
// apenas retonam resultados da execução da function 

class  maths { 
  
    static soma (a,b){
        const x = a + b;
        return x ;
    }   
}

const Minhalista = new TodoList();

document.getElementById('novotodo').onclick = () => {
    Minhalista.add('Novo Todo');
    console.log(Minhalista.soma(23 , 1));
    console.log(maths.soma(23 , 1)); 

}



// var : 

// let : variables within braces


// const : variable of type "read-only", the value connot be changed
// we can muttate a variable: like this 
// { 
//    const user = {nome :'pedro'}  
//    user.nome = 'joao'; 
// }

// this is possible;

// on array's we can push items and delete etc, but we cannot attribute another array 