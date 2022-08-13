import AppRouter from "./MainRoutes"

interface MainProps{

        getToken: () => void
        setToken: ()=> void
        getTitle: ()=> void
        setTitle: ()=> void
}

function Main() {
    return (
        <AppRouter  />
    )
        
}

export default Main;