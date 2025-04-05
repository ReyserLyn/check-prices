"use client"

import { DataTable } from "@/components/data-table/data-table"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"

import { useDataTable } from "@/hooks/use-data-table"
import type { Product } from "@/types/products"

import { parseAsString, useQueryState } from "nuqs"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"

import type { Column, ColumnDef } from "@tanstack/react-table"
import { Link2, Text } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DataTableColumnHeader } from "../data-table/data-table-column-header"
import { Badge } from "../ui/badge"
import { Checkbox } from "../ui/checkbox"

export default function ProductsTable({ data }: { data: Product[] }) {
	const [title] = useQueryState("title", parseAsString.withDefault(""))

	const filteredData = useMemo(() => {
		return data.filter(product => {
			const matchesTitle =
				title === "" ||
				product.title.toLowerCase().includes(title.toLowerCase())

			return matchesTitle
		})
	}, [title])

	function ImageCell({ row }: { row: { original: Product } }) {
		const [imageSrc, setImageSrc] = useState(
			row.original.image || "/placeholder.webp",
		)

		return (
			<div className="flex items-center gap-4">
				<Image
					src={imageSrc}
					width={40}
					height={40}
					loading="lazy"
					alt={row.original.title}
					className="h-10 w-10 rounded-md object-contain"
					onError={() => setImageSrc("/placeholder.webp")}
				/>
				<div>
					<div className="font-medium max-w-auto whitespace-normal break-words">
						{row.original.title}
					</div>
					<div className="text-xs text-gray-500">
						ID: {row.original.id}
					</div>
				</div>
			</div>
		)
	}

	const columns = useMemo<ColumnDef<Product>[]>(
		() => [
			{
				id: "select",
				header: ({ table }) => (
					<Checkbox
						checked={
							table.getIsAllPageRowsSelected() ||
							(table.getIsSomePageRowsSelected() &&
								"indeterminate")
						}
						onCheckedChange={value =>
							table.toggleAllPageRowsSelected(!!value)
						}
						aria-label="Select all"
					/>
				),
				cell: ({ row }) => (
					<Checkbox
						checked={row.getIsSelected()}
						onCheckedChange={value => row.toggleSelected(!!value)}
						aria-label="Select row"
					/>
				),
				size: 32,
				enableSorting: false,
				enableHiding: false,
			},
			{
				id: "title",
				accessorKey: "title",
				header: ({ column }) => (
					<DataTableColumnHeader column={column} title="Producto" />
				),
				cell: ({ row }) => <ImageCell row={row} />,

				meta: {
					label: "Producto",
					placeholder: "Buscar productos...",
					variant: "text",
					icon: Text,
				},
				enableColumnFilter: true,
			},
			{
				id: "price",
				accessorKey: "price",
				accessorFn: row => Number(row.price),
				enableSorting: true,
				header: ({ column }) => (
					<DataTableColumnHeader column={column} title="Precio" />
				),
				cell: ({ row }) => {
					const price = Number(row.original.price) || 0
					const normalPrice =
						Number(row.original.normalPrice) || price

					const hasDiscount = normalPrice > price

					return (
						<div className="flex flex-col">
							<span className="font-bold">
								S/ {price.toFixed(2)}
							</span>
							{hasDiscount && (
								<span className="text-xs line-through text-gray-500">
									S/ {normalPrice.toFixed(2)}
								</span>
							)}
						</div>
					)
				},
				enableColumnFilter: true,
			},
			{
				id: "stock",
				accessorKey: "stock",
				header: ({ column }: { column: Column<Product, unknown> }) => (
					<DataTableColumnHeader column={column} title="Stock" />
				),
				cell: ({ cell }) => {
					const stock = cell.getValue<Product["stock"]>()
					const isOutOfStock =
						stock === "0" || stock.toLowerCase().includes("agotado")

					return (
						<Badge
							variant={isOutOfStock ? "destructive" : "default"}
						>
							{isOutOfStock ? "Agotado" : stock}
						</Badge>
					)
				},
			},
			{
				id: "actions",
				cell: function Cell({ row }) {
					const product = row.original

					return (
						<div className="flex gap-2">
							<Button variant="outline" size="sm" asChild>
								<Link
									href={product.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Link2 className="h-4 w-4 md:mr-2" />
									<span className="hidden md:block">Ver</span>
								</Link>
							</Button>
						</div>
					)
				},
				size: 32,
			},
		],
		[],
	)

	const { table } = useDataTable({
		data: filteredData,
		columns,
		pageCount: 1,
		initialState: {
			sorting: [{ id: "title", desc: true }],
			columnPinning: { right: ["actions"] },
		},
		getRowId: row => row.id,
		enableSorting: true,
	})

	return (
		<div className="data-table-container">
			<DataTable table={table}>
				<DataTableToolbar table={table} />
			</DataTable>
		</div>
	)
}
