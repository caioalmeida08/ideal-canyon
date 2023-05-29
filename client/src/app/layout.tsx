import Layout from "../components/Layout/Layout"

export const metadata = {
  title: 'Ideal Canyon',
  description: 'O lugar ideal para encontrar a sua scooter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
