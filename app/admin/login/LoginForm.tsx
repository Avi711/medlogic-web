"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const INITIAL: LoginState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, INITIAL);

  return (
    <form action={formAction} className="card w-full max-w-sm p-8">
      <h1 className="display-3 text-ink">כניסה לניהול</h1>
      <p className="caption mt-2">רשימת הפניות מהאתר.</p>

      <label className="mt-7 block">
        <span className="mb-2 block font-semibold text-ink">סיסמה</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          aria-invalid={state.error ? true : undefined}
          aria-describedby={state.error ? "login-error" : undefined}
          className="field"
        />
      </label>

      {state.error && (
        <p id="login-error" role="alert" className="mt-3 font-semibold text-error">
          {state.error}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn mt-6 w-full">
        {pending ? "בודקים..." : "כניסה"}
      </button>
    </form>
  );
}
