
# TypeScript Linked Modules Example

This repo is to test linked NPM packages that are created using TypeScript. The repo contains two TypeScript Node.js projects: `parent-package` and `child-package`. The `parent-package` is configured so that the TypeScript compiler will generate `d.ts` defintion files for the `child-package` project to consume. By providing the TypeScript definition files, the `child-package` project gets full type fidelity without having to have direct access to the `parent-package` project `.ts` files.

## Linking the Packages

1. From the command line, browse to the `./parent-package` folder.
2. Run the command `npm link`.
3. Browse to the `./child-package` folder.
4. Run the command `npm link parent-package`. Now the `child-package` project will have access to the `parent-package` types and should successfully build.

## Building the Projects

The projects in this repo are intended to be opened in their own Visual Studio Code windows in order to properly model the relationship between the two packages. So, instead of opening the root of the repo into VS Code, open the `./parent-package` and `./child-package` folders into their own VS Code windows using the `File > Open` menu item or running the command `code .` from the command line within each of the respective folders.
