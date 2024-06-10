// Reduzindo o uso de IFs no código
// Object Literals | Objetos Literais

getStatusPerOrder(status: number): string {
  if (status === 0) {
    return 'Error'
  }
  if (status === 1) {
    return 'Pendente'
  }
  if (status === 2) {
    return 'Em Andamento'
  }
  if (status === 3) {
    return 'Sucesso'
  }
  else {
    return '-'
  }
}

enum OrderStatus {
  Erro = 0,
  Pendente = 1,
  EmAndamento = 2,
  Sucesso = 3
}

getStatusPerOrder(status: OrderStatus): string {
  return OrderStatus[status];
}
