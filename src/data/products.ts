export type ProductCategory =
  | "Ferrovias"
  | "Palanques e cercas"
  | "Madeira serrada"
  | "Biomassa"
  | "Outros";

export type Product = {
  title: string;
  category: ProductCategory;
  description: string;
  specs?: string[];
  prices?: {
    label: string;
    value: string;
  }[];
};

export const products: Product[] = [
  {
    title: "Dormentes Bitola Métrica",
    category: "Ferrovias",
    description:
      "Dormentes nas medidas padrão de mercado com 16 cm x 22 cm x 200 cm, indicados para estradas de ferro e ramais com bitola de 1 metro, comuns nas regiões Sul, Sudeste e Nordeste. Podem ser entregues furados, entalhados e emplacados, conforme a necessidade do cliente.",
    specs: [
      "Medidas padrão: 16 cm x 22 cm x 200 cm",
      "Aplicação em estradas de ferro e ramais",
      "Bitola de 1 metro",
      "Pode ser entregue furado",
      "Pode ser entregue entalhado",
      "Pode ser entregue emplacado",
      "Linha completa para pontes e AMV",
    ],
  },
  {
    title: "Dormentes Bitola Larga",
    category: "Ferrovias",
    description:
      "Dormentes em medida padrão de mercado com 17 cm x 24 cm x 280 cm, utilizados em ferrovias de bitola larga, bitola padrão 1.435 mm e bitola mista. Também podem ser fornecidos furados, entalhados e emplacados conforme o projeto.",
    specs: [
      "Medidas padrão: 17 cm x 24 cm x 280 cm",
      "Aplicação em bitola larga",
      "Aplicação em bitola padrão 1.435 mm",
      "Aplicação em bitola mista",
      "Pode ser entregue furado",
      "Pode ser entregue entalhado",
      "Pode ser entregue emplacado",
      "Linha completa para pontes e AMV",
    ],
  },
  {
    title: "Dormentes Especiais",
    category: "Ferrovias",
    description:
      "Dormentes para aparelhos de mudança de via, pontes e situações com exigência de carga extrema. São elaborados nas dimensões solicitadas pelo cliente, de acordo com a aplicação.",
    specs: [
      "Produção sob medida",
      "Aplicação em AMV",
      "Aplicação em pontes",
      "Indicado para carga extrema",
      "Projeto conforme necessidade do cliente",
    ],
  },
  {
    title: "Dormente de Eucalipto Citriodora - 2,80 m",
    category: "Ferrovias",
    description:
      "Dormente em forma prismática, com tratamento em autoclave e acabamento furado e entalhado, indicado para aplicações ferroviárias.",
    specs: [
      "Comprimento: 2800 mm",
      "Largura: 240 mm",
      "Altura: 170 mm",
      "Tratamento em autoclave com Osmose K33 CCA",
      "Acabamento: furado e entalhado",
    ],
  },
  {
    title: "Dormente de Eucalipto Citriodora para AMV",
    category: "Ferrovias",
    description:
      "Dormentes para aplicações específicas em aparelhos de mudança de via, produzidos com Eucalyptus citriodora, sem furo e sem entalhe, com dispositivo anti-racha.",
    specs: [
      "Largura: 240 mm",
      "Altura: 170 mm",
      "Comprimentos sob especificação",
      "Sem furo e sem entalhe",
      "Dispositivo anti-racha",
      "Tratamento em autoclave com Osmose K33 CCA",
    ],
  },
  {
    title: "Cavaco de Eucalipto",
    category: "Biomassa",
    description:
      "Produto sustentável obtido pela trituração de madeira de reflorestamento, amplamente utilizado como biomassa para geração de energia em caldeiras industriais, cerâmicas e na fabricação de papel e celulose.",
    specs: [
      "Biomassa renovável",
      "Indicado para geração de vapor e calor",
      "Uso em caldeiras industriais",
      "Uso em cerâmicas",
      "Uso na fabricação de papel e celulose",
      "Excelente custo-benefício",
      "Neutralidade de carbono",
    ],
  },
  {
    title: "Lascas 5 furos - 2,40 m",
    category: "Palanques e cercas",
    description:
      "Peças para cercas e aplicações rurais, disponíveis em diferentes bitolas.",
    prices: [
      { label: "Bitola 06 a 08", value: "R$ 22,00 un | R$ 264,00 dúzia" },
      { label: "Bitola 09 a 11", value: "R$ 38,00 un | R$ 456,00 dúzia" },
      { label: "Bitola 12 a 15", value: "R$ 56,00 un | R$ 672,00 dúzia" },
      { label: "Bitola 16 a 18", value: "R$ 72,00 un | R$ 864,00 dúzia" },
    ],
  },
  {
    title: "Lascão 6 furos - 2,40 m",
    category: "Palanques e cercas",
    description:
      "Peça aberta para aplicações rurais e cercamentos.",
    prices: [{ label: "Valor", value: "R$ 56,00 un | R$ 672,00 dúzia" }],
  },
  {
    title: "Palanque 5 furos - 3,20 m",
    category: "Palanques e cercas",
    description:
      "Palanques robustos para cerca, mangueira e estrutura rural.",
    prices: [
      { label: "Bitola 15 a 17", value: "R$ 130,00" },
      { label: "Bitola 17 a 21", value: "R$ 170,00" },
      { label: "Bitola 22 a 25", value: "R$ 260,00" },
    ],
  },
  {
    title: "Palanque 3,00 m",
    category: "Palanques e cercas",
    description:
      "Palanques em diferentes bitolas para aplicações variadas.",
    prices: [
      { label: "Bitola 15 a 17", value: "R$ 145,00" },
      { label: "Bitola 19 a 21", value: "R$ 185,00" },
      { label: "Bitola 22 a 25", value: "R$ 275,00" },
    ],
  },
  {
    title: "Balancins e balaustra",
    category: "Palanques e cercas",
    description:
      "Peças auxiliares para cercamento e acabamento estrutural.",
    prices: [
      { label: "Balancin 5 furos - 1,25 m", value: "R$ 5,00" },
      { label: "Balancin 6 furos - 1,40 m", value: "R$ 6,00" },
      { label: "Balaustra - 1,50 m", value: "R$ 3,75" },
    ],
  },
  {
    title: "Madeira serrada tratada",
    category: "Madeira serrada",
    description:
      "Madeira serrada para construção e aplicações estruturais.",
    prices: [
      { label: "Até 5 m", value: "R$ 3.000,00 / m³" },
      { label: "Sem tratamento", value: "R$ 2.900,00 / m³" },
      { label: "Só plainada", value: "R$ 3.800,00 / m³" },
    ],
  },
  {
    title: "Vigas, tábuas, caibros e ripas",
    category: "Madeira serrada",
    description:
      "Peças para construção civil e estrutura, com valores por metro.",
    prices: [
      { label: "Viga 6 x 12", value: "R$ 21,60" },
      { label: "Viga 6 x 16", value: "R$ 28,80" },
      { label: "Tábua 3 x 12", value: "R$ 10,80" },
      { label: "Tábua 3 x 15", value: "R$ 13,50" },
      { label: "Tábua 3,5 x 15", value: "R$ 15,75" },
      { label: "Tábua casa 2,2 x 21", value: "R$ 13,86" },
      { label: "Caibro 5 x 6", value: "R$ 9,00" },
      { label: "Ripão ternite 3,5 x 7", value: "R$ 7,35" },
      { label: "Ripa telha 2,5 x 5", value: "R$ 3,75" },
      { label: "Matajunta 1 x 6", value: "R$ 1,80" },
    ],
  },
];