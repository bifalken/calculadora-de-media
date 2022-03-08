const calculaNota = () => {
  const notaPrimeiroBimestre = parseFloat(
    document.getElementById("notaPrimeiroBimestre").value
  );
  const notaSegundoBimestre = parseFloat(
    document.getElementById("notaSegundoBimestre").value
  );
  const notaTerceiroBimestre = parseFloat(
    document.getElementById("notaTerceiroBimestre").value
  );
  const notaQuartoBimestre = parseFloat(
    document.getElementById("notaQuartoBimestre").value
  );

  const notaFinal = (
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4
  ).toFixed(2);

  let aprovacao;

  if (notaFinal <= 6.9) {
    aprovacao = "A nota mínima é 7. Portanto, você foi reprovado(a)! ):";
  } else {
    aprovacao = "A nota mínima é 7. Portanto, você foi aprovado(a). Parabéns!";
  }

  document.getElementById(
    "aprovacao"
  ).innerHTML = `Sua nota final é ${notaFinal}. ${aprovacao}`;
};
