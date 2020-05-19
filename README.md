# SemverComparison
Compare semantic versioning strings.

## Install
```bash
npm i @krisell/semver-comparison
```

## How to use
```js
import SemverComparison from '@krisell/semver-comparison'

let requiredVersion = new SemverComparison('2.1.3')
if (requiredVersion.isNewerThan(versionRunning)) {
  // The current version is too old
}

if (someVersion.isEqualTo(versionRunning)) {
  // Exaclty the same version
}

if (someVersion.isNewerThanOrEqualTo(versionRunning)) {
  // The union of the two above
}
```

## Licence
MIT