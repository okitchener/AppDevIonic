# Ionic Vue — Hello World

This project provides a working starting point for our mobile application using Ionic, Vue, and TypeScript.

## What we accomplished

- Created the application using Ionic’s blank Vue starter.
- Updated the home page to display “Hello, world!”.
- Ran the application locally in a browser.

The application has a tab bar for Home, BMI, Morse Code, and Alcohol Age. The three tool tabs are empty placeholders; their functionality is planned for the next development phase.

## Getting started (10–15 minutes)

### Prerequisites

- A current Node.js LTS version, including npm.
- Rider or another editor.
- A copy of this repository.

Check that Node.js and npm are available:

```sh
node --version
npm --version
```

### 1. Open the application folder

Open `hello-world` in your editor. Run the following commands from that folder—the one containing `package.json`.

If your terminal is at the repository root:

```sh
cd hello-world
```

### 2. Install dependencies

```sh
npm ci
```

This installs the dependency versions recorded in `package-lock.json`.

### 3. Start the application

```sh
npx @ionic/cli serve
```

Accept the prompt to install `@ionic/cli` if it appears.

Open the local address printed in the terminal if the browser does not open automatically. You should see the Hello World page.

Leave the terminal running while developing. Saved changes reload in the browser. Press Ctrl+C to stop the server.

## Where to start editing

- `src/views/HomePage.vue` — current home page, including its content and styles.
- `src/views/TabsPage.vue` — tab bar and tab navigation.
- `src/views/` — empty pages for the three planned tools.
- `src/App.vue` — root application component.
- `src/router/` — page routing.
- `package.json` — dependencies and development commands.

## Next development phase

The next developer will verify the three tool tabs are working:

1. **BMI Calculator:** Enter height and weight, calculate BMI, and display the corresponding category.
2. **Morse Code Translator:** Enter text and convert it into dots and dashes.
3. **When Can I Buy Alcohol?:** Enter a date of birth and select a jurisdiction to determine when the user reaches the legal purchasing age.

Then they will add a fourth tab containing a Quiz application with multiple-choice questions, question navigation, swipe functionality, and score tracking.

This feature is not implemented yet.

## Troubleshooting

- **“Can only be run in an Ionic project directory”:** Make sure your terminal is inside `hello-world`, where `ionic.config.json` is located.
- **Prompt to install `ionic@5.4.16`:** Cancel and use `npx @ionic/cli serve`, including `@ionic/cli`.
- **Missing dependencies:** Run `npm ci` from the application folder.
