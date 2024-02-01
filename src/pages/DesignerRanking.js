import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function DesignerRanking() {

    let [좋아요, 좋아요변경] = useState(0);
    let [좋아요2, 좋아요변경2] = useState(0);
    let [좋아요3, 좋아요변경3] = useState(0);

return (
    <div>
        <div className="pageInfo">
            <h3>현재 사용자들이 가장 선호하는 디자인 Top 10</h3>
            <p>(사진을 클릭하시면 상세 정보로 이동합니다)</p>
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

export default DesignerRanking;