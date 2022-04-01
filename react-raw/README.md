# react-raw

### Run development server

```shell
npm run start
```

### Notes

- No loading component used. It would have been nice to add a spinner while the search query is fetching the results.
- I used the native JS API for managing history and the query params to minimize external dependencies.
- No error handling whatsoever: I assumed the search API always returns correctly.
- Pagination is basic: no server-side pagination (there is no documentation for it in the README) and no way to jump
  to a specific page. Page number cannot be passed as query parameter alongside the search query.
- I used Material UI for styling because I am more familiar with it.
- No particular attention to mobile usage and bundle size.
