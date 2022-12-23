let fila = [];
let opcao = "";

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "\nPacientes na fila: " + pacientes +
    "\n1. Novo paciente" +
    "\n2. Consultar paciente" +
    "\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Informe o paciente a ser adicionado: ")
      fila.push(novoPaciente)
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila.");
      } else {
        alert("Não há pacientes na fila!")
      }
      break;
    case "3":
      alert("Saindo...")
      break;
    default:
      alert("Opção Inválida!")
  }
} while (opcao !== "3");