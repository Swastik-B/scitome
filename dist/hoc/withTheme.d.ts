import React from 'react';
import { AnyComponent, ExecutionProps } from '../types';
export default function withTheme<T extends AnyComponent>(Component: T): React.ForwardRefExoticComponent<React.PropsWithoutRef<JSX.LibraryManagedAttributes<T, ExecutionProps>> & React.RefAttributes<T>> & { [key in Exclude<keyof T, T extends React.MemoExoticComponent<any> ? "defaultProps" | "$$typeof" | "displayName" | "type" | "propTypes" | "compare" : T extends React.ForwardRefExoticComponent<any> ? "defaultProps" | "$$typeof" | "displayName" | "propTypes" | "render" : "prototype" | "length" | "arguments" | "caller" | "name" | "defaultProps" | "displayName" | "type" | "propTypes" | "contextType" | "contextTypes" | "childContextTypes" | "getDerivedStateFromProps" | "getDerivedStateFromError" | "getDefaultProps" | "mixins" | "callee" | "arity">]: T[key]; };