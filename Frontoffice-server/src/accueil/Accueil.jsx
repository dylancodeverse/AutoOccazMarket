import Filtre from "./Filtre";
import ListeAnnonce from "./ListeAnnonce";

export default function AccueilBody(){
    return (
        <div className="row">
            <Filtre/>
            <ListeAnnonce/>
        </div>
    )
}