import "@/scss/reset.css";
import "@/scss/utils.scss";
import "@/scss/components/navbar.scss";
import '@/scss/components/buttons.scss';
import "@/scss/pages/index.scss";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
