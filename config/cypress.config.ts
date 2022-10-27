import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '4ms2vr',
	fixturesFolder: 'src/tests/cypress/fixtures',
	screenshotsFolder: 'src/tests/cypress/screenshots',
	videosFolder: 'src/tests/cypress/videos',
	downloadsFolder: 'src/tests/cypress/downloads',
	supportFolder: 'src/tests/cypress/support',
	e2e: {
		baseUrl: 'http://localhost:5173',
		specPattern: 'src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'src/tests/support/e2e.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
})
