# Graphify Schema Specification

## Schema Structure

```json
{
  "$schema": "https://graphify.engine/v1/schema.json",
  "project": "portfolio-new",
  "nodes": [
    {
      "id": "node-id",
      "name": "Node Name",
      "type": "Component | Module | Function | API Endpoint | External Dependency | Configuration",
      "path": "file/path/to/source.tsx",
      "metadata": {}
    }
  ],
  "edges": [
    {
      "source": "node-id-1",
      "target": "node-id-2",
      "type": "imports | calls | depends_on | renders | communicates_with | configures",
      "weight": 1
    }
  ]
}
```
