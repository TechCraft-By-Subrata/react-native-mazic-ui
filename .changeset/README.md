# Changesets

This repository uses Changesets to decide release type explicitly and publish automatically after review.

## Release policy

- Every user-visible package change should include a changeset file.
- `patch` is for bug fixes and non-breaking corrections.
- `minor` is for backward-compatible features or new public options.
- `major` is for breaking changes and requires explicit maintainer review before merging the release PR.

## Common commands

```bash
npm run changeset
npm run version-packages
npm run release
```

## Expected flow

1. Add a changeset in the feature branch.
2. Merge to `main`.
3. GitHub Actions opens or updates a release PR.
4. Review the version bump and changelog carefully, especially for `major` changes.
5. Merge the release PR to publish the npm package automatically.
