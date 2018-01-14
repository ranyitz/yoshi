const chalk = require('chalk');
const depkeeper = require('depkeeper');

module.exports = ({cwd = process.cwd()} = {}) => {
  return depkeeper({cwd})
    .rule('{haste-preset-yoshi,wix-style-react}', {major: 1})
    .rule('{haste-preset-yoshi,wix-style-react}')
    .checkRules()
    .then(([outdated1, outdated2]) => {
      if (outdated1.length) {
        return fail(outdated1);
      }

      if (outdated2.length) {
        return warn(outdated2);
      }
    });
};

function fail(deps) {
  const formatedDeps = deps
    .map(({name, version, minimal}) =>
      chalk`${name}{redBright @${version}} must be at least {greenBright @${minimal}}`)
    .join('\n');

  const message = chalk`{red ERROR: the following dependencies must be updated:\n}${formatedDeps}`;

  return Promise.reject(message);
}

function warn(deps) {
  const formatedDeps = deps
    .map(({name, version, minimal}) =>
      chalk`${name}{yellowBright @${version}} should be {greenBright @${minimal}}`)
    .join('\n');

  const message = chalk`{yellow WARNING: some dependencies are a bit behind:\n}${formatedDeps}`;

  console.log(message);

  return Promise.resolve(message);
}
