import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InfoItem } from './components/infoItem';
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { GridItem } from './components/GridItem';
import { formateTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {

    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);


    useEffect(() => {
        resetAndCreateGrid();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) {
                setTimeElapsed(timeElapsed + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [playing, timeElapsed]);

    const resetAndCreateGrid = () => {
        // Passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        // Passo 2 - criar o grid
        let tmpGrid: GridItemType[] = [];
        for (let i = 0; i < (items.length * 2); i++) {
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false
            });
        }
        // Preenchendo grid
        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = i;
            }
        }

        setGridItems(tmpGrid);

        // Passo 3 - começar o jogo
        setPlaying(true);

    }

    const handleItemClick = (index: number) => {
        if (playing && index !== null && shownCount < 2) {
            let tmpGrid = [...gridItems];

            if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
                tmpGrid[index].shown = true;
                setShownCount(shownCount + 1);
            }

            setGridItems(tmpGrid);
        }
    }

    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href=''>
                    <img src={logoImage} alt="" width='200' />
                </C.LogoLink>

                <C.InfoArea>
                    shownCount: {shownCount}
                    <InfoItem label="Tempo" value={formateTimeElapsed(timeElapsed)} />
                    <InfoItem label="Movimentos" value="00" />
                </C.InfoArea>

                <Button label='Reniciar' icon={RestartIcon} onClick={resetAndCreateGrid} />
            </C.Info>
            <C.GridArea>
                <C.Grid>
                    {gridItems.map((item, index) => (
                        <GridItem
                            key={index}
                            item={item}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </C.Grid>
            </C.GridArea>
        </C.Container>
    );
}
export default App;