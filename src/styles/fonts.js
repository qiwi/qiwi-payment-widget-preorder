const fontWeights = [100, 300, 500, 700, 900];

const fontFace = (fontWeight) => {
    return `
        @font-face {
            font-family: "MuseoSansCyrl";
            src:  
                url('${require(`../font/MuseoSansCyrl/museosanscyrillic-${fontWeight}-cyrillic/MuseoSansCyrl-${fontWeight}-webfont.woff2`)}') format('woff2'),
                url('${require(`../font/MuseoSansCyrl/museosanscyrillic-${fontWeight}-cyrillic/MuseoSansCyrl-${fontWeight}-webfont.woff`)}') format('woff') ,
                url('${require(`../font/MuseoSansCyrl/museosanscyrillic-${fontWeight}-cyrillic/MuseoSansCyrl-${fontWeight}-webfont.ttf`)}') format('truetype') ;
            font-weight: ${fontWeight};
            font-style: normal;
        }
    `;
};


const fonts = fontWeights
    .map((weight) => {
        return fontFace(weight);
    })
    .join('');

export default fonts;
