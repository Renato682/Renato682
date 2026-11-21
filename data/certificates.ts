export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    name: "Certificado de desenvolvimento",
    issuer: "Nome da instituição",
    date: "2025",
    url: "https://example.com",
  },
  {
    name: "Certificado de análise de dados",
    issuer: "Nome da instituição",
    date: "2025",
    url: "https://example.com",
  },
  {
    name: "Certificado de fundamentos de tecnologia",
    issuer: "Nome da instituição",
    date: "2024",
    url: "https://example.com",
  },
];
