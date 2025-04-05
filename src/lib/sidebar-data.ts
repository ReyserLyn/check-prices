import type { SidebarData } from "@/types/products"
import { Box, CircuitBoard, LifeBuoy, Mouse, ShoppingCart } from "lucide-react"

export const sidebarData: SidebarData = {
	user: {
		name: "Reyser",
		email: "reyserlyn@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	},

	navMain: [
		{
			title: "Equipos",
			url: "",
			icon: Box,
			items: [
				{
					title: "Laptops",
					url: "/equipos/laptops",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=laptop",
				},
				{
					title: "Impresoras",
					url: "/equipos/impresoras",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=impresora",
				},
				{
					title: "Sillas Gamer",
					url: "/equipos/sillas-gamer",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=silla",
				},
				{
					title: "Monitores",
					url: "/equipos/monitores",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=monitor",
				},
				{
					title: "All in One",
					url: "/equipos/all-in-one",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=laptop",
				},
				{
					title: "Computadoras",
					url: "/equipos/computadoras",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=computa",
				},
				{
					title: "Proyectores",
					url: "/equipos/proyectores",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=proyector",
				},
				{
					title: "Tablets",
					url: "/equipos/tablets",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=tablet",
				},
				{
					title: "Puntos de venta",
					url: "/equipos/puntos-de-venta",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=punto",
				},
				{
					title: "Red Wifi",
					url: "/equipos/red-wifi",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=red",
				},
				{
					title: "Estabilizadores",
					url: "/equipos/estabilizadores",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=estabi",
				},
			],
		},
		{
			title: "Componentes CPU",
			url: "#",
			icon: CircuitBoard,
			items: [
				{
					title: "Procesadores",
					url: "/componentes-cpu/procesadores",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=cpu",
				},
				{
					title: "Placa Madre",
					url: "/componentes-cpu/placa-madre",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=mbb",
				},
				{
					title: "Memorias Ram",
					url: "/componentes-cpu/memorias-ram",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=ram",
				},
				{
					title: "Ssd y nvme",
					url: "/componentes-cpu/ssd-y-nvme",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=disco",
				},
				{
					title: "Tarjetas de Video",
					url: "/componentes-cpu/tarjetas-de-video",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=video",
				},
				{
					title: "Cases",
					url: "/componentes-cpu/cases",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=case",
				},
				{
					title: "Fuentes",
					url: "/componentes-cpu/fuentes",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=fuente",
				},
				{
					title: "Refigeración liquida",
					url: "/componentes-cpu/refrigeracion-liquida",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=ref",
				},
				{
					title: "Refigeración aire",
					url: "/componentes-cpu/refrigeracion-liquida",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=ref",
				},
				{
					title: "Pasta térmica",
					url: "/componentes-cpu/pasta-termica",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=pasta",
				},
			],
		},
		{
			title: "Perifericos",
			url: "#",
			icon: Mouse,
			items: [
				{
					title: "Teclados",
					url: "/perifericos/teclados",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=teclado",
				},
				{
					title: "Mouses",
					url: "/perifericos/mouses",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=mouse",
				},
				{
					title: "Audifonos",
					url: "/perifericos/audifonos",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=audi",
				},
				{
					title: "Parlantes",
					url: "/perifericos/parlantes",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=parlante",
				},
				{
					title: "Cámara web",
					url: "/perifericos/camara-web",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=camara",
				},
				{
					title: "Micrófono",
					url: "/perifericos/microfono",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=microfo",
				},
				{
					title: "Mouse Pad",
					url: "/perifericos/mouse-pad",
					scrapeUrl: "https://rematazo.pe/tienda.php?fam=pad",
				},
			],
		},
	],

	navSecondary: [
		{
			title: "Soporte Técnico",
			url: "mailto:reyserlyn@gmail.com",
			icon: LifeBuoy,
		},
		{
			title: "Tienda Oficial",
			url: "https://rematazo.pe/tienda.php?fam=disco",
			icon: ShoppingCart,
		},
	],
}
