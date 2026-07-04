Never rewrite entire files.

Only change what's necessary.

Preserve comments.

Preserve formatting.

Explain architectural changes.

Prefer reusable components.

Avoid introducing dependencies.

Always run lint before completion.

Request access delivery:

- Use `REQUEST_ACCESS_DESTINATIONS=file` for local development.
- Use `REQUEST_ACCESS_DESTINATIONS=email` when email is the production handoff.
- Use `REQUEST_ACCESS_DESTINATIONS=file,email` only for local email testing.
- Email delivery currently expects Resend environment variables:
  `RESEND_API_KEY`, `REQUEST_ACCESS_EMAIL_TO`, and
  `REQUEST_ACCESS_EMAIL_FROM`.
