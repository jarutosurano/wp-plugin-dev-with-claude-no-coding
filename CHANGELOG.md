# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Nothing yet

## [0.1.1] - 2025-02-02

### Added
- Automated release workflow (creates GitHub releases on tag push)
- Changelog page in documentation site
- Custom inline theme toggle (Light/Dark/System buttons)

### Fixed
- Card hover effect on homepage (now uses subtle border glow instead of scale transform)
- Lighthouse CI base path configuration
- Lychee link checker running in offline mode

### Changed
- Theme selector from dropdown to inline button group

## [0.1.0] - 2025-02-01

### Added
- Initial project setup with monorepo structure
- Astro + Starlight documentation site with Tailwind CSS
- 13 WordPress Agent Skills for Claude Code assistance
- GitHub Actions CI/CD pipeline:
  - Lychee link checker (offline mode)
  - Lighthouse CI for performance/accessibility audits
  - PHP syntax validation
  - Plugin structure validation
- Custom inline theme toggle (Light/Dark/System)
- Documentation structure:
  - Getting Started guides
  - Learning Progress tracking
  - Plugin documentation templates
  - Reference pages (Commands, Resources)
- GitHub Pages deployment

### Security
- Configured with WordPress security best practices via agent skills

---

## Version Guidelines

- **MAJOR** version: Incompatible changes or major course milestones
- **MINOR** version: New plugins or significant features added
- **PATCH** version: Bug fixes, documentation updates, small improvements

[Unreleased]: https://github.com/jarutosurano/wp-plugin-dev-with-claude-no-coding/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/jarutosurano/wp-plugin-dev-with-claude-no-coding/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/jarutosurano/wp-plugin-dev-with-claude-no-coding/releases/tag/v0.1.0
