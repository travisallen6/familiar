I want to build an app that gives dungeons and dragons players their own little personal game assistant (familiar).

# Project Goals
- Demonstrate most in-demand skills for AI engineers: i.e. agentic workflows, RAG strategies, Memory, tools, etc
- Position myself as an AI engineer

## Scratchpad
- Like OpenClaw, but light and focused on solving common problems for D&D players
- Demonstrate ability to add guardrails and security barriers

## Rough Flow

1. The DM creates a campaign in the app, and adds each of their players.
   1. The DM can add:
      1. Campaign materials
      2. Session notes
      3. Player/Player Character Notes
      4. NPC notes
      5. Lore documents
2. The player receives their invite and can create an account.
3. Upon first login, the player is prompted to introduce themselves and input relevant information about their character
   1. Name
   2. Species
   3. Class / subclass (optional)
   4. General vibe
   5. Short introduction, or whole backstory 
4. The player goes through a "hatching" experience, similar to the flow in OpenClaw.
   1. The player is guided through building their familiar. The chat agent references notes from the DM as well as information about the character to provide suggestions.
      1. What is their species. 
         1. Suggestion from agent: "I see your character is an artificer, what about a clockwork automoton?"
         2. Suggestion from agent: "Your character is a hermit, what about a squirrel from the woods that only they understand?"
      2. What is their vibe/personality
      3. Tone/Output
      4. What is their physical description
      5. What should they call you?
      6. What is their backstory?
   2. The system documents the agent definition
   3. Is it okay for the familiar to interact with other familiars in the campaign? (stretch)
5. The "familiar" introduces themselves and plays out their first moments in the world after creation
6. The familiar is able to assist the player with several tasks
   1. Complicated leveling up choice analysis
   2. Backstory creation
   3. Questions about past session (dependend on what documents the DM provides)
   4. Game scheduling quesitons.
   5. Lore questions
   6. note taking