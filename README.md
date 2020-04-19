# React Friends
### An extended React project from [The Complete Web Developer in 2020: Zero to Mastery](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/)

![React Friends](/../master/reactfriends.png?raw=true "reactfriends application screen capture")

The original project utilises an external development API to fetch user data and display "user profiles" where users are searchable with live search. User avatars are generated via [RoboHash](https://robohash.org/), using the robot set.

I've enabled selecting a specific image set from the five available sets and then adapted the app to display "Cats" rather than "Robots" if the cat-set is selected.
I've also added a search counter to display the search result count.

## Local Installation
* Clone this repo: `git clone <repo>`
* Install locally by running `npm install`
* Run `npm update` if prompted.
* If there are warnings when installing, run `npm audit fix`.
* Start development server by running `npm start`

### Warning
Note that the version of `react-dev-utils` might have to be _exactly_ `10.1.0`, else there could be a type error and the app is unable to run.
