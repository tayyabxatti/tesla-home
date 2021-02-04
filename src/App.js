import './App.css';
import Headers from './components/header';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/item.js'
function App() {
  return (
    <div className="App">
      <Headers/>
      <div className="app__itemsContainer">
        <Item
        title='Lowest Cost OSlar Panels in America'
        desc='Money-back gurantee'
        backgroundImgImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first 
        />

        <Item
        title='Model S'
        desc='Money-back gurantee'
        backgroundImg={ModelS}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />

        <Item
        title='Model X'
        desc='Money-back gurantee'
        backgroundImg={ModelX}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />

        <Item
        title='Model Y'
        desc='Money-back gurantee'
        backgroundImg={ModelY}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />

        <Item
        title='Model 3'
        desc='Money-back gurantee'
        backgroundImg={Model3}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />

        <Item
        title='Solar Roof'
        desc='Money-back gurantee'
        backgroundImg={SolarRoof}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />

        <Item
        title='Accessories' 
        desc='Money-back gurantee'
        backgroundImg={Accessories}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
         />
        
      </div>
    </div>
  );
}

export default App;
  