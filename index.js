import {Select} from "./select/select";
import './select/styles.scss';

const select = new Select('#select', {
    placeholder: 'Please choose an element',
    selectedId: '2',
    data: [
        {id: '1', value: 'First'},
        {id: '2', value: 'Second'},
        {id: '3', value: 'Third'},
        {id: '4', value: 'Fourth'},
        {id: '5', value: 'Fifth'},
        {id: '6', value: 'Sixth'},
        {id: '7', value: 'Seventh'},
    ],
});

window.s = select;