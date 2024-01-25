import AccueilBody from "../accueil/Accueil";
import Header, { HeaderBottom } from "../components/header/Header";

export default function Accueil() {
    return (
        <div className="">
            <Header/>
            <HeaderBottom/>
            <div class="page-shop u-s-p-t-80">
                <div class="container">
                    <div class="row">
                        <AccueilBody/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}