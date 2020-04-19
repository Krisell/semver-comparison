class SemverComparison {
  constructor (versionString) {
    this.versionString = versionString
    let [major, minor, patch] = versionString.split('.').map(el => +el)

    this.major = major
    this.minor = minor
    this.patch = patch
  }

  isNewerThan (semver) {
    if (typeof semver === 'string') {
      semver = new SemverComparison(semver)
    }

    if (this.major > semver.major) {
      return true
    }

    if (this.major === semver.major && this.minor > semver.minor) {
      return true
    }

    if (this.major === semver.major && this.minor === semver.minor && this.patch > semver.patch) {
      return true
    }

    return false
  }
}

export default SemverComparison
