import {
  BookOpen,
  Code2,
  Compass,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export type Hobby = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hobbies: Hobby[] = [
  {
    title: "Aprender sempre",
    description: "Explorar novas ferramentas e transformar curiosidade em projetos.",
    icon: BookOpen,
  },
  {
    title: "Criar soluções",
    description: "Automatizar tarefas e descobrir formas melhores de fazer as coisas.",
    icon: Code2,
  },
  {
    title: "Jogos",
    description: "Desafios, boas histórias e um jeito divertido de recarregar.",
    icon: Gamepad2,
  },
  {
    title: "Novos caminhos",
    description: "Conhecer lugares e buscar inspiração fora da rotina.",
    icon: Compass,
  },
];
