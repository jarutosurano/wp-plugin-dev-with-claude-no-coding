# WordPress Plugin Development with Claude AI

Learning WordPress plugin development through the Udemy course **"WordPress Plugin Development with Claude AI (No Coding)"** - documenting everything in this repository.

## Documentation

**Live Site:** [https://jarutosurano.github.io/wp-plugin-dev-with-claude-no-coding](https://jarutosurano.github.io/wp-plugin-dev-with-claude-no-coding)

## Repository Structure

```
├── .claude/skills/     # WordPress agent skills for AI assistance
├── .github/workflows/  # CI/CD for testing and deployment
├── docs/               # Astro + Starlight documentation site
├── plugins/            # All developed plugins
├── tests/              # Testing configurations
└── README.md
```

## Getting Started

### Prerequisites

- Claude AI account (free or Pro)
- Node.js 18+ (for documentation development)
- Git

### Local Development

```bash
# Clone the repo
git clone https://github.com/jarutosurano/wp-plugin-dev-with-claude-no-coding.git
cd wp-plugin-dev-with-claude-no-coding

# Start documentation site locally
cd docs
npm install
npm run dev
```

### Testing Plugins

Use [WP Playground](https://playground.wordpress.net) for instant browser-based testing - no server setup required.

## WordPress Agent Skills

This repo includes WordPress agent skills that help Claude Code generate standards-compliant WordPress code:

| Skill | Purpose |
|-------|---------|
| `wp-plugin-development` | Plugin architecture, hooks, security |
| `wp-block-development` | Gutenberg blocks |
| `wp-rest-api` | REST API patterns |
| `wp-playground` | Testing environments |
| `wp-performance` | Optimization |

## Plugins Developed

| Plugin | Description | Status |
|--------|-------------|--------|
| *Coming soon* | Following the course... | In Progress |

## Course Information

- **Course:** [WordPress Plugin Development with Claude AI (No Coding)](https://www.udemy.com/course/wp-plugin-development-claude-code/)
- **Platform:** Udemy
- **Focus:** Building WordPress plugins using AI assistance

## License

Code in this repository is licensed under GPL v2 or later (WordPress compatible).

Documentation is licensed under MIT.
