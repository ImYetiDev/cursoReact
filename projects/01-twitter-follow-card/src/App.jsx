import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard
                isFollowing
                userName="imyetidev">
                David Uribe
            </TwitterFollowCard>

            <TwitterFollowCard
                isFollowing={false}
                userName="midudev">
                Miguel Angel
            </TwitterFollowCard>
        </section>
    )
}