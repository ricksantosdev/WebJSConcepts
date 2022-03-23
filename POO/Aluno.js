class Aluno {
    constructor(){
        this.nome ='Ricardo santos';
        this.idade = 39
    }

    Mostrar(){
        console.log("Nome " + this.nome + " Idade " + this.idade);
    }

}


let aluno = new Aluno();
aluno.Mostrar();