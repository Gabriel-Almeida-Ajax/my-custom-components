import * as S from './AnimatedButton.Style';
import { useRef } from 'react';

export default function Card({ onClick }) {
    const ref = useRef();
    const handle = () => { ref.current.classList.toggle('active'); onClick && onClick(); };
    return (
        <S.Card onClick={handle} ref={ref}>
            <S.Line half />
            <S.Line large />
            <S.Line />
        </S.Card>
    )
}
