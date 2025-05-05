export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

export interface ChatbotOption {
  id: string;
  label: string;
  response: string;
}

export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}