export function verificarLogin(usuario, senha) {
  if (usuario === 'admin' && senha === 'admin') {
    return true;
  }

  return false;
}

export function realizarCalculo(n1, n2, op, setResultado) {
  const n1 = Number(n1);
  const n2 = Number(n2);

  switch (op) {
    case '+':
      setResultado(n1 + n2);
      break;

    case '-':
      setResultado(n1 - n2);
      break;

    case '*':
      setResultado(n1 * n2);
      break;

    case '/':
      setResultado(n1 / n2);
      break;

    default:
      setResultado('Operação inválida!');
  }
}
