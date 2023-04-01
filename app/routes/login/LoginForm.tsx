import * as React from "react";
import { Form, Link, useSearchParams } from "@remix-run/react";

import type { FormFieldError } from "~/shared/Form";

export type LoginFormProps = {
  errors:
    | {
        email: FormFieldError;
        password: FormFieldError;
      }
    | undefined;
  redirectTo: string;
};

export const LoginForm = ({ errors, redirectTo }: LoginFormProps) => {
  const [searchParams] = useSearchParams();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (errors?.email) {
      emailRef.current?.focus();
    } else if (errors?.password) {
      passwordRef.current?.focus();
    }
  }, [errors]);

  return (
    <Form method="post" className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            ref={emailRef}
            id="email"
            required
            autoFocus={true}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors?.email ? true : undefined}
            aria-describedby="email-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
          {errors?.email && (
            <div className="pt-1 text-red-700" id="email-error">
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            ref={passwordRef}
            name="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={errors?.password ? true : undefined}
            aria-describedby="password-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
          {errors?.password && (
            <div className="pt-1 text-red-700" id="password-error">
              {errors.password}
            </div>
          )}
        </div>
      </div>

      <input type="hidden" name="redirectTo" value={redirectTo} />
      <button
        type="submit"
        className="w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
      >
        Log in
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            className="text-blue-500 underline"
            to={{
              pathname: "/join",
              search: searchParams.toString(),
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </Form>
  );
};
