# Using JSDoc for types

With the eslint and prettier plugins, the JSDoc comments are actually verified and properly idented. The typescript configuration emit d.ts files to dist based on the JSDoc comments.

# Babel and Jest

Babel is used to transpile the src to dist. Jest is using the on the fly transpiled src. This causes that I cannot use ignore to .test.\* files in the Babel config, because It would also refure to transpile while testing. I have placed the glob without single quotes to the build script because when using single quotes on them it just simply didnt obey it. For typescript the exclude could simply be inserted to the config.

# Eslint and Prettier

With the prettier plugin for eslint I can validate for style 'errors'. Since I enabled auto format on save for .js, this rule rarely triggers on build, if the eslint and prettier extensions are enabled in the vscode. This setup is actually usefor for one thing: when you have a bracket problem, or a syntax error, the prettier errors won't show until fixed. When you finally fix the syntax error, you are greeted with red lines from prettier, this is a good visual confirmation for me that the syntax errors are fixed.

# Npm

For Npm I gave a direct list of includable files and folders. This helps to avoid accidentally expose unintended files and ci/cd artifacts. The included .npmignore is therefor useless.

# TypeScript

I'am actually not really a fan of using TypeScript for developing. I see it more of a superset of C that compiles to JS and I kind of try to forget C for a while. Until I finally have to do some Rust at least. For these kind of basic things I will stick to JS with JsDoc and rely on TS to warnings when I'm doing silly things.
