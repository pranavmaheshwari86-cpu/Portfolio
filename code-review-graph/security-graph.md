# Security Graph & Attack Surface Analysis

```mermaid
graph TD
    ClientInput[User Input in Contact Modal] --> Sanitization[Trim & Validation]
    Sanitization --> ReactEscape[React Automated String Escaping]
    ReactEscape --> StateUpdate[Local Component State]

    ExternalLink[External Link Anchors] --> TargetCheck{Is target=_blank?}
    TargetCheck -->|Yes| RelCheck[Enforce rel=noopener noreferrer]
    RelCheck --> SafeNavigation[Safe Tab Navigation]
```

## Security Scores
- **Simplicity**: 10/10 — Zero direct API exposure.
- **Maintainability**: 9.5/10 — React automated escaping protects inputs.
- **Security Score**: 9.5/10 — High static compliance.
