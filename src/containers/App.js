import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }
// use arrow functions so that 'this' refers to the object inwhich it was created, App in this case
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
      }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return this.state.robots.length === 0 ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                      <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                      </ErrorBoundry>
                    </Scroll> 
                </div> 
            );
    }
}

export default App;