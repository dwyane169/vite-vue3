import {
    Button, Col, Row
} from 'vant';

const elementComponents = [
    Button, Col, Row
];


export function usePlugins(app: any) {
    elementComponents.forEach((component) => {
        app.use(component);
    });
}
