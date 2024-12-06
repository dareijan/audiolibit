
import "./App.css";
import kirjat from './tiedot/kirjat.json'
import viimeksipaivitetty from './tiedot/viimeksipaivitetty.json'
import kannetvapaana from './tiedot/kannetvapaana.json'
import kannetlainassa from './tiedot/kannetlainassa.json'
import TaulukkoKomponentti from './komponentit/TaulukkoKomponentti'
import TaulukkoKuvaKomponentti from './komponentit/TaulukkoKuvaKomponentti'
import TaulukkoKuvaHarmaannettuKomponentti from './komponentit/TaulukkoKuvaHarmaannettuKomponentti'
import ViimeksiPaivitettyKomponentti from './komponentit/ViimeksipaivitettyKomponentti'

const App = () => {
    return (
    <p>
        <span align="center">
            <h1>Libit!</h1>
            <div>    
                <ViimeksiPaivitettyKomponentti data={viimeksipaivitetty} />
                <p align="center">Vaajakosken kirjasto Urheilutie 36, Vaajakoski</p>  
            </div> 
            <div>
                <TaulukkoKuvaKomponentti data={kannetvapaana} />
            </div>
            <div>
                <TaulukkoKuvaHarmaannettuKomponentti data={kannetlainassa} />
            </div>   
            <br />            
            <div class="intro">  
            
            - AudioLibit lyhyesti -<br />
            - suosituimpien lasten äänikirjojen saatavuus yhdellä sivulla -
            <br />         
            - päivitän tietoja omalla ajallani -
            <br />
            - jos haluat tietää vain kirjat jotka on suoraan lainattavissa, niinkuin videovuokraamoissa aikanaan, tämä on sinun sivusi - 
            <br />
            - kirja ovat vapaana kunnes joku asiakas sen varaa tai lainaa -
            <br />
            - näet viimeisimmän tiedon saatavuudesta tietysti kirjastossa asioidessasi -
            <br />
            -Tarja
                  
            </div>                   
            </span>
            <br />
            <br />
            <br />        
                
            <span >
                <TaulukkoKomponentti data={kirjat} />
            </span>
            <br />     
    </p>
    );
  };
  export default App;