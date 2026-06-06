# GitHub Setup

This repo is GitHub-native, so the remote repository needs the same operating primitives as the files.

## Required Setup

1. Enable Issues.
2. Enable Discussions.
3. Enable Wiki if generated Wiki publishing is desired.
4. Create one GitHub Project board with the fields in [PROJECT_BOARD.md](PROJECT_BOARD.md).
5. Sync labels from `.github/labels.yml`.
6. Keep blank issues disabled through `.github/ISSUE_TEMPLATE/config.yml`.

## Project Board Columns

```text
Inbox
Needs Triage
Scoped
Agent Working
Needs Review
Needs Replication
Accepted
Published
Field-Tested
```

## Label Manifest

The canonical label manifest is `.github/labels.yml`. `pnpm validate` checks that every governance-required label is present in that file.

## Remote Limitation

This local repository currently has no configured Git remote. Remote setup, Wiki enablement, and Project board creation require a GitHub repository URL and maintainer permissions.
