import SemverComparison from '../dist/index.js'

it('can parse a semver string', () => {
  let version = new SemverComparison('1.4.3')

  expect(version.major).toBe(1)
  expect(version.minor).toBe(4)
  expect(version.patch).toBe(3)
})

it('can determine which is newer', () => {
  let v1 = new SemverComparison('1.4.3')
  let v2 = new SemverComparison('1.4.4')
  let v3 = new SemverComparison('1.5.2')
  let v4 = new SemverComparison('2.0.0')

  expect(v2.isNewerThan(v1)).toBe(true)
  expect(v1.isNewerThan(v2)).toBe(false)

  expect(v2.isNewerThan(v3)).toBe(false)
  expect(v3.isNewerThan(v2)).toBe(true)

  expect(v4.isNewerThan(v3)).toBe(true)
  expect(v3.isNewerThan(v4)).toBe(false)

  expect(v1.isNewerThan(v3)).toBe(false)
  expect(v3.isNewerThan(v1)).toBe(true)

  expect(v2.isNewerThan(v4)).toBe(false)
  expect(v4.isNewerThan(v2)).toBe(true)

  expect(v1.isNewerThan(v4)).toBe(false)
  expect(v4.isNewerThan(v1)).toBe(true)
})

it('isNewer can also accept a semver string', () => {
  let v1 = new SemverComparison('1.4.3')

  expect(v1.isNewerThan('1.4.1')).toBe(true)
  expect(v1.isNewerThan('1.4.2')).toBe(true)
  expect(v1.isNewerThan('1.4.3')).toBe(false)
  expect(v1.isNewerThan('1.4.4')).toBe(false)
  expect(v1.isNewerThan('1.5.1')).toBe(false)
  expect(v1.isNewerThan('2.0.0')).toBe(false)
})

it('can decide if version is equal', () => {
  let v1 = new SemverComparison('1.4.1')

  expect(v1.isEqualTo('1.4.1')).toBe(true)
  expect(v1.isEqualTo('1.4.0')).toBe(false)
  expect(v1.isEqualTo('1.5.1')).toBe(false)
  expect(v1.isEqualTo('2.4.1')).toBe(false)
})

it('can decide if version is equal to or newer than', () => {
  let v1 = new SemverComparison('1.4.1')

  expect(v1.isNewerThanOrEqualTo('1.4.1')).toBe(true)
  expect(v1.isNewerThanOrEqualTo('1.4.0')).toBe(true)
  expect(v1.isNewerThanOrEqualTo('1.3.3')).toBe(true)
  expect(v1.isNewerThanOrEqualTo('1.5.1')).toBe(false)
  expect(v1.isNewerThanOrEqualTo('2.4.1')).toBe(false)
})
