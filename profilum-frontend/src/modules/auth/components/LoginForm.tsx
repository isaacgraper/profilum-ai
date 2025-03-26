"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Certifique-se de que o arquivo supabase está corretamente configurado

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    error: string;
}

const LoginForm = ({ onLogin, error }: LoginFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password); // Envia as credenciais de login para a função handleLogin da LoginPage
    };

    // Verifica se o usuário já está autenticado e redireciona para '/resume'
    const checkUser = async () => {
        const { data: user } = await supabase.auth.getUser();
        if (user) {
            console.log("user", user);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>} {/* Exibe o erro, caso exista */}
        </div>
    );
};

export default LoginForm;
