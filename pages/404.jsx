import { useRouter } from 'next/router'
import Layout from "./components/Layout"

export default function Custom404() {
  const router = useRouter()

  return (
    <Layout>
      <h2>404 - Page Not Found</h2>
      <a onClick={() => router.back()}>Back</a>
    </Layout>
  )
}