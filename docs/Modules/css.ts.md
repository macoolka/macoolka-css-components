---
title: css.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [ComponentModule (interface)](#componentmodule-interface)
- [ComponentRule (interface)](#componentrule-interface)
- [ExtendComponentModule (interface)](#extendcomponentmodule-interface)
- [ExtendComponentModuleNoTheme (interface)](#extendcomponentmodulenotheme-interface)
- [ExtendComponentRule (type alias)](#extendcomponentrule-type-alias)
- [esn (constant)](#esn-constant)
- [extendStandModule (constant)](#extendstandmodule-constant)
- [extendStandModuleNoTheme (constant)](#extendstandmodulenotheme-constant)
- [standComponentModule (constant)](#standcomponentmodule-constant)
- [standComponentRule (constant)](#standcomponentrule-constant)
- [extendComponentModule (function)](#extendcomponentmodule-function)
- [extendComponentModuleNoTheme (function)](#extendcomponentmodulenotheme-function)

---

# ComponentModule (interface)

Component Module include a ComponentRule and next ComponentModule and Theme

**Signature**

```ts
interface ComponentModule {
  next?: ComponentModule<N>
  rule: R
  theme: T
}
```

Added in v0.2.0

# ComponentRule (interface)

Define a Component Rule

**Signature**

```ts
interface ComponentRule {
  defaultProps: GetRuleProp<Rule<S, E, O, T, OT>>
  displayName: string
  tag: TTag
}
```

Added in v0.2.0

# ExtendComponentModule (interface)

Build a Componet Module from base Component Module

**Signature**

```ts
interface ExtendComponentModule {}
```

Added in v0.2.0

# ExtendComponentModuleNoTheme (interface)

Build a Componet Module from base Component Module(Theme is {})

**Signature**

```ts
interface ExtendComponentModuleNoTheme {}
```

Added in v0.2.0

# ExtendComponentRule (type alias)

Build a Componet Rule from base Component Rule

**Signature**

```ts
export type ExtendComponentRule<
  S extends CssProperties = {},
  E extends CssProperties = {},
  TTag extends keyof JSX.IntrinsicElements = 'div',
  R extends ComponentRule = typeof standComponentRule,
  T extends CssTheme = {}
> = ComponentRule<TTag, S, E, GetRuleProp<R>, T, GetRuleTheme<R>>
```

Added in v0.2.0

# esn (constant)

Extend a Compoent that theme is empty from Stand Component Module

**Signature**

```ts

export const esn: <S, E, TTag>(b: ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>) => ComponentModule<ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, Theme & Theme & Theme> = ...

```

Added in v0.2.0

# extendStandModule (constant)

Extend a Compoent from Stand Component Module

**Signature**

```ts

export const extendStandModule: <RB>(b: ComponentModule<RB, never, NonNullable<RB["_ST"]>>) => ComponentModule<RB, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, NonNullable<RB["_T"]>> = ...

```

Added in v0.2.0

# extendStandModuleNoTheme (constant)

Extend a Compoent that theme is empty from Stand Component Module

**Signature**

```ts

export const extendStandModuleNoTheme: <S, E, TTag>(b: ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>) => ComponentModule<ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, Theme & Theme & Theme> = ...

```

Added in v0.2.0

# standComponentModule (constant)

Stand Component Rule Module

**Signature**

```ts

export const standComponentModule: ComponentModule<typeof standComponentRule> = ...

```

Added in v0.2.0

# standComponentRule (constant)

Stand Component Rule

**Signature**

```ts

export const standComponentRule: StandRule & {
    displayName: string,
    tag: 'div',
    defaultProps: GetRuleProp<StandRule>,
} = ...

```

Added in v0.2.0

# extendComponentModule (function)

**Signature**

```ts

export const extendComponentModule: ExtendComponentModule = a => b => ...

```

Added in v0.2.0

# extendComponentModuleNoTheme (function)

**Signature**

```ts

export const extendComponentModuleNoTheme: ExtendComponentModuleNoTheme = a => b => ...

```

Added in v0.2.0
