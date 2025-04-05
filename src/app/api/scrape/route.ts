import type { Product } from "@/types/products"
import * as cheerio from "cheerio"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const targetUrl = searchParams.get("url")

		if (!targetUrl) {
			return NextResponse.json(
				{ error: "Se requiere el parámetro 'url'" },
				{ status: 400 },
			)
		}

		const response = await fetch(targetUrl, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
				"Accept-Language": "es-ES,es;q=0.9",
			},
			cache: "no-store",
		})

		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`)
		}

		const html = await response.text()
		const $ = cheerio.load(html)
		const products: Product[] = []

		$(".product-item").each((_i, el) => {
			const $el = $(el)

			const stock = $el
				.find(".type.out")
				.text()
				.replace("Stock: ", "")
				.trim()
			const title = $el.find(".product-title a").text().trim()
			const productUrl = $el.find(".product-title a").attr("href")
			const idMatch = productUrl?.match(/prod=(\d+)/)
			const image = $el.find(".imgtienda").attr("src")

			// Procesar precios
			const priceText = $el.find(".product-price").text()
			const prices = priceText
				.split("\n")
				.map(p => p.trim())
				.filter(p => p)

			let normalPrice = ""
			let webPrice = ""

			prices.forEach(text => {
				if (text.includes("Normal"))
					normalPrice = text
						.replace("S/ ", "")
						.replace("Normal", "")
						.trim()
				if (text.includes("Web!!!"))
					webPrice = text
						.replace("S/ ", "")
						.replace("Web!!!", "")
						.trim()
			})

			products.push({
				id: idMatch ? idMatch[1] : "",
				title,
				price: Number(webPrice || normalPrice || 0),
				normalPrice: Number(normalPrice || 0),
				image: image ? new URL(image, targetUrl).toString() : "",
				stock,
				url: productUrl
					? new URL(productUrl, targetUrl).toString()
					: "",
			})
		})

		return NextResponse.json({
			data: products,
			metadata: {
				sourceUrl: targetUrl,
				scrapedAt: new Date().toISOString(),
			},
		})
	} catch (error) {
		console.error("Error en el scraping:", error)
		return NextResponse.json(
			{ error: "Error al obtener los productos" },
			{ status: 500 },
		)
	}
}
