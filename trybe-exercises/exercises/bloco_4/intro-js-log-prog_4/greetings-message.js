let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente:"Sim",
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "Sim",
}

//console.log('Bem vinda', info.personagem);

for (key in info) {
    if (info[key] == 'Sim') {
        console.log("Ambos recorrentes");
        break;
    }
    console.log(info[key] + ' e ' + info2[key]);
}