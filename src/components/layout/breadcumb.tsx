"use client"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { sidebarData } from "@/lib/sidebar-data"
import { usePathname } from "next/navigation"

export default function DynamicBreadcrumbs() {
	const pathname = usePathname()
	const currentPath = pathname || "/"

	const findRouteTitle = (path: string) => {
		for (const category of sidebarData.navMain) {
			if (category.url === path) {
				return category.title
			}

			if (category.items) {
				for (const item of category.items) {
					if (item.url === path) {
						return item.title
					}
				}
			}
		}

		for (const item of sidebarData.navSecondary) {
			if (item.url === path) {
				return item.title
			}
		}

		const segments = path.split("/").filter(Boolean)
		const lastSegment = segments[segments.length - 1] || "Inicio"
		return lastSegment
			.split("-")
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ")
	}

	const generateBreadcrumbs = () => {
		const segments = currentPath.split("/").filter(Boolean)
		const breadcrumbs = []

		breadcrumbs.push(
			<BreadcrumbItem key="home">
				<BreadcrumbLink href="/">Inicio</BreadcrumbLink>
			</BreadcrumbItem>,
		)

		let accumulatedPath = ""
		for (let i = 0; i < segments.length; i++) {
			accumulatedPath += `/${segments[i]}`
			const isLast = i === segments.length - 1
			const routeTitle = findRouteTitle(accumulatedPath)

			if (i > 0 || segments.length > 0) {
				breadcrumbs.push(<BreadcrumbSeparator key={`sep-${i}`} />)
			}

			breadcrumbs.push(
				<BreadcrumbItem key={accumulatedPath}>
					{isLast ? (
						<BreadcrumbPage>{routeTitle}</BreadcrumbPage>
					) : (
						<BreadcrumbLink href={accumulatedPath}>
							{routeTitle}
						</BreadcrumbLink>
					)}
				</BreadcrumbItem>,
			)
		}

		return breadcrumbs
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>{generateBreadcrumbs()}</BreadcrumbList>
		</Breadcrumb>
	)
}
