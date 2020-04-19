import React, { Component } from 'react';
import Search from '../components/Search'
import Cards from '../components/Cards'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './app.css'

const APP_BASE_TITLE = 'React Friends | '
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const imgSets = {
    1: 'robots',
    2: 'monsters',
    3: 'robot heads',
    4: 'cats',
    5: 'humans'
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      q: '',
      imgSet: 1,
      friendsType: 'Robot',
      title: APP_BASE_TITLE + 'RoboFriends',
    }
}

    getRoboHashImgUrl = (email, username, id, imgSet) => {
      return `https://robohash.org/${email.slice(1)}${username}${id}.png?size=200x200&set=set${imgSet}`
    }

    componentDidMount() {
      const {friendsType} = this.state
      document.title = APP_BASE_TITLE + this.getTitle(friendsType)
      // Get users from REST API.
      fetch(USERS_URL)
          .then(response => response.json())
          .then(users => this.setState({
              robots: users,
              friendsType: this.getFriendsType(friendsType),
              title: this.getTitle(friendsType),
          }))
    }

    getTitle = (friendsType) => {
      return `${friendsType.toLowerCase().includes('obo')
              ? 'Robo' : friendsType + ' '}Friends`
    }

    getFriendsType = value => {
      let friendsType = 'Robot'
      if (value === '2') {
          friendsType = 'Monster'
      } else if (value === '4') {
          friendsType = 'Cat'
      } else if (value === '5') {
          friendsType = 'Human'
      }
      return friendsType
    }

    getSearchMessage = (searchResult, friendsType, robotsCount) => {
      return `Found ${searchResult ? searchResult : 'no'}
      ${searchResult !== 0 ? 'of ' + robotsCount : ''}
      ${friendsType}s`
    }

    onSetChange = event => {
      // Set state whenever the set select is changed.
      const value = event.target.value
      this.setState({imgSet: value, friendsType: this.getFriendsType(value)})
      document.title = APP_BASE_TITLE + this.getTitle(this.getFriendsType(value))
    }

    onSearchChange = event => {
      // Set state whenever the search input is changed.
      this.setState({q: event.target.value})
    }

  render() {
    const { robots, q, friendsType, imgSet } = this.state
    // Query result.
    const filteredRobots = robots.filter(robot => robot.name
      .toLowerCase().includes(q.toLowerCase())
    )
    const robotsCount = robots.length
    const searchResult = filteredRobots.length
    let content;
    if (robots.length) {
      content = <>
        <Search
          onSearchChange={this.onSearchChange}
          onSetChange={this.onSetChange}
          friendsType={friendsType}
          imgSets={imgSets}
        />
        <Scroll>
          <ErrorBoundry>
            <Cards robots={filteredRobots} imgSet={imgSet} />
          </ErrorBoundry>
        </Scroll>
      </>
    } else {
      content = <h1>Loading...</h1>
    }

    return (
      <section className="app tc">
        <h1 className={`title--${friendsType.toLowerCase()}s`}>{this.getTitle(friendsType)}</h1>
        <h2>
        {this.getSearchMessage(searchResult, friendsType, robotsCount)}
        </h2>
        {content}
      </section>
    )
  }
}

export default App;
