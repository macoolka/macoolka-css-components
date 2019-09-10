/**
 * @file
 */
import {
    StandRule,
    Rule, GetRuleProp,
    CssProperties,
    CssTheme,
    standRuleModule,
    GetRuleTheme,
    GetRuleSTheme
} from 'macoolka-css';
export * from 'macoolka-css'
/**
 * Define a Component Rule
 * @desczh
 * 定义一个组件规则
 * @since 0.2.0
 */
export interface ComponentRule<
    TTag extends keyof JSX.IntrinsicElements = 'div',
    S extends object = {},
    E extends object = {},
    O extends object = {},
    T extends object = {},
    OT extends object = {}>
    extends Rule<S, E, O, T, OT> {
    displayName: string,
    tag: TTag,
    defaultProps: GetRuleProp<Rule<S, E, O, T, OT>>,
}
/**
 * Build a Componet Rule from base Component Rule
 * @desczh
 * 从一个组件规则的基础上建立新组件规则
 * @since 0.2.0
 */
export type ExtendComponentRule<
    S extends CssProperties = {},
    E extends CssProperties = {},
    TTag extends keyof JSX.IntrinsicElements = 'div',
    R extends ComponentRule = typeof standComponentRule,
    T extends CssTheme = {}>
    = ComponentRule<TTag, S, E, GetRuleProp<R>, T, GetRuleTheme<R>>
/**
 * Component Module include a ComponentRule and next ComponentModule and Theme
 * @desczh
 * 组件模块包括组件规则和前一个组件规则以及Thmeme
 * @since 0.2.0
 */
export interface ComponentModule<
    R extends ComponentRule<any> = ComponentRule,
    N extends ComponentRule = ComponentRule,
    T extends CssTheme = GetRuleTheme<R>> {
    theme: T,
    rule: R
    next?: ComponentModule<N>
}
/**
 * Build a Componet Module from base Component Module
 * @desczh
 * 从一个组建模块的基础上建立新组件模块
 * @since 0.2.0
 */
export interface ExtendComponentModule {
    <RA extends ComponentRule>(n: ComponentModule<RA>):
        <RB extends ComponentRule>(b: ComponentModule<RB, never, GetRuleSTheme<RB>>) => ComponentModule<RB, RA>
}
/**
 * Build a Componet Module from base Component Module(Theme is {})
 * @desczh
 * 从一个组建模块的基础上建立新组件模块(Theme is {})
 * @since 0.2.0
 */
export interface ExtendComponentModuleNoTheme {
    <RA extends ComponentRule<any>>(n: ComponentModule<RA>):
        <

            S extends CssProperties = {},
            E extends CssProperties = {},
            TTag extends keyof JSX.IntrinsicElements = 'div', >(b: ExtendComponentRule<S, E, TTag, RA>) => ComponentModule<ExtendComponentRule< S, E,TTag, RA>, RA>
}
/**
 * 
 * @since 0.2.0
 */
export const extendComponentModule: ExtendComponentModule = a => b =>
    ({
        rule: b.rule,
        theme: {
            ...a.theme,
            ...b.theme,
        },
        next: a
    })
/**
 * 
 * @since 0.2.0
 */
export const extendComponentModuleNoTheme: ExtendComponentModuleNoTheme = a => b =>
    ({
        rule: b,
        theme: {
            ...a.theme,
        },
        next: a
    })
/**
 * Stand Component Rule
 * @since 0.2.0
 */
export const standComponentRule: StandRule & {
    displayName: string,
    tag: 'div',
    defaultProps: GetRuleProp<StandRule>,
} = {
    ...standRuleModule.rule,
    displayName: '',
    tag: 'div',
    defaultProps: {}
}
/**
 * Stand Component Rule Module
 * @since 0.2.0
 */
export const standComponentModule: ComponentModule<typeof standComponentRule> = {
    theme: standRuleModule.theme,
    rule: standComponentRule,
    next: standRuleModule.next as any
}
/**
 * Extend a Compoent from Stand Component Module
 * @since 0.2.0
 */
export const extendStandModule = extendComponentModule(standComponentModule)
/**
 * Extend a Compoent that theme is empty from Stand Component Module
 * @since 0.2.0
 */
export const extendStandModuleNoTheme = extendComponentModuleNoTheme(standComponentModule)
/**
 * Extend a Compoent that theme is empty from Stand Component Module
 * @since 0.2.0
 */
export const esn = extendStandModuleNoTheme



