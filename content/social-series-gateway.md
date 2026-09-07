# ppmlx build-in-public series

These posts describe the current ppmlx work. They are not release announcements.

The series uses one structure:

1. The main post gives the opinion.
2. The first reply shows the project state.
3. The second reply asks one specific question.

Do not add hashtags. Do not put the ppmlx link in the main post. Put the link in the proof reply.

## Post 1 — Keep the harness

Publish with `public/social/post-1-router.html`.

### X — main post

Meta released Muse Code. The terminal had room for one more harness, apparently.

I am taking ppmlx in the other direction:

Keep the harness. Replace the model underneath it.

Claude Code, Codex, OpenCode, or Pi → one local endpoint.

The contract is frozen. The router is next.

### X — reply 1: project state

Current state:

✓ local MLX inference  
✓ OpenAI-compatible API  
✓ protocol captures for four harnesses  
✓ Agent IR contract  
□ remote provider adapters  
□ routing and fallback runtime

I am publishing the gap, not hiding it behind a launch date.

https://ppmlx.dev

### X — reply 2: question

Which route should work first?

- Claude Code → OpenAI API
- Codex → Anthropic API
- OpenCode → local Qwen
- Pi → local Qwen

I want a real workflow, not a large provider list.

Subscription access needs an official provider flow. A ChatGPT subscription is not an API key.

### LinkedIn

Meta released Muse Code. The terminal had room for one more coding harness, apparently.

I am taking ppmlx in the other direction.

I want to configure Claude Code, Codex, OpenCode, or Pi once. After that, I want to change the model underneath the harness.

The same local endpoint can select local MLX inference or an approved remote provider.

The boring part is also the important part. Claude Code, Codex, OpenCode, and Pi do not use the same protocol. Their tool calls do not have the same stream format either.

I froze the first architecture contract before I started the proxy runtime:

- One protocol-neutral Agent IR
- Exact compatibility fixtures for four harnesses
- Separate local and provider credentials
- Deterministic routing and fallback rules
- Local inference as a normal route

The contract exists. The router does not exist yet.

I am publishing both facts because this is a build log, not a launch trailer.

Which harness and provider pair should work first?

https://ppmlx.dev

### Media role and alt text

The graphic shows the target product boundary. It does not claim that the router works.

Alt text: “ppmlx build note. One endpoint for four coding harnesses. The proxy contract is frozen, and the router runtime is next.”

## Post 2 — One red contract test

Publish with `public/social/post-2-tools.html`.

### X — main post

Zuckerberg wrote 6,500 words about Meta's new AI future.

My terminal configuration does not need to join every corporate pivot.

I am freezing the ppmlx protocol contract first. Providers can change behind one local endpoint.

First contract run: 27 passed. 1 failed.

Perfect.

### X — reply 1: project state

The Claude Code fixture and Agent IR disagree about the request shape and streamed tool events.

That is the useful result.

I would rather find protocol drift in a contract test than after an agent calls the wrong tool with the wrong arguments.

https://ppmlx.dev

### X — reply 2: question

Tool use is where “OpenAI-compatible” usually becomes “OpenAI-adjacent.”

The first matrix covers:

- Anthropic Messages
- OpenAI Responses
- OpenAI Chat Completions

Which Grok, Kimi, DeepSeek, or Qwen failure should become the first model normalization fixture?

### LinkedIn

Zuckerberg wrote 6,500 words about Meta's new AI future.

My terminal configuration does not need to join every corporate pivot.

The provider can change. The harness should stay stable. That sounds simple until the first tool call starts to stream.

Claude Code uses Anthropic Messages. Codex uses OpenAI Responses. OpenCode and Pi use OpenAI Chat Completions. Grok, Kimi, DeepSeek, and Qwen can add their own tool-call behavior on top.

I added versioned contract fixtures for the first four harnesses. Each fixture covers a complete streamed tool round trip.

The first selected test run gave me this result:

`27 passed, 1 failed`

The Claude Code fixture and the Agent IR schema disagree about the request and event shapes.

Good.

The point of the contract is to find that disagreement before the runtime sends the wrong tool call to a harness.

“OpenAI-compatible” is a starting point. Semantic compatibility needs stable call IDs, ordered argument fragments, tool results, and final stream states.

Which model-specific tool failure should I capture first?

https://ppmlx.dev

### Media role and alt text

The graphic shows the real result from the selected contract and memory test run on August 18, 2026.

Alt text: “ppmlx build log. Twenty-seven selected tests passed and one failed. The Claude Code fixture found a gap in the Agent IR contract.”

## Post 3 — Fix it once

Publish with `public/social/post-3-memory.html`.

### X — main post

