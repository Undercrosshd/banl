import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import style from './DesignerSearch.module.css'

function DesignerSearch() {

const [checked, setChecked] = useState(false);
const [radioValue, setRadioValue] = useState('1');

const radios = [
    { name: '의뢰순', value: '1' },
    { name: '최신순', value: '2' },
];

return (
    <div>
    <div className="DesignerSearch-array">
        <h6>정렬</h6>
        <ButtonGroup className="ToggleButton">
        {radios.map((radio, idx) => (
        <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
            {radio.name}
        </ToggleButton>
        ))}
        </ButtonGroup>
    </div>
    <section className="DesignerSearch-Section">
        <div className="DesignerSearch-Article">
        <span className="designer_img"><img src="Designer1.png" width={224} height={350}></img></span>
        <span className="designer_img"><img src="Designer2.png" width={224} height={350}></img></span>
        <span className="designer_img"><img src="Designer3.png" width={224} height={350}></img></span>
        </div>
        <div className="DesignerSearch-Article">
        <span className="designer_img"><img src="Designer4.png" width={224} height={350}></img></span>
        <span className="designer_img"><img src="Designer5.png" width={224} height={350}></img></span>
        <span className="designer_img"><img src="Designer6.png" width={224} height={350}></img></span>
        </div>
    </section>
    </div>
);
}

export default DesignerSearch;