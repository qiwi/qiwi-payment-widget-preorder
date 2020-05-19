import {commonColors} from "../../../styles";
import Color from'color';

export function getKUBIcon(backgroundColor) {
    const rgbCssColor = getRgbCssColor(backgroundColor);

    return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
  <path fill="${rgbCssColor}" fill-rule="evenodd" d="M36,23.375 L2,23.375 L2,10.625 C2,8.902 3.415,7.5 5.154,7.5 L32.846,7.5 C34.585,7.5 36,8.902 36,10.625 L36,23.375 Z M36,29.875 C36,31.598 34.585,33 32.846,33 L5.154,33 C3.415,33 2,31.598 2,29.875 L2,25.375 L36,25.375 L36,29.875 Z M11.692,5.125 C11.692,3.402 13.107,2 14.846,2 L23.154,2 C24.893,2 26.308,3.402 26.308,5.125 L26.308,5.5 L11.692,5.5 L11.692,5.125 Z M32.846,5.5 C35.688,5.5 38,7.799 38,10.625 L38,29.875 C38,32.701 35.688,35 32.846,35 L5.154,35 C2.312,35 0,32.701 0,29.875 L0,10.625 C0,7.799 2.312,5.5 5.154,5.5 L9.692,5.5 L9.692,5.125 C9.692,2.299 12.004,0 14.846,0 L23.154,0 C25.996,0 28.308,2.299 28.308,5.125 L28.308,5.5 L32.846,5.5 Z M19,17 C17.896,17 17,17.896 17,19 C17,20.104 17.896,21 19,21 C20.104,21 21,20.104 21,19 C21,17.896 20.104,17 19,17 Z" transform="translate(3 4)"/>
</svg>`);
}

function getRgbCssColor(color){
    const rgbNumbers = new Color(color || commonColors.BLACK).array();
    return `rgb(${rgbNumbers[0]}, ${rgbNumbers[1]}, ${rgbNumbers[2]})`;
}