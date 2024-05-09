# React Hook Form with Server Actions

I created custom hooks to handle server actions with React Hook Form.
It's declarative way to handle form validation and submission, success and error cases.

1. keep **progressive enhancement** working
2. handle actions and form state via `useFormState` and `useFormStatus`.

## Installation

```bash
npm install global pnpm
pnpm install
pnpm dev
```

## Main Source Code

- [useFormAction](./src/hooks/useFormAction.js)
- [action.d.ts](./src/types/action.d.ts)
  - If you want to add your own handler, check this file.

## Sample

- [client side form](./src/app/client-side-form.tsx)
- [actions](./src/actions.ts)
