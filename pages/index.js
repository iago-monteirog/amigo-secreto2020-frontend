import HomePageHeader from '../src/components/Headers/HomePageHeader'
import GiftContainer from '../src/components/Containers/GiftContainer'
import Stpes from '../src/components/Steps'

export default function HomePage() {
    return (
        <>
            <HomePageHeader/>
            <GiftContainer>
                <Stpes />
            </GiftContainer>
        </>
        )

}