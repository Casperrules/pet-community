"use client";
import { useState } from "react";
import LoginForm from "./screens/login-page/login-form";
import AuthenticatedApp from "./screens/authenticated-page/AuthenticatedApp";
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <main className="flex h-screen w-full justify-center">
      {!loggedIn ? (
        <LoginForm onSuccess={(loggedin: boolean) => setLoggedIn(loggedin)} />
      ) : (
        <AuthenticatedApp />
      )}
    </main>
  );
}
