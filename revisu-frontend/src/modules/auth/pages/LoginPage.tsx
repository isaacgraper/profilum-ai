"use client";

import { useState } from "react";
import { supabase } from "@/lib/db/supabase";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const [error, setError] = useState("");

    const handleLogin = async (email: string, password: string) => {
        setError("");

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setError("Email or password invalid.");
        } else {
            window.location.href = "/upload";
        }
    };

    return <LoginForm onLogin={ handleLogin } error={ error } />;
}
