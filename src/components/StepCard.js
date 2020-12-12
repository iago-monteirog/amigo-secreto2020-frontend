import styled from 'styled-components'

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    padding: 20px;
    margin: 20px;
    max-width: 250px;
    height: 230px;
    border-radius: 10px;

`

export default function StepCard ({ title,description }) {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{description}</p>
        </Card>
    )
}