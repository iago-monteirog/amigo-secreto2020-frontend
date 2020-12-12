import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 64px;
    color: ${({ theme }) => theme.colors.light};

`
export default function Logo () {
    return <H1>{'{amigo} Secreto 2020'}</H1>
}