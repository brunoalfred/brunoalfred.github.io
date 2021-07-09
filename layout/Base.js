import Background from "../components/background/Background";
import Footer from "../components/footer/footer";
import Header from '../components/header/Header';



export default function Base({ children }) {
    return (
     
     <Background>
     
                <Header />

                <div>
                    {children}
                </div>

                <Footer />
     
        </Background>
    )
};


export { Base }