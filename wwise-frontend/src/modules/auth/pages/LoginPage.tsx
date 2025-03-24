"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const [error, setError] = useState("");

    const handleLogin = async (email: string, password: string) => {
        setError("");

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setError("Email ou senha inválidos.");
        } else {
            window.location.href = "/resume";
        }
    };

    return <LoginForm onLogin={handleLogin} error={error} />;
}
