import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: "#AE1D1D",
        primaryLight: "#FFF3F3",
        secondary: "#00FF19",
        secondaryDark: "#4B8A08",
        light: "#FFFFFF"
    }
}

const Theme = ({ children }) => (
<ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme