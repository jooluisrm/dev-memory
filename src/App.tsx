import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';

const App = () => {
    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href=''>
                    <img src={logoImage} alt="" width='200' />
                </C.LogoLink>

                <C.InfoArea>
                    ...
                </C.InfoArea>

                <button>Reniciar</button>
            </C.Info>
            <C.GridArea>

            </C.GridArea>
        </C.Container>
    );
}
export default App;