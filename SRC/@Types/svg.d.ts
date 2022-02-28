declare module "*.svg"{
import React from "react"; // importar o React para usar o SVG como componente...
import {SvgProps} from 'react-native-svg'// importar todas as propriedades do SVG no react...
const content: React.FC<SvgProps> // o conteudo e um functional content (FC) do SVGPROPS
export default content; // exporta o conteudo tipado
}

