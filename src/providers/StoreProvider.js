'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { store } from '@/lib/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';
export default function StoreProvider({ children, }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = store();
    }
    return _jsx(Provider, { store: storeRef.current, children: children });
}
