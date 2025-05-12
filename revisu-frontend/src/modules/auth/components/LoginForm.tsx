import { useState } from "react";

import Image from "next/image";

import { Button } from '@/components/ui/button';
import Link from "next/link";

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    error: string;
}

const LoginForm = ({ onLogin, error }: LoginFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <main className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-2">Welcome, Learner!</h1>
                <p className="text-center text-gray-600 mb-6">Login to continue</p>

                <Button variant="ghost" size="md" className="border-2 w-full flex items-center justify-center gap-2 mb-6">
                    <Image
                        src="/images/google-black-icon.png"
                        alt="google-black-icon"
                        width={25}
                        height={25}
                    />
                </Button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-gray-300" />
                    <p className="text-gray-500 text-sm">Or</p>
                    <div className="h-px flex-1 bg-gray-300" />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex justify-between text-sm text-indigo-600 underline mt-1">
                        <Link href="#">I do not have an account</Link>
                        <Link href="#">I forgot my password</Link>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white rounded-md py-2 mt-4 hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            </main>
        </div>
    );
};

export default LoginForm;
