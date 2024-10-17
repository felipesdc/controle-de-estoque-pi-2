export interface IProduto {
  produto_id?: number;
  produto_descricao: string;
  produto_fornecedor_id: number;
  produto_preco_id: number;
  produto_unidade_id: number;
  produto_categoria_id: number;
  produto_quantidade_estoque: number;
  produto_data_validade: Date;
  produto_codigo_barras: string;
  produto_estado: boolean;
}
