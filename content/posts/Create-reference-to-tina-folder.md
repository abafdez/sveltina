---
title: Create reference to tina folder
---

In sk3, aliases like `$lib` are no longer define in svelte config, instead,\
in the `package.json` file you can add your own imports, like

```json package.json
	"imports": {
		"#lib": "./src/lib/index.js",
		"#lib/*": "./src/lib/*",
		"#tina/*": "./tina/*"
	},
```

this way, we can make imports like

```typescript
import client from '#tina/__generated__/client.ts';
```
