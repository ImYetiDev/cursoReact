import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    /* Se puede pasar una funcion como prop */
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
        <TwitterFollowCard
            formatUserName={format}
            userName="imyetidev">
                David Uribe
        </TwitterFollowCard>
            
        <TwitterFollowCard
            formatUserName={format}
            userName="midudev">
                Miguel Angel
        </TwitterFollowCard>
        </section>
    )
}