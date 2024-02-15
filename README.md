# react-media-database

A `react` single page application designed to perform simple `CRUD` processes against a firestore registered for this application alone.

## Purpose
- To be able to dynamically search all the media present within the firebase firestore database
- To be able to default to movies upon instaniation, but be able to select between movies, tv shows, games, and more
- To be able to add a `type` or `types` in app live, for ex. type could be Movie but you might also might want to add Games
- To be able to filter by any property of a movie, show, game, etc
- Add a request feature
- Request feature would allow a user to request a movie(s) or show(s)
- If the request is already present in the media database, just add it to their cart
- Implement a cart system in firebase database
- Need to push to a collection known as cart, add a `user` array that is designed to hold a(lot of) movie(s) or show(s)

## Frameworks/Languages
- React
- Typescript ES2020
- Rxjs
- Sass
- State Management (custom)
- Jest

## Node
- Version `^18 | ^20`

## PR Guide
- Always run prettier before committing code
- Always fix lint issues
- Always write test code
- use the format git commit -m "<task>: commit msg less than 100 chars in length"
- The `task` could be, chore, build, add, remove, fix, update, etc
    - The following is clean, simple, and easy to read
    - `git commit -m "build: Footer component, standalone, stateless"`

