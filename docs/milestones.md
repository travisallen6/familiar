# Familiar — MVP Milestones

Each milestone is a small, independently testable increment. Plan and implement one at a time.

| #   | Milestone                       | Testable Outcome                                                                           |
| --- | ------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | **Project scaffold**            | Next.js app runs locally with Tailwind + shadcn/ui, DB connection works, deploys to Vercel |
| 2   | **Auth**                        | User can sign up, log in, and log out via better-auth                                      |
| 3   | **Campaign creation**           | DM can create a campaign; it appears in their dashboard                                    |
| 4   | **Player invites & membership** | DM can invite a player by email; player can accept and appear in the campaign              |
| 5   | **Character creation**          | Player can fill out the character form; data is saved and displayed                        |
| 6   | **Document upload**             | DM can upload a file to a campaign; it's stored in Vercel Blob and recorded in the DB      |
| 7   | **RAG pipeline**                | Uploaded documents are chunked, embedded, and stored in pgvector via Inngest               |
| 8   | **Summoning flow**              | Player completes the guided AI chat; structured familiar data + system prompt are saved    |
| 9   | **Familiar chat**               | Player chats with their familiar; responses use personality + retrieved campaign docs      |

## Stretch Goals

- Familiar image generation (Nano Banana 2) with iterative correction loop
- Agent evals to test summoning and chat task completion
- Security guardrails and prompt injection protection
- Class-based summoning verb (warlock binds, druid awakens, etc.)
