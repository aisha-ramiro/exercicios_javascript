let cursos_idiomas = [
    {nome:"Inglês", preco:1000, carga_horaria:160},
    {nome:"Espanhol", preco:1200, carga_horaria:180},
    {nome:"Russo", preco:1600, carga_horaria:300},
    {nome:"Francês", preco:4500, carga_horaria:210},
    {nome:"Russo", preco:1500, carga_horaria:280}


];

for(let curso of cursos_idiomas){
   
    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_aula = preco_curso/carga_horaria_curso;

    console.log(`Idioma: ${nome_curso}`);
    console.log(`Preço total do curso: R$ ${preco_curso}`);
    console.log(`Carga horária total do curso: ${carga_horaria_curso} horas`);

    if (preco_hora_aula >= 15) {
        console.log("O valor da hora/aula é igual ou superior a R$15");
    } else {
        console.log("O valor da hora/aula é inferior a R$15");
    }

    console.log(" ");

}