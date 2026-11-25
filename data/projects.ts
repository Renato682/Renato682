export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LudoPet",
    description:
      "Plataforma para organizar animais disponíveis para adoção e facilitar o acompanhamento de cada etapa.",
    image: "/projects/ludopet.svg",
    imageAlt: "Ilustração de uma pata em um cartão lavanda",
    category: "Aplicação web",
    technologies: ["Java", "Spring Boot", "MySQL"],
    repositoryUrl: "https://github.com/Vitoria1705/LudoPet",
    demoUrl: "https://github.com/Vitoria1705/LudoPet",
    featured: true,
  },
  {
    title: "Dashboard de vendas",
    description:
      "Painel interativo para acompanhar metas, faturamento por região e margem de lucro.",
    image: "/projects/sales-dashboard.svg",
    imageAlt: "Gráfico de vendas em um cartão azul",
    category: "Dados & BI",
    technologies: ["Power BI", "DAX", "Power Query"],
    repositoryUrl: "https://github.com/Renato682/Dashboard-de-vendas",
    demoUrl: "https://github.com/Renato682/Dashboard-de-vendas",
    featured: true,
  },
  {
    title: "Gestão clínica",
    description:
      "Visão operacional com indicadores de atendimento, ocupação, desempenho financeiro e espera.",
    image: "/projects/clinic-dashboard.svg",
    imageAlt: "Gráfico de indicadores em um cartão verde",
    category: "Dados & BI",
    technologies: ["Power BI", "DAX", "SQL"],
    repositoryUrl: "https://github.com/Renato682",
    demoUrl: "https://example.com",
  },
  {
    title: "Automação contábil",
    description:
      "Automação de tarefas repetitivas para agilizar o preenchimento de informações em um site.",
    image: "/projects/automation.svg",
    imageAlt: "Símbolo de código em um cartão pêssego",
    category: "Automação",
    technologies: ["Python", "PyAutoGUI"],
    repositoryUrl: "https://github.com/Renato682/Automa-o-python",
    demoUrl: "https://github.com/Renato682/Automa-o-python",
  },
];
