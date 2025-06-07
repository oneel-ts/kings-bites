"use client"

import {useLanguage} from "@/context/index";

export const useTranslation = () => {
    const { translations, language } = useLanguage();

    const t = (key: string): string => {
        return translations[key] || key;
    };

    return { t, language };
};