import React, {useState, useEffect, useContext} from 'react';
import ThemeContext from '../context/ThemeContext.js';



const Header = () => {
//variables 
 //textos
 const english ="Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english - Text in english" ;
 const spanish ="Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - Texto en español - "; 
//setStates
 //const [variableDeEstado, funcionQueModificaElEstado] = useState ("valor por defecto"); <------Sintaxis de un destructuring useState
const [lenguaje, setLenguaje] = useState(false); //0= español 1=ingles
const {theme, updateTheme} = useContext(ThemeContext);


//funciones
 const changeLenguaje=()=>{ 
     setLenguaje(!lenguaje);
     theme === "englishColors" ? updateTheme("spanishColors"): updateTheme("englishColors");
 }

//useEffects aqui
useEffect(()=>{
    if(lenguaje){console.log("ingles");
    } console.log("español");     
    
}, [lenguaje]);
let spanishFlag="https://upload.wikimedia.org/wikipedia/commons/8/81/Bandera_de_Espa%C3%B1a_1978.png";
const englishFlag="https://www.ecured.cu/images/thumb/a/a7/Bandera-de-inglaterra-400x240.png/260px-Bandera-de-inglaterra-400x240.png";
    return (
        <div className="Header">
           
            <nav><h1> Mi lista mamalona </h1>
            
            <button type="button" onClick={changeLenguaje}>{`${lenguaje? 'English': 'Español'}`} </button> <img onClick={changeLenguaje} src={lenguaje? englishFlag:spanishFlag}  alt="" />
            
            </nav>
           
            
                <p> {lenguaje? spanish : english}</p>
            
        </div>
    );
   
};
export default Header;