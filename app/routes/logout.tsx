import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/modules/auth/infrastructure";

export async function action({ request }: ActionArgs) {
  return logout(request);
}

export async function loader() {
  return redirect("/");
}
