    // src/Greeting.tsx
    import React from 'react';

    // Définition du type des props
    interface GreetingProps {
    name: string;
    }

    // Composant fonctionnel Greeting
    const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
    };

    export default Greeting;
