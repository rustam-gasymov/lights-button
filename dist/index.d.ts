import * as redux from 'redux';
import * as _reduxjs_toolkit from '@reduxjs/toolkit';

declare const Increment: () => JSX.Element;

declare const setIncrementValue: _reduxjs_toolkit.ActionCreatorWithoutPayload<string>;
declare const _default: redux.Reducer<{
    value: number;
}, redux.AnyAction>;

export { Increment, _default as IncrementSlice, setIncrementValue };
