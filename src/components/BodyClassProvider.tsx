"use client";

import { useEffect } from "react";

export default function BodyClassProvider({ className, children }: { className: string; children: React.ReactNode }) {
    useEffect(() => {
        document.body.className = className;
    }, [className]);

    return <>{children}</>;
}