import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '4ms2vr',
	fixturesFolder: 'src/tests/fixtures',
	screenshotsFolder: 'src/tests/screenshots',
	videosFolder: 'src/tests/videos',
	downloadsFolder: 'src/tests/downloads',
	supportFolder: 'src/tests/support',
	e2e: {
		baseUrl: 'http://localhost:5173',
		specPattern: 'src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'src/tests/support/e2e.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
})
