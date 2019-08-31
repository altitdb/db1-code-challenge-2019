import React from 'react';
import testRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Titulo from './Titulo';

describe('Shallow tests', () => {
    test('First test', () => {
        expect(1+1).toBe(2);
    });
    test('Deveria renderizar de acordo com o título', () => {
        const tree = testRenderer.create(<Titulo>Meu título</Titulo>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Deveria ter a tag h1', () => {
        const component = shallow(<Titulo>Meu título</Titulo>);
        const element = component.getElement();
        expect(element.type).toBe('h1');
    });
    test('Deveria ter a cor verde', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const styleColor = component.props().style.color;
        expect(styleColor).toBe('green');
    });
    test('Deveria retornar o titulo correto', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const text = component.text();
        expect(text).toBe('Meu título');
    });
    test('Deveria retornar o titulo correto', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const text = component.text();
        expect(text).toBe('Meu título');
    });
    test('Deveria retornar o titulo correto', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const text = component.text();
        expect(text).toBe('Meu título');
    });
    test('Deveria retornar o titulo correto', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const text = component.text();
        expect(text).toBe('Meu título');
    });
    test('Deveria retornar o titulo correto', () => {
        const component = shallow(<Titulo textColor="green">Meu título</Titulo>);
        const text = component.text();
        expect(text).toBe('Meu título');
    });
});