let rank = "";

function calcularSaldoRankeadas(vitorias, derrotas) {
  let calculoVitorias = vitorias - derrotas;

  if (calculoVitorias < 10) {
    rank = "Ferro";
  } else if (calculoVitorias >= 11 && calculoVitorias <= 20) {
    rank = "Bronze";
  } else if (calculoVitorias >= 21 && calculoVitorias <= 50) {
    rank = "Prata";
  } else if (calculoVitorias >= 51 && calculoVitorias <= 80) {
    rank = "Ouro";
  } else if (calculoVitorias >= 81 && calculoVitorias <= 90) {
    rank = "Diamante";
  } else if (calculoVitorias >= 91 && calculoVitorias <= 100) {
    rank = "Lendário";
  } else if (calculoVitorias >= 101) {
    rank = "Imortal";
  }

  return console.log(
    `O Herói possui ${calculoVitorias} vitórias e está no rank ${rank}`
  );
}

calcularSaldoRankeadas(103, 6);
