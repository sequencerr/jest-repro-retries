`$ npx jest`
fix:
`$ NODE_OPTIONS=--unhandled-rejections=warn npx jest`
or try
`--maxWorkers 2`, `--maxWorkers $(nproc)`

references:

https://github.com/jestjs/jest/issues?page=2&q=retries+is%3Aissue
https://github.com/jestjs/jest/issues/8769
https://github.com/jestjs/jest/issues/13658
https://github.com/jestjs/jest/issues/13007

jest.retryTimes // This only works with jest-circus!

https://www.google.com/search?q=jest+retry+limit+disable

https://dev.to/ninthsun91/jest-worker-encountered-4-child-process-exceptions-exceeding-retry-limit-82o
https://www.dhiwise.com/post/solve-jest-worker-encountered-4-child-process-exceptions

https://github.com/TanStack/query/discussions/1090

https://jestjs.io/docs/next/configuration

https://stackoverflow.com/q/70007464 // 130k view, 60 upvotes
