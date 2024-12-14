// cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        // Add minimal webpack configuration
        resolve: {
          extensions: ['.js', '.ts', '.jsx', '.tsx']
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript'
                  ]
                }
              }
            }
          ]
        }
      }
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts'
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});
