import test from './test.config';
import production from './production.config';
import development from './development.config';
if (!process.env.REACT_APP_NODE_ENV) {
    process.env.REACT_APP_NODE_ENV = process.env.NODE_ENV;
}
let env = process.env.REACT_APP_NODE_ENV || 'development';
let config = {
    test,
    development,
    production
};
export default config[env];