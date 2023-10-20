import Link from "../src/components/Link"
import Head from 'next/head';

export default function FAQPage() {
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Isadora's site - FAQ page</h1>
            <Link href="/">
                Ir para Home
            </Link>
        </div>
    )
}