export type Education = {
  course: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    course: "Tecnologia da Informação",
    institution: "Formação acadêmica",
    period: "Em andamento",
    description:
      "Estudos em desenvolvimento de software, bancos de dados e fundamentos de tecnologia.",
  },
  {
    course: "Desenvolvimento de software",
    institution: "Cursos e projetos práticos",
    period: "Formação contínua",
    description:
      "Aprendizado aplicado em Java, Spring Boot, PHP, Python e desenvolvimento de APIs.",
  },
  {
    course: "Análise de dados e Business Intelligence",
    institution: "Cursos e projetos práticos",
    period: "Formação contínua",
    description:
      "Prática com Power BI, DAX, Power Query, modelagem de dados e automação de processos.",
  },
];
