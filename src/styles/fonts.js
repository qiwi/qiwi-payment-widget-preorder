import MuseoSansCyrl100woff2 from '../fonts/MuseoSansCyrl/museosanscyrillic-100-cyrillic/MuseoSansCyrl-100-webfont.woff2';
import MuseoSansCyrl300woff2 from '../fonts/MuseoSansCyrl/museosanscyrillic-300-cyrillic/MuseoSansCyrl-300-webfont.woff2';
import MuseoSansCyrl500woff2 from '../fonts/MuseoSansCyrl/museosanscyrillic-500-cyrillic/museosanscyrl-500-webfont.woff2';
import MuseoSansCyrl700woff2 from '../fonts/MuseoSansCyrl/museosanscyrillic-700-cyrillic/MuseoSansCyrl-700-webfont.woff2';
import MuseoSansCyrl900woff2 from '../fonts/MuseoSansCyrl/museosanscyrillic-900-cyrillic/MuseoSansCyrl-900-webfont.woff2';

import MuseoSansCyrl100woff from '../fonts/MuseoSansCyrl/museosanscyrillic-100-cyrillic/MuseoSansCyrl-100-webfont.woff';
import MuseoSansCyrl300woff from '../fonts/MuseoSansCyrl/museosanscyrillic-300-cyrillic/MuseoSansCyrl-300-webfont.woff';
import MuseoSansCyrl500woff from '../fonts/MuseoSansCyrl/museosanscyrillic-500-cyrillic/museosanscyrl-500-webfont.woff';
import MuseoSansCyrl700woff from '../fonts/MuseoSansCyrl/museosanscyrillic-700-cyrillic/MuseoSansCyrl-700-webfont.woff';
import MuseoSansCyrl900woff from '../fonts/MuseoSansCyrl/museosanscyrillic-900-cyrillic/MuseoSansCyrl-900-webfont.woff';

import MuseoSansCyrl100ttf from '../fonts/MuseoSansCyrl/museosanscyrillic-100-cyrillic/MuseoSansCyrl-100-webfont.ttf';
import MuseoSansCyrl300ttf from '../fonts/MuseoSansCyrl/museosanscyrillic-300-cyrillic/MuseoSansCyrl-300-webfont.ttf';
import MuseoSansCyrl500ttf from '../fonts/MuseoSansCyrl/museosanscyrillic-500-cyrillic/MuseoSansCyrl-500-webfont.ttf';
import MuseoSansCyrl700ttf from '../fonts/MuseoSansCyrl/museosanscyrillic-700-cyrillic/MuseoSansCyrl-700-webfont.ttf';
import MuseoSansCyrl900ttf from '../fonts/MuseoSansCyrl/museosanscyrillic-900-cyrillic/MuseoSansCyrl-900-webfont.ttf';

export default `@font-face {
    font-family: "MuseoSansCyrl";
    src:  
        url('${MuseoSansCyrl100woff2}') format('woff2'),
        url('${MuseoSansCyrl100woff}') format('woff') ,
        url('${MuseoSansCyrl100ttf}') format('truetype') ;
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: "MuseoSansCyrl";
    src: 
        url('${MuseoSansCyrl300woff2}') format('woff2'),
        url('$${MuseoSansCyrl300woff}') format('woff'),
        url('${MuseoSansCyrl300ttf}') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "MuseoSansCyrl";
    src:  
        url('${MuseoSansCyrl500woff2}') format('woff2'),
        url('$${MuseoSansCyrl500woff}') format('woff'),
        url('${MuseoSansCyrl500ttf}') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "MuseoSansCyrl";
    src:  
        url('${MuseoSansCyrl700woff2}') format('woff2'),
        url('$${MuseoSansCyrl700woff}') format('woff'),
        url('${MuseoSansCyrl700ttf}') format('truetype');
    font-weight: 700;
    font-style: normal;

}

@font-face {
    font-family: "MuseoSansCyrl";
    src: 
        url('${MuseoSansCyrl900woff2}') format('woff2'),
        url('$${MuseoSansCyrl900woff}') format('woff'),
        url('${MuseoSansCyrl900ttf}') format('truetype');
    font-weight: 900;
    font-style: normal;
}`;
