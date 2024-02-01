import { Button } from 'react-bootstrap';
import style from './DesignerPortfolio.module.css'

function DesignerPortfolio() {
    return (
    <div>
    <p className="pageInfo">디자이너 포트폴리오</p>
    <div className="portfolioInfo">
    <span>
        <img src='/Designer2.png' width={136} height={210}></img></span>
        <span>경력 및 소개</span>
    </div>
    <div className="portfolioPrice">
        <p>디자이너 가격표</p>
        <table>
        <tr>
            <th>리폼부분</th><th>가격</th><th>리폼부분</th><th>가격</th>
        </tr>
        <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        <tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        </table>
        <p>디자이너마다 가격이 다릅니다.</p>
    </div>
    <div className="buttonProductPage">
        <Button variant="dark">작업물 보러 가기</Button>
    </div>
    </div>
);
}

export default DesignerPortfolio;