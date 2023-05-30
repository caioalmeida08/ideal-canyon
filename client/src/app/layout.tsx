import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

export const metadata = {
  title: "Ideal Canyon",
  description: "O lugar ideal para encontrar a sua scooter.",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <QueryClientProvider client={queryClient}>
          <Layout>
            {children}
            <Footer />
          </Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
