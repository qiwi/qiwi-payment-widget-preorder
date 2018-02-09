import fonts from './fonts';

const common = `
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "MuseoSansCyrl", 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.centered {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
}`;

const styles = `
${fonts} 
${common}`;

export default styles;
