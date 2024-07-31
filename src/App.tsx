import { ThemeProvider } from "./components/theme/theme-provider"
import { PageRoutes } from "./router/PageRoutes"

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/* <div className="flex flex-col h-[100dvh]"> */}
            <PageRoutes />
            {/* </div> */}
        </ThemeProvider>
    )
}

export default App
