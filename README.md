# Typescript-Boilerplate

This respository contains starter code for a Typescript React application, comoplete with linting and other handy dev tools.

## Directory

The File tree is as follows:

- `public` - contains all public assets such as images and icons, under the `assets` folder, and global `HTML` and `CSS` files.
- `scripts` - contains any build and load scripts defined in `package.json`. This is to enable more flexibility in the complexity of scripts in case more finegrained functionality is needed.
- `src` - folder contains all React/Typescript code for web-applictaion
  - `@types` - contains any custom types for Typescript compilation, including file types such as `.svg` and `.png`
  - `pages` - folders containing different pages of the application
  - `shared` - any shared components, constans, are utils across the entire application
  - `styles` - global styles
  - `utils` - global utility functions, such as api calls

## Styling

To ensure code formatting, please install `prettier` into VSCode for styling.

Additional specific checks are done by ESLint. Please run `npm lint-check` or `npm lint-fix` (the latter if you want to auto-fix all possible issues) and address all raised issues.

You can always run Prettier directly within your IDE by via the following instructions:

### [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