My coding agent found the fix.

Eleven minutes later: new session, same investigation.

Very intelligent. Very expensive. No object permanence.

ppmlx now has an experimental local memory graph and MCP read tools.

The hard part is saving only facts worth reading again.

### X — reply 1: project state

What works now:

✓ local event capture  
✓ scoped memory search  
✓ graph walk and context tools  
✓ MCP server for harness access  
✓ local quality and replay tests

Automatic prompt injection stays off by default.

https://ppmlx.dev

### X — reply 2: question

I want memory to enter the harness as an explicit read skill.

The harness decides when memory can help. ppmlx limits the skill to approved read tools and project scopes.

What should survive a coding session: decisions, failed attempts, verified fixes, or all three?

### LinkedIn

My coding agent found the fix.

Eleven minutes later, a new session started the same investigation.

Very intelligent. Very expensive. No object permanence.

ppmlx now has an experimental local memory graph. It can capture local request and response events. It can also expose scoped read tools through MCP.

The difficult part is not storage. Storage is cheap.

The difficult part is deciding what deserves to return in a later session.

A useful memory needs:

- Project and session scope
- Source and time
- Confidence and status
- A clear privacy boundary
- A way to forget incorrect facts

I do not want ppmlx to add hidden prompt soup to every request. The proposed boundary is explicit.

The user adds a small read skill to the harness. The harness decides when memory can help. ppmlx checks the approved tools and project scope before it returns anything.

The memory exists. The safe read contract is the next part.

What should survive a coding session: decisions, failed attempts, verified fixes, or all three?

https://ppmlx.dev

### Media role and alt text

The graphic marks memory as a working experiment. It also names the boundary: local graph, explicit MCP read tools, and no automatic prompt injection.

Alt text: “ppmlx working experiment. Fix a problem once and read the verified result in the next coding session. Memory stays local.”

## Post 4 — Write the policy first

Publish with `public/social/post-4-cto.html`.

### X — main post

The CTO now manages an agent fleet.

Chief Token Officer was funny until someone opened the invoice.

I am writing ppmlx routing rules before I write the router:

Cost. Tool support. Privacy. Health. Fallback.

The model name is the easy field.

### X — reply 1: project state

One rule I will not negotiate:

After a model starts a tool round trip, ppmlx must not move that round trip to another provider.

A “helpful” fallback can repeat text or execute a tool twice.

Fallback stops when output starts.

https://ppmlx.dev

### X — reply 2: question

I need real routing policies, not a fake model picker.

For your agent work, what decides the route?

- Lowest cost
- Best tool support
- Local data only
- Fastest healthy model
- A fixed model for the full session

Which rule wins when two rules disagree?

### LinkedIn

The CTO now manages an agent fleet.

Chief Token Officer was funny until someone opened the invoice.

The model name is the easy part. The real job is policy.

Which model can use the required tools? Which data can leave the machine? Which provider is healthy? When is fallback safe? Which account pays for the request?

I am writing the ppmlx routing rules before I write the runtime.

One rule already matters more than it first appears.

After a model starts a tool round trip, ppmlx must keep that round trip on the same provider. A fallback after output starts can repeat text or execute a tool twice.

The accepted contract therefore stops fallback after the first output event. It also rejects fallback for authentication errors, missing capabilities, policy refusals, and tool-contract errors.

This is not as attractive as a model picker. It is much more useful when ten agents share four providers and one invoice.

For your agent work, what should decide the route: cost, tool support, privacy, health, or session stability?

https://ppmlx.dev

### Media role and alt text

The graphic asks the product question. The post and replies show one accepted safety rule from the routing contract.

Alt text: “ppmlx design question. Which model gets the task? The routing policy considers cost, tool support, privacy, health, and fallback.”

## Publication order

Publish one post every two or three days:

1. Keep the harness.
2. One red contract test.
3. Fix it once.
4. Write the policy first.

Post the first reply within one minute. Post the question after the proof reply. Answer technical replies with a concrete contract, test, or failure.

## Source context

- Meta AI developer products: https://ai.meta.com/llama
- Shelly Palmer, “Meta Muse Code Arrives with a Coupon,” August 6, 2026: https://shellypalmer.com/2026/08/meta-muse-code-arrives-with-a-coupon/
- AP, “Zuckerberg manifesto sketches out Meta's ambitions for world-changing AI technology,” August 10, 2026: https://apnews.com/article/df8a4e7d7825470d09e8090367457c2c
- TechRadar Pro, “The AI era is creating a new CTO,” August 11, 2026: https://www.techradar.com/pro/the-ai-era-is-creating-a-new-cto

Check each source before publication. Remove a news reference if the source changes.
