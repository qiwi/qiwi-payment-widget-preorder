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
    background-color: #ffffff;

    @media (max-width: 450px) {
        background-color: rgb(247,247,247);
    }
}
`;

const styles = `
${fonts} 
${common}`;

export default styles;
