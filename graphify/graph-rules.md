# Graph Rules

1. Every source TSX/TS file in `src/` MUST map to at least 1 Node.
2. Every `import` statement produces an `imports` edge from source to target module.
3. Every component rendering another component produces a `renders` edge.
4. Data flow from static configuration (`portfolioData.ts`) produces a `depends_on` edge.
5. External npm package usages produce a `communicates_with` edge.
