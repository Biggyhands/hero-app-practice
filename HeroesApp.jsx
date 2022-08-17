
import { AuthProvider } from './src/auth/context/AuthProvider';
import { AppRouter } from './src/router/AppRouter';


export const HeroesApp = () => {
return (
    <AuthProvider>
        
        <AppRouter />
        
    </AuthProvider>
)
}