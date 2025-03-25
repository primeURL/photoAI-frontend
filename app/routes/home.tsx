import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoAI - Personalized AI Generator" },
    { name: "description", content: "Welcome to PhotoAI Website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
