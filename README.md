# SemverComparison
Compare Semantic Versioning strings to see which version is newer.

## Install
```bash
npm i @krisell/semver-comparison
```

## How to use
```js
import SemverComparison from '@krisell/semver-comparison'

let requiredVersion = new SemverComparison('2.1.3')
if (requiredVersion.isNewerThan(versionRunning)) {
  // Take action
}
```

## Licence
MIT