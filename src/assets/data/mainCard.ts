import bgHanaGroup from '../bg-hanagroup.png';
import bgGlobal from '../bg-global.png';
import bgShare from '../bg-shareprice-m.png';
import bgBtn1 from '../20230731075409661.jpg';
import bgBtn2 from '../20230524092725713.jpg';
import bgBtn3 from '../bg-result.png';

import { Icons } from '../../libs/icons/icons';
import { ArrowDownToLine, Mic } from 'lucide-react';

export const mainCardData = [
    {
        id: 1,
        stock: false,
        title: '하나금융그룹',
        firstSubTit: '함께 성장하며',
        secSubTit: '행복을 나누는 금융',
        unit: '',
        firstDes: '직원, 손님, 사회 모두가 행복한',
        secDes: '금융회사로 성장해갑니다',
        img: bgHanaGroup
    },
    {
        id: 2,
        stock: false,
        title: '글로벌 네트워크',
        firstSubTit: '전 세계 25개 지역',
        secSubTit: '211개의 네트워크',
        unit: '',
        firstDes: '국내 최대의 글로벌 네트워크를 통해',
        secDes: '세계적인 금융그룹으로 도약합니다',
        img: bgGlobal
    },
    {
        id: 3,
        stock: true,
        title: '주가정보',
        firstSubTit: '하나금융지주(086790)',
        secSubTit: '56,600',
        unit: 'KRW',
        firstDes: '전일대비 1,000원 (1.80%)',
        secDes: '',
        img: bgShare,
    },

];

export const mainButtonCardData = [
    {
        id: 1,
        title: 'ESG REPORT',
        firstSubTit: '2022년',
        secSubTit: '지속가능경영보고서',
        firstDes: 'PDF(국문)',
        secDes: 'PDF(영문)',
        img: bgBtn1,
        icon: ArrowDownToLine
    },
    {
        id: 2,
        title: 'ANNUAL REPORT',
        firstSubTit: '2022년',
        secSubTit: '연차 보고서',
        firstDes: 'Annual Report(Full)',
        secDes: 'Annual Report(Only)',
        img: bgBtn2,
        icon: ArrowDownToLine
    },
    {
        id: 3,
        title: '경영실적',
        firstSubTit: '2023년',
        secSubTit: '경영실적 발표',
        firstDes: 'PDF',
        secDes: 'Web Casting',
        img: bgBtn3,
        icon: Mic,

    },
];