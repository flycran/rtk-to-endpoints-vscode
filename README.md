# RTK to Endpoints

A VSCode extension that enables **Go to Definition** from RTK Query hooks directly to endpoint definitions — with **zero configuration**.

## Features

- Press `F12` or `Cmd/Ctrl+Click` on any RTK Query hook to jump directly to its endpoint definition in `createApi`.
- No `tsconfig.json` changes required.
- No need to switch VSCode to workspace TypeScript version.

## Supported Hook Patterns

| Hook | Endpoint |
|------|----------|
| `useGetUserQuery` | `getUser` |
| `useLazyGetUserQuery` | `getUser` |
| `useCreateUserMutation` | `createUser` |
| `useGetUserQueryState` | `getUser` |
| `useGetUserQuerySubscription` | `getUser` |
| `useGetUserInfiniteQuery` | `getUser` |
| `useGetUserInfiniteQueryState` | `getUser` |
| `useGetUserInfiniteQuerySubscription` | `getUser` |

## Usage

Install the extension and start using Go to Definition on your RTK Query hooks immediately.

```ts
const { data } = useGetUserQuery(id)
//              ^^^^^^^^^^^^^^^^ F12 → jumps to getUser endpoint
```

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `rtkToEndpoints.enabled` | `true` | Enable or disable the plugin |

## Requirements

- VSCode `^1.85.0`
- TypeScript `>=4.0.0` in your project

## License

MIT
