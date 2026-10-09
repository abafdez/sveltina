---
title: Ts conflict
---

It is necessary to edit the `tsconfig.json` to allow types in  the tina project, by default, it doesn't includes the tina folder.

```json
{
	"extends": "$app/tsconfig",
	"compilerOptions": {
		"strict": true,
		"types": ["$app/types", "node"]
	},
	"include": ["src", "vite.config.ts", "tina"]
}
```
