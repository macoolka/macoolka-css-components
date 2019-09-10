---
title: css.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [ComponentModule (接口)](#componentmodule-%E6%8E%A5%E5%8F%A3)
- [ComponentRule (接口)](#componentrule-%E6%8E%A5%E5%8F%A3)
- [ExtendComponentModule (接口)](#extendcomponentmodule-%E6%8E%A5%E5%8F%A3)
- [ExtendComponentModuleNoTheme (接口)](#extendcomponentmodulenotheme-%E6%8E%A5%E5%8F%A3)
- [ExtendComponentRule (类型)](#extendcomponentrule-%E7%B1%BB%E5%9E%8B)
- [esn (常量)](#esn-%E5%B8%B8%E9%87%8F)
- [extendStandModule (常量)](#extendstandmodule-%E5%B8%B8%E9%87%8F)
- [extendStandModuleNoTheme (常量)](#extendstandmodulenotheme-%E5%B8%B8%E9%87%8F)
- [standComponentModule (常量)](#standcomponentmodule-%E5%B8%B8%E9%87%8F)
- [standComponentRule (常量)](#standcomponentrule-%E5%B8%B8%E9%87%8F)
- [extendComponentModule (函数)](#extendcomponentmodule-%E5%87%BD%E6%95%B0)
- [extendComponentModuleNoTheme (函数)](#extendcomponentmodulenotheme-%E5%87%BD%E6%95%B0)

---

# ComponentModule (接口)

组件模块包括组件规则和前一个组件规则以及 Thmeme

**签名**

```ts
interface ComponentModule {
  next?: ComponentModule<N>
  rule: R
  theme: T
}
```

v0.2.0 中添加

# ComponentRule (接口)

定义一个组件规则

**签名**

```ts
interface ComponentRule {
  defaultProps: GetRuleProp<Rule<S, E, O, T, OT>>
  displayName: string
  tag: TTag
}
```

v0.2.0 中添加

# ExtendComponentModule (接口)

从一个组建模块的基础上建立新组件模块

**签名**

```ts
interface ExtendComponentModule {}
```

v0.2.0 中添加

# ExtendComponentModuleNoTheme (接口)

从一个组建模块的基础上建立新组件模块(Theme is {})

**签名**

```ts
interface ExtendComponentModuleNoTheme {}
```

v0.2.0 中添加

# ExtendComponentRule (类型)

从一个组件规则的基础上建立新组件规则

**签名**

```ts
export type ExtendComponentRule<
  S extends CssProperties = {},
  E extends CssProperties = {},
  TTag extends keyof JSX.IntrinsicElements = 'div',
  R extends ComponentRule = typeof standComponentRule,
  T extends CssTheme = {}
> = ComponentRule<TTag, S, E, GetRuleProp<R>, T, GetRuleTheme<R>>
```

v0.2.0 中添加

# esn (常量)

Extend a Compoent that theme is empty from Stand Component Module

**签名**

```ts

export const esn: <S, E, TTag>(b: ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>) => ComponentModule<ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, Theme & Theme & Theme> = ...

```

v0.2.0 中添加

# extendStandModule (常量)

Extend a Compoent from Stand Component Module

**签名**

```ts

export const extendStandModule: <RB>(b: ComponentModule<RB, never, NonNullable<RB["_ST"]>>) => ComponentModule<RB, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, NonNullable<RB["_T"]>> = ...

```

v0.2.0 中添加

# extendStandModuleNoTheme (常量)

Extend a Compoent that theme is empty from Stand Component Module

**签名**

```ts

export const extendStandModuleNoTheme: <S, E, TTag>(b: ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>) => ComponentModule<ComponentRule<TTag, S, E, Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Theme & Theme & Theme>, Rule<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, {}, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>, Theme, Theme & Theme> & { displayName: string; tag: "div"; defaultProps: Input<Props<Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>, Input<EProps & SProps, Input<EProps & SProps, BaseProps>>>; }, Theme & Theme & Theme> = ...

```

v0.2.0 中添加

# standComponentModule (常量)

Stand Component Rule Module

**签名**

```ts

export const standComponentModule: ComponentModule<typeof standComponentRule> = ...

```

v0.2.0 中添加

# standComponentRule (常量)

Stand Component Rule

**签名**

```ts

export const standComponentRule: StandRule & {
    displayName: string,
    tag: 'div',
    defaultProps: GetRuleProp<StandRule>,
} = ...

```

v0.2.0 中添加

# extendComponentModule (函数)

**签名**

```ts

export const extendComponentModule: ExtendComponentModule = a => b => ...

```

v0.2.0 中添加

# extendComponentModuleNoTheme (函数)

**签名**

```ts

export const extendComponentModuleNoTheme: ExtendComponentModuleNoTheme = a => b => ...

```

v0.2.0 中添加
