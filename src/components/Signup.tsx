import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextInput, PasswordInput, Button, Paper, Title, Text } from "@mantine/core";

const SignupForm = () => {
    const { signup } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await signup(name, email, password);
            alert("Signup successful!");
            navigate("/"); // Redirect to canvas after successful signup
        } catch {
            setError("Signup failed. Please try again.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f9fafb",
            }}
        >
            <Paper
                radius="md"
                p="xl"
                withBorder
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "white",
                }}
            >
                <Title order={2} mb="lg">
                    Sign Up
                </Title>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        mb="md"
                    />
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        mb="md"
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        mb="md"
                    />
                    {error && (
                        <Text color="red" size="sm" mb="sm">
                            {error}
                        </Text>
                    )}
                    <Button type="submit" fullWidth>
                        Sign Up
                    </Button>
                </form>
                <Text size="sm" mt="md">
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "#1a73e8", textDecoration: "none" }}>
                        Log In
                    </a>
                </Text>
            </Paper>
        </div>
    );
};

export default SignupForm;
