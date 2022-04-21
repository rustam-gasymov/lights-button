import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import * as immer_dist_internal from 'immer/dist/internal';

declare const Increment: () => JSX.Element;

declare const incrementSlice: _reduxjs_toolkit.Slice<{
    value: number;
}, {
    setIncrementValue: (state: immer_dist_internal.WritableDraft<{
        value: number;
    }>) => void;
}, "increment">;
declare const setIncrementValue: _reduxjs_toolkit.ActionCreatorWithoutPayload<string>;

export { Increment, incrementSlice, setIncrementValue };
