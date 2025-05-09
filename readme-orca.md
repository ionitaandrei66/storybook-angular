What Orca does exactly:
Runs all your Storybook components in a headless browser

Catch runtime errors, accessibility issues (a11y)

Can also run play functions (simulated interactions)

Doesn't require .spec.ts files (so it's not like Jest or Karma)

Integrates easily with Angular via Storybook

The clear difference:
🧱 Storybook
➡️ It's for documenting and visualizing components.
➡️ It runs in the browser and shows you the UI.

🐳 Orca (i.e. @storybook/test-runner)
➡️ It's a separate tool, which runs automated tests on stories.
➡️ It's not automatically included in Storybook - you install it separately.
➡️ It can be run in CI or locally, without modifying the components.

for orca we need setup-tests.ts
si test-runner.js


npx test-storybook

npx test-storybook --url http://localhost:6006/

npx playwright install
