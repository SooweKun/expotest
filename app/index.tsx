import { Redirect } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Index() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Redirect href="/chat" />
    </QueryClientProvider>
  );
}
