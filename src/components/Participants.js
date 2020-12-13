import styled from 'styled-components'

const H4 = styled.h4`

`

const Container = styled.div `

`

const ParticipantDelete = styled.div `

`

const Participant = ({}) => (
    <Participant>
        <ParticipantDelete>
            Deletar
        </ParticipantDelete>
        Nome (email@gmail.com)
    </Participant>
)

export default function Participants ({}) {
    return (
        <>
            <H4>Participantes:</H4>
            <Container>
                <Participant/>
            </Container>
        </>
    )
} 