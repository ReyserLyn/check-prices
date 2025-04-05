import type { LucideIcon } from "lucide-react"

export interface Product {
	id: string
	title: string
	price: number
	normalPrice: number
	image: string
	stock: string
	url: string
}

export interface SidebarData {
	user: {
		name: string
		email: string
		avatar: string
	}
	navMain: {
		title: string
		url: string
		icon: LucideIcon
		items: SidebarItem[]
	}[]
	navSecondary: {
		title: string
		url: string
		icon: LucideIcon
	}[]
}

export interface SidebarItem {
	title: string
	url: string
	scrapeUrl: string
}
