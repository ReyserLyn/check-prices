import BreadcumbPages from "@/components/layout/breadcumb"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar"
import { ToogleTheme } from "@/components/ui/toogle-theme"
import { NuqsAdapter } from "nuqs/adapters/next/app"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<NuqsAdapter>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator
								orientation="vertical"
								className="mr-2 h-4"
							/>
							<BreadcumbPages />
						</div>
						<ToogleTheme className="ml-auto mr-4" />
					</header>

					{children}
				</SidebarInset>
			</SidebarProvider>
		</NuqsAdapter>
	)
}
