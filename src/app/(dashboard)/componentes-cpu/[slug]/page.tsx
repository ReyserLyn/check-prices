import ProductsTable from "@/components/products/products-table"
import { sidebarData } from "@/lib/sidebar-data"
import type { SidebarItem } from "@/types/products"

export default async function Page({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const allItems = sidebarData.navMain.flatMap(
		(section: { items: SidebarItem[] }) => section.items || [],
	)

	const categoryItem = allItems.find(
		(item: SidebarItem) => item.url === `/componentes-cpu/${slug}`,
	)

	if (!categoryItem?.scrapeUrl) {
		return <div className="p-8">Categoría no encontrada</div>
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/scrape?url=${encodeURIComponent(categoryItem.scrapeUrl)}`,
	)

	if (!res.ok) {
		return <div className="p-8">Error al cargar productos</div>
	}

	const { data: products } = await res.json()

	return (
		<div className="container mx-auto py-8 p-4">
			<h1 className="text-2xl font-bold mb-6">{categoryItem.title}</h1>
			<ProductsTable data={products} />
		</div>
	)
}
