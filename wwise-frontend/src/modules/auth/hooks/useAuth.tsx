import { useState } from 'react';
import { loginUser, registerUser } from '../api/auth';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const data = await loginUser(email, password);
            setUser(data.user);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocorreu um erro desconhecido');
            }
        }
    };

    const register = async (email: string, password: string) => {
        try {
            const data = await registerUser(email, password);
            setUser(data.user);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocorreu um erro desconhecido');
            }
        }
    };

    return {
        user,
        error,
        login,
        register,
    };
};
