export type MovimentacaoEstoque = {
  movimento_id?: number;
  movimento_produto_id: number;
  movimento_produto?: string;
  movimento_usuario_id?: number;
  movimento_usuario?: string;
  movimento_quantidade: number;
  movimento_tipo: string;
  movimento_data: Date;
  movimento_observacao: string;
};
