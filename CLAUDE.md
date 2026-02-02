# Project: WordPress Plugin Development Learning Repository

## Overview

This repository documents my learning journey through the Udemy course "WordPress Plugin Development with Claude AI (No Coding)". All plugins developed during the course are stored here, along with documentation published via GitHub Pages.

## Directory Structure

- `.claude/skills/` - WordPress agent skills for AI assistance (DO NOT MODIFY)
- `docs/` - Astro + Starlight documentation site
- `plugins/` - WordPress plugins developed during the course
- `tests/` - Testing configurations
- `.github/workflows/` - CI/CD pipelines

## Documentation Workflow

When working on a new lesson/plugin:

1. Create plugin directory: `plugins/XX-plugin-name/`
2. Document in: `docs/src/content/docs/plugins/XX-plugin-name.mdx`
3. Update progress: `docs/src/content/docs/progress/YYYY-MM-DD-day-N.mdx`

## Plugin Development Standards

Use WordPress Agent Skills for:
- Proper hook usage
- Security best practices (nonces, sanitization, escaping)
- WordPress Coding Standards compliance
- REST API patterns when needed
- Block development for Gutenberg

## Commands

```bash
# Run documentation locally
cd docs && npm run dev

# Build documentation
cd docs && npm run build

# Test plugin in WP Playground
# Visit: https://playground.wordpress.net
```

## Important Notes

- All plugins should follow WordPress GPL v2+ licensing
- Test plugins in WP Playground before committing
- Document every session in the progress folder
- Use the plugin template in `docs/src/content/docs/plugins/_template.mdx`
