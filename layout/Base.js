import Background from "../components/background/Background";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import styles from './Base.module.css';


export default function Base({ children }) {
    return (
        <Background>
            <Header />
            <main>{children}</main>
            <Footer />
        </Background>
    )
};

export { Base }