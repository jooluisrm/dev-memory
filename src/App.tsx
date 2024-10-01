import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InfoItem } from './components/infoItem';
import RestartIcon from './svgs/restart.svg';

const App = () => {

    const resetAndCreateGrid = () => {

    }

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

                <Button label='Reniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/>
            </C.Info>
            <C.GridArea>
                ...
            </C.GridArea>
        </C.Container>
    );
}
export default App;