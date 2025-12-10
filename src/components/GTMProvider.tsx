'use client';

import { useGTM } from '@/hooks/useGTM';

export function GTMProvider({ children }: { children: React.ReactNode }) {
    useGTM();
    return <>{children}</>;
}
