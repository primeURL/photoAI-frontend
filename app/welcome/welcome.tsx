import { API_CONFIG } from "~/config";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      {API_CONFIG.backend_url}
      {/* {API_CONFIG.clerk_secret_key} */}
       Welcome to PhotoAI
    </main>
  );
}

