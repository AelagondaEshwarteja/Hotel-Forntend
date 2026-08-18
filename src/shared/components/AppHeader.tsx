import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type AppHeaderProps = {
	title: string;
	subtitle?: string;
	rightContent?: ReactNode;
	showBack?: boolean;
	showMenu?: boolean;
};

export function AppHeader({ title, subtitle,  showBack = true,  }: AppHeaderProps) {
	const navigate = useNavigate();

	return (
		<header className="bg-background px-5 pb-4 pt-[calc(1rem+env(safe-area-inset-top))] text-foreground">
			<div className="flex items-center justify-between gap-3">
				{showBack ? (
					<button
						type="button"
						aria-label="Go back"
						onClick={() => navigate(-1)}
						className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition active:scale-95"
					>
						<ChevronLeft aria-hidden="true" className="size-5" />
					</button>
				) : (
					<span className="size-11 shrink-0" />
				)}

				<div className="min-w-0 flex-1 text-center">
					<h1 className="truncate text-lg font-bold">{title}</h1>
					{subtitle ? <p className="mt-1 truncate text-xs font-medium text-muted-foreground">{subtitle}</p> : null}
				</div>
{/* 
				{rightContent ?? (
					<button
						type="button"
						aria-label="More options"
						className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition active:scale-95"
					>
						{showMenu ? <MoreVertical aria-hidden="true" className="size-5" /> : null}
					</button>
				)} */}
			</div>
		</header>
	);
}
