import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    const users = [
        {
            userName: 'imyetidev',
            name: 'David Uribe',
            isFollowing: true
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: false
        },
        {
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: false
        },
        {
            userName: 'vegetta777',
            name: 'Samuel Deluque',
            isFollowing: true
        }
    ]

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}