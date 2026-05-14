# Project conventions reference.

## File Naming

| Type             | Convention                  | Example              |
| ---------------- | --------------------------- | -------------------- |
| React Components | PascalCase                  | `SiteDetail.tsx`     |
| Pages            | PascalCase                  | `Login.tsx`          |
| Controllers      | camelCase with suffix       | `auth.controller.ts` |
| Routes           | camelCase with suffix       | `auth.routes.ts`     |
| Models           | camelCase with suffix       | `user.model.ts`      |
| Middlewares      | camelCase with suffix       | `auth.middleware.ts` |
| Hooks            | camelCase with `use` prefix | `useAuth.ts`         |
| Types            | PascalCase inside the file  | `interface Site {}`  |

---

## Commits

Must be written using **conventional commits** with the format: `type(scope): message`

### Types

| Type       | When to use it                        |
| ---------- | ------------------------------------- |
| `feat`     | New functionality                     |
| `fix`      | Bug fix                               |
| `chore`    | Configuration, dependencies           |
| `refactor` | Code change without new functionality |
| `style`    | Formatting, CSS/UI styles             |
| `docs`     | Documentation                         |
| `perf`     | Performance improvement               |
| `remove`   | Code removal                          |

### Scopes

`client` · `server` · `share`

### Examples

```
feat(client): implement user registration form
fix(share): fix typing of the Product interface
chore(server): update express dependency to v5.0
refactor(server): extract authentication logic to a dedicated middleware
style(client): adjust modal padding for mobile view
docs(server): document API parameters in the README
perf(client): implement lazy loading in the image gallery
remove(server): remove controller for the old API version
```

### Rules

- Message in English, imperative, and lowercase
- No period at the end
- Maximum ~72 characters except for very large changes
- One commit per logical change, do not accumulate unrelated changes
