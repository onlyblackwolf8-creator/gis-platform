# Contributing to GIS Learning Platform

Thank you for your interest in contributing to the GIS Learning Platform! We welcome contributions from everyone.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/gis-platform.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Set up the development environment (see README.md)

## Development Setup

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend
```bash
cd frontend
pnpm install
```

## Code Style

### Python
- Use Black for code formatting
- Use flake8 for linting
- Use mypy for type checking
- Follow PEP 8 guidelines

```bash
black backend/app
flake8 backend/app
mypy backend/app
```

### TypeScript/JavaScript
- Use ESLint for linting
- Use Prettier for formatting
- Follow Next.js best practices

```bash
cd frontend
pnpm lint
pnpm type-check
```

## Commit Messages

Use clear, descriptive commit messages:

```
feat: Add new course creation API endpoint
fix: Resolve map zoom issue on mobile
docs: Update installation instructions
test: Add tests for authentication service
refactor: Simplify geospatial processing logic
```

## Pull Request Process

1. Update your branch with the latest main: `git fetch origin && git rebase origin/main`
2. Push your changes: `git push origin feature/your-feature-name`
3. Open a Pull Request on GitHub
4. Provide a clear description of changes
5. Wait for CI/CD checks to pass
6. Request review from maintainers
7. Address feedback and update your PR
8. Merge once approved

## Testing

### Backend
```bash
cd backend
pytest tests/ -v
```

### Frontend
```bash
cd frontend
pnpm test
```

## Reporting Issues

Before creating an issue, please check if one already exists. If creating a new issue:

1. Use a clear, descriptive title
2. Provide a detailed description
3. Include steps to reproduce (for bugs)
4. Add screenshots/logs if relevant
5. Specify your environment (OS, browser, Python version, etc.)

## Feature Requests

Feature requests are welcome! Please:

1. Clearly describe the feature
2. Explain the use case and why it's needed
3. Provide examples if possible
4. Discuss implementation approach

## Questions?

Feel free to open a discussion or ask in GitHub Issues. Our community is here to help!

## License

By contributing, you agree that your contributions will be licensed under the same MIT License as the project.
