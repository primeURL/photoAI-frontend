

import { Train } from "~/components/trainModal";
import type { Route } from "./+types/home";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoAI - Personalized AI Generator" },
    { name: "description", content: "Welcome to PhotoAI Website" },
  ];
}


export default function Dashboard() {
  return <div className="flex items-center justify-center">
    <Tabs defaultValue="account" className="w-[80%]">
  <TabsList>
    <TabsTrigger value="generate_images">Generate Images</TabsTrigger>
    <TabsTrigger value="train_modal">Train Modal</TabsTrigger>
  </TabsList>
  <TabsContent value="accgenerate_imagesount">Make changes to your account here.</TabsContent>
  <TabsContent value="train_modal">{<Train/>}</TabsContent>
</Tabs>

  </div>
}
