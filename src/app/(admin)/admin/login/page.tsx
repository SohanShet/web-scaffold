import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

export default function AdminLoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
			<Card className="w-full max-w-sm">
				<CardHeader className="items-center text-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
						<Lock className="size-5" />
					</div>
					<CardTitle className="text-xl">Admin login</CardTitle>
					<CardDescription>
						Sign in to manage your site&apos;s content.
					</CardDescription>
				</CardHeader>

				<form>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
								autoComplete="email"
								required
							/>
						</div>

						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>
								<Link
									href="#"
									className="text-xs text-muted-foreground hover:text-foreground hover:underline"
								>
									Forgot password?
								</Link>
							</div>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="••••••••"
								autoComplete="current-password"
								required
							/>
						</div>
					</CardContent>

					<CardFooter className="flex flex-col gap-4">
						<Button type="submit" className="w-full">
							Sign in
						</Button>
						<p className="text-center text-xs text-muted-foreground">
							This area is restricted to site administrators.
						</p>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
