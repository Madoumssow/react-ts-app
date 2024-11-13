    // src/Counter.tsx
    import React, { Component } from 'react';

    // Définition du type pour l'état du compteur
    interface CounterState {
    count: number;
    }

    class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0,
    };

    // Méthode pour incrémenter le compteur
    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
        );
    }
    }

    export default Counter;