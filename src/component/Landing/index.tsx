import {
    MainWrapper,
    TextWrapper,
    Circle,
    Circle2
} from './styles'

const Landing = () => {
    return (
        <>
            <MainWrapper>
                <Circle />
                <Circle2 />
                <TextWrapper>
                    <p>FIND</p>
                    <p>YOUR</p>
                    <p>KOREAN</p>
                    <p>NAME</p>
                </TextWrapper>
            </MainWrapper>
        </>
    )
}

export default Landing;