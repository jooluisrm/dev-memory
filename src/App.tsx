import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { InfoItem } from './components/infoItem';

const App = () => {
    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href=''>
                    <img src={logoImage} alt="" width='200' />
                </C.LogoLink>

                <C.InfoArea>
                    <InfoItem label="Tempo" value="00:00"/>
                    <InfoItem label="Movimentos" value="00"/>
                </C.InfoArea>

                <button>Reniciar</button>
            </C.Info>
            <C.GridArea>
                ...
            </C.GridArea>
        </C.Container>
    );
}
export default App;