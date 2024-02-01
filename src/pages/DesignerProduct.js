import { useState } from 'react';
import { ButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap';
import style from './DesignerProduct.module.css'

function DesignerProduct() {

    let [좋아요, 좋아요변경] = useState(0);
    let [좋아요2, 좋아요변경2] = useState(0);
    let [좋아요3, 좋아요변경3] = useState(0);

const [checked, setChecked] = useState(false);
const [radioValue, setRadioValue] = useState('1');

const radios = [
    { name: '최신순', value: '1' },
    { name: '작업순', value: '2' },
];

return (
    <div>
    <div className="pageInfo">
        <h3>앙드레김 디자이너 작업물 목록</h3>
        <p>(사진을 클릭하시면 상세 정보로 이동합니다)</p>
    </div>
        <h6 className="arrayList">정렬</h6>
        <div className="arrayButton">
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
    <div className="product">
        <Container>
        <Row>
            <Col sm={6}>
            <img src="/reformBefore1.png" width={445} height={360} border={1}/>
            <h4>원본</h4>
            </Col>
            <Col sm={6}>
            <img src="/reform1.png" width={445} height={360}/>
            <h4>리폼 완성본 &nbsp; <span onClick={()=>{ 좋아요변경(좋아요+1) }}>👍</span> {좋아요} </h4>
            </Col>
            <Col sm={6}>
            <img src="/reformBefore2.png" width={445} height={360}/>
            <h4>원본</h4>
            </Col>
            <Col sm={6}>
            <img src="/reform2.png" width={445} height={360} border={1}/>
            <h4>리폼 완성본&nbsp; <span onClick={()=>{ 좋아요변경2(좋아요2+1) }}>👍</span>{좋아요2}</h4>
            </Col>
            <Col sm={6}>
            <img src="/reformBefore3.png" width={445} height={360}/>
            <h4>원본</h4>
            </Col>
            <Col sm={6}>
            <img src="/reform3.png" width={445} height={360}/>
            <h4>리폼 완성본&nbsp; <span onClick={()=>{ 좋아요변경3(좋아요3+1) }}>👍</span>{좋아요3}</h4>
            </Col>
        </Row>
        </Container>
    </div>
    </div>
);
}

export default DesignerProduct;