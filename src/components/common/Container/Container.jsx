import { ContainerStyle } from "./Container.styled"

export const Container = ({children}) => {
    return (
        <ContainerStyle className="container">
        {children}
        </ContainerStyle>
    )
}