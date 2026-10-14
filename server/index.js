import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useMatches } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/icons/Favourite.tsx
function FavouriteIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		className: "size-6",
		children: /* @__PURE__ */ jsx("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
		})
	});
}
//#endregion
//#region app/icons/Cart.tsx
function CartIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		className: "size-6",
		children: /* @__PURE__ */ jsx("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
		})
	});
}
//#endregion
//#region app/icons/FavouriteFilled.tsx
function FavouriteFilledIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "size-6",
		children: /* @__PURE__ */ jsx("path", { d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" })
	});
}
//#endregion
//#region app/icons/CartFilled.tsx
function CartFilledIcon() {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "size-6",
		children: /* @__PURE__ */ jsx("path", { d: "M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" })
	});
}
//#endregion
//#region app/navigation/Navigation.tsx
function useHeroSearchInView() {
	const hasHeroSearch = useMatches().some((match) => match.handle?.heroSearch);
	const [inView, setInView] = useState(hasHeroSearch);
	useEffect(() => {
		const heroSearch = document.getElementById("hero-search");
		if (!heroSearch) {
			setInView(false);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "-80px 0px 0px 0px" });
		observer.observe(heroSearch);
		return () => observer.disconnect();
	}, [hasHeroSearch]);
	return inView;
}
function Navigation() {
	const heroSearchInView = useHeroSearchInView();
	return /* @__PURE__ */ jsxs("nav", {
		className: "sticky top-0 z-50 bg-olive-50 dark:bg-olive-900",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "p-4 grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: "col-start-1 col-end-2 row-start-1 row-end-2 font-serif text-4xl font-semibold italic tracking-tight",
					children: [
						"De ",
						/* @__PURE__ */ jsx("span", {
							className: "text-amber-700",
							children: "Oude"
						}),
						" Letter"
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					"aria-hidden": heroSearchInView,
					className: `${heroSearchInView ? "hidden md:flex md:invisible md:opacity-0" : "flex opacity-100"} transition-opacity duration-200 col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 items-center border pl-4 gap-2 border-amber-700/30 h-11.5 rounded-full overflow-hidden md:max-w-md w-full focus-within:ring-2 focus-within:ring-amber-700 bg-olive-50`,
					children: [/* @__PURE__ */ jsx("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "22",
						height: "22",
						viewBox: "0 0 30 30",
						fill: "#6B7280",
						children: /* @__PURE__ */ jsx("path", { d: "M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" })
					}), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Zoeken...",
						className: "w-full h-full outline-none text-stone-500 bg-transparent placeholder-stone-500 text-sm"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-3 md:col-end-4 flex gap-4 justify-end",
					children: [/* @__PURE__ */ jsxs("button", {
						className: "group p-2 text-amber-700 rounded flex flex-col items-center cursor-pointer",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "group-hover:hidden",
								children: /* @__PURE__ */ jsx(FavouriteIcon, {})
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hidden group-hover:block",
								children: /* @__PURE__ */ jsx(FavouriteFilledIcon, {})
							}),
							/* @__PURE__ */ jsx("span", {
								className: "group-hover:underline",
								children: "Verlanglijst"
							})
						]
					}), /* @__PURE__ */ jsxs("button", {
						className: "group p-2 text-amber-700 rounded flex flex-col items-center cursor-pointer",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "group-hover:hidden",
								children: /* @__PURE__ */ jsx(CartIcon, {})
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hidden group-hover:block",
								children: /* @__PURE__ */ jsx(CartFilledIcon, {})
							}),
							/* @__PURE__ */ jsx("span", {
								className: "group-hover:underline",
								children: "Winkelmand"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsx("span", { className: "border-b border-stone-300 dark:border-stone-700 max-w-6xl mx-auto block" })]
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "text-stone-800 dark:text-stone-100",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "bg-olive-50 dark:bg-olive-900",
				children: [
					/* @__PURE__ */ jsx(Navigation, {}),
					children,
					/* @__PURE__ */ jsx(ScrollRestoration, {}),
					/* @__PURE__ */ jsx(Scripts, {})
				]
			}), /* @__PURE__ */ jsx("div", { className: "paperOverlay" })]
		})]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/hero-search/HeroSearch.tsx
function HeroSearch() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-16 px-8 flex flex-col justify-center gap-8 items-center",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-5xl font-medium font-serif text-stone-800",
				children: "Wat wil je lezen?"
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "hero-search",
				className: "col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex items-center border pl-4 gap-2 border-amber-700/30 h-11.5 rounded-full overflow-hidden md:max-w-3xl w-full focus-within:ring-2 focus-within:ring-amber-700 bg-olive-50",
				children: [/* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "22",
					height: "22",
					viewBox: "0 0 30 30",
					fill: "#6B7280",
					children: /* @__PURE__ */ jsx("path", { d: "M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" })
				}), /* @__PURE__ */ jsx("input", {
					type: "text",
					placeholder: "Titel, auteur, ISBN of een stemming...",
					className: "w-full h-full outline-none text-stone-500 bg-transparent placeholder-stone-500 text-sm"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hidden md:flex gap-2",
				children: [
					/* @__PURE__ */ jsx("button", {
						className: "inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60",
						children: "kort maar krachtig"
					}),
					/* @__PURE__ */ jsx("button", {
						className: "inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60",
						children: "voor op de trein"
					}),
					/* @__PURE__ */ jsx("button", {
						className: "inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60",
						children: "misdaad en mysterie"
					}),
					/* @__PURE__ */ jsx("button", {
						className: "inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60",
						children: "halloween"
					})
				]
			})
		]
	});
}
//#endregion
//#region app/data/books.ts
var books = [
	{
		isbn: "9789044662368",
		title: "Johnnie Walker",
		author: "Connie Palmen",
		description: "'De barman begroette me licht geamuseerd met de vraag wat hij kon betekenen voor de jongedame.' De nieuwe roman van Connie Palmen.",
		price: 23.99,
		genre: "Literatuur",
		category: "fiction",
		cover: "/images/covers/9789044662368.jpg"
	},
	{
		isbn: "9789022343135",
		title: "Bankgeheim",
		author: "Jonas Boets, Pieter Aspe",
		description: "Op een ochtend blijken de bankrekeningen van de klanten van het Gemeentekrediet tot de laatste cent leeggehaald. De verdwenen bankdirecteur Peter Daelemans lijkt de spil van een minutieus geplande fraude.",
		price: 22.5,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789022343135.jpg"
	},
	{
		isbn: "9789403139135",
		title: "Agrippa",
		author: "Robert Harris",
		description: "Julius Caesar is dood, en de levens van twee jonge mannen zullen hierdoor voorgoed veranderen: Caesars neef en erfgenaam Octavius, en diens beste vriend Marcus Agrippa.",
		price: 24.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789403139135.jpg"
	},
	{
		isbn: "9789028454040",
		title: "Yesteryear",
		author: "Caro Claire Burke",
		description: "Een aangrijpende, zinderende thriller, beklemmend en vol zwarte humor. Yesteryear is een indringende visie op traditie, roem, geloof en de inspanningen die het vraagt om vrouw te zijn.",
		price: 24.99,
		genre: "Romans",
		category: "fiction",
		cover: "/images/covers/9789028454040.jpg"
	},
	{
		isbn: "9789049211363",
		title: "De vrouw van mijn echtgenoot",
		author: "Carla Kovach",
		description: "Na de zelfmoord van haar echtgenoot Hugo begint Eva een nieuw leven met hun tienjarige zoon en haar nieuwe man Zach. Ze verhuist naar de kust en begint aan haar nieuwe baan als weddingplanner.",
		price: 22.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789049211363.jpg"
	},
	{
		isbn: "9789049211967",
		title: "Geheimen van Rosewell Castle",
		author: "Corina Bomann",
		description: "Verstopt in de Schotse Hooglanden huist een prestigieuze butleracademie: Rosewell Castle. Tussen de eeuwenoude muren schuilt een keiharde wereld waarin alles tot in perfectie moet kloppen.",
		price: 22.99,
		genre: "Romans",
		category: "fiction",
		cover: "/images/covers/9789049211967.jpg"
	},
	{
		isbn: "9789402719727",
		title: "De kreeftenvrouwen",
		author: "Beatrix Gerstberger",
		description: "Wanneer Mina's broer overlijdt, stort haar leven in. Ze besluit terug te gaan naar de laatste plek waar ze gelukkig was: Eagle Island, Maine.",
		price: 23.99,
		genre: "Literatuur",
		category: "fiction",
		cover: "/images/covers/9789402719727.jpg"
	},
	{
		isbn: "9789029553568",
		title: "Lord M.",
		author: "Arthur Japin",
		description: "Het Engeland ten tijde van de jonge koningin Victoria. Twee vrouwen en een staatsman: het ware verhaal van ontluikende liefde, spectaculair overspel en onvoorwaardelijke trouw.",
		price: 26.99,
		genre: "Literatuur",
		category: "fiction",
		cover: "/images/covers/9789029553568.jpg"
	},
	{
		isbn: "9789402720426",
		title: "Stille geheimen",
		author: "Karin Slaughter",
		description: "Welkom in North Falls: een kleine stad met grote geheimen. De woning aan Iris Drive 1601 ziet er net zo uit als de andere huizen in de buurt.",
		price: 24.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789402720426.jpg"
	},
	{
		isbn: "9789057208201",
		title: "Beduveld - Limited edition",
		author: "Christian De Coninck",
		description: "Graaf Hippolyte de Saint-Marc, CEO van een bekende holding, wordt op een ochtend dood aangetroffen in zijn thuiskantoor. De huisarts stelt een natuurlijk overlijden vast, maar volgens de weduwe is er meer aan de hand.",
		price: 27.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789057208201.jpg"
	},
	{
		isbn: "9789049209780",
		title: "Zusje onder de trap",
		author: "Steena Holmes",
		description: "Twaalf jaar geleden verdween Jess spoorloos. Sindsdien ontvangt haar tweelingzus Paige elk jaar een bos bloemen met een briefje waarop alleen staat: 'Het spijt me.'",
		price: 20.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789049209780.jpg"
	},
	{
		isbn: "9789026370182",
		title: "Verkeerde afslag",
		author: "Nicci French",
		description: "Welkom in Brookstead, een idyllisch Engels dorp. Maar sommige inwoners hebben veel te verbergen. Amy Barton heeft ogenschijnlijk alles: een fijn gezin, een mooi huis en een leuke baan.",
		price: 24.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789026370182.jpg"
	},
	{
		isbn: "9789046835326",
		title: "Wat ik je niet heb verteld",
		author: "Emma Robinson",
		description: "Een huwelijk. Twee leugens. Welke zal ons breken? Een rollercoaster aan plottwists die je niet ziet aankomen.",
		price: 9.99,
		genre: "Romans",
		category: "fiction",
		cover: "/images/covers/9789046835326.jpg"
	},
	{
		isbn: "9789026371356",
		title: "De stalker",
		author: "Helen Fields",
		description: "Hij observeert je. Altijd. En overal. Connie Woolwine en brigadier Lively zijn terug in deze bloedstollende thriller.",
		price: 22.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789026371356.jpg"
	},
	{
		isbn: "9789021056531",
		title: "Het ultieme geheim",
		author: "Dan Brown",
		description: "Robert Langdon reist naar Praag voor een lezing van zijn vriendin Katherine Solomon, maar hun verblijf ontaardt in chaos door een brute moord.",
		price: 29.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789021056531.jpg"
	},
	{
		isbn: "9789493547148",
		title: "De Resten",
		author: "Toni Coppers, Annick Lambert",
		description: "Vijf jaar geleden verdween Elise op een wijnfeest in een Limburgs dorpje. Wat van haar teruggevonden werd, tart alle verbeelding en maakt haar verdwijning tot de bekendste cold case van het land.",
		price: 24.99,
		genre: "Thrillers",
		category: "fiction",
		cover: "/images/covers/9789493547148.jpg"
	},
	{
		isbn: "9789400520486",
		title: "Grote kleine waarheid",
		author: "Liane Moriarty",
		description: "Op een school in een paradijselijke kustplaats bij Sydney treft de rector een afgehakte vinger aan in zijn post. Alle ouders zijn geschokt, maar vijf vriendinnen hebben andere dingen aan hun hoofd.",
		price: 26.99,
		genre: "Literatuur",
		category: "fiction",
		cover: "/images/covers/9789400520486.jpg"
	},
	{
		isbn: "9789048874002",
		title: "Zwanenzang. Diana, mijn zus",
		author: "Charles Spencer",
		description: "Bijna dertig jaar na zijn grafrede in Westminster Abbey vertelt Charles Spencer openhartig over het opgroeien met zijn zus Diana en over de tragische week van haar dood.",
		price: 29.99,
		genre: "Biografie",
		category: "non-fiction",
		cover: "/images/covers/9789048874002.jpg"
	},
	{
		isbn: "9789059960800",
		title: "Murdoku",
		author: "Manuel Garand",
		description: "Help, er is een moord gepleegd! Aan jou om de dader te ontmaskeren in 80 crime scenes, waaronder een bakkerij, een casino, een schaaktoernooi en een opera.",
		price: 19.99,
		genre: "Puzzels",
		category: "non-fiction",
		cover: "/images/covers/9789059960800.jpg"
	},
	{
		isbn: "9789059968042",
		title: "Cum fraude",
		author: "Laurens Kindt",
		description: "In januari 2024 leggen 166 kandidaat-magistraten het gevreesde schriftelijke examen af. Een onderzoek naar hoe dat examen gecompromitteerd werd, en wat dat betekent voor de integriteit van het gerecht.",
		price: 24.99,
		genre: "True crime",
		category: "non-fiction",
		cover: "/images/covers/9789059968042.jpg"
	},
	{
		isbn: "9789059966529",
		title: "De slimste keuken",
		author: "Pascale Naessens",
		description: "Waarom blijven we geloven dat overgewicht te maken heeft met een gebrek aan wilskracht? Pascale Naessens zet de klassieke voedingsleer op zijn kop.",
		price: 29.99,
		genre: "Koken",
		category: "non-fiction",
		cover: "/images/covers/9789059966529.jpg"
	},
	{
		isbn: "9789465303703",
		title: "WinWin",
		author: "Xavier Taveirne",
		description: "Het boek bij het consumentenprogramma op Radio 2 en VRT 1. Xavier Taveirne helpt je je leven betaalbaarder te maken met concrete tips en waardevol advies.",
		price: 24.5,
		genre: "Zelfhulp",
		category: "non-fiction",
		cover: "/images/covers/9789465303703.jpg"
	},
	{
		isbn: "9789465305592",
		title: "Dwars door de Pyreneeën",
		author: "Arnout Hauben",
		description: "Van de woeste golven van de Atlantische Oceaan tot de zonovergoten stranden van de Middellandse Zee loopt een ruwe ruggengraat tussen Frankrijk en Spanje: de Pyreneeën.",
		price: 27,
		genre: "Reizen",
		category: "non-fiction",
		cover: "/images/covers/9789465305592.jpg"
	},
	{
		isbn: "9789464044263",
		title: "Even simpel",
		author: "Yotam Ottolenghi",
		description: "135 nieuwe recepten voor ontbijt, lunch, diner en dessert: klaar in minder dan 30 minuten, in één pan, of vooraf te bereiden.",
		price: 34.99,
		genre: "Koken",
		category: "non-fiction",
		cover: "/images/covers/9789464044263.jpg"
	},
	{
		isbn: "9789464107302",
		title: "Abbondanza",
		author: "Olga Leyers, Giancarlo Angeletti",
		description: "Olga Leyers en Giancarlo Angeletti gunnen ons een blik in hun keuken, met hun smakelijkste aperitiefhapjes, lekkerste pasta's en feestelijkste gerechten.",
		price: 29.99,
		genre: "Koken",
		category: "non-fiction",
		cover: "/images/covers/9789464107302.jpg"
	},
	{
		isbn: "9789401492683",
		title: "Murdle",
		author: "G.T. Karber",
		description: "Wie plande de gruwelijke moord? Welk wapen gebruikte de dader? Waar werd het slachtoffer omgebracht? Los de moordmysteries op met deductie.",
		price: 17.99,
		genre: "Puzzels",
		category: "non-fiction",
		cover: "/images/covers/9789401492683.jpg"
	},
	{
		isbn: "9789059964761",
		title: "Hangmatbelegger voor het leven",
		author: "Tim Nijsmans, Yoran Brondsema",
		description: "Antwoorden op 164 concrete vragen van beleggers, van je eerste inleg en de keuze van een broker tot beleggen voor je kinderen en je pensioen.",
		price: 25.99,
		genre: "Geld & beleggen",
		category: "non-fiction",
		cover: "/images/covers/9789059964761.jpg"
	},
	{
		isbn: "9789465305707",
		title: "Altijd honger! 2",
		author: "Louise Goedefroy",
		description: "Na het succes van haar eerste kookboek dook Louise Goedefroy opnieuw de keuken in voor een tweede portie onweerstaanbare gerechten.",
		price: 27,
		genre: "Koken",
		category: "non-fiction",
		cover: "/images/covers/9789465305707.jpg"
	},
	{
		isbn: "9789464106121",
		title: "Het C.R.U.I.S.E. complot",
		author: "Timon Verbeeck",
		description: "Timon Verbeeck geniet van een typische vakantie. Als hij een brief in een fles vindt, gaat hij op zoek naar de schrijver van de mysterieuze boodschap.",
		price: 18.99,
		genre: "Kinderboeken",
		category: "youth",
		cover: "/images/covers/9789464106121.jpg"
	},
	{
		isbn: "9789048323593",
		title: "De pompoendief",
		author: "Alice Hemming",
		description: "Met een beetje hulp van Vogel heeft Eekhoorn prachtige pompoenen gekweekt. Maar elke keer als hij niet kijkt... verdwijnt er een pompoen!",
		price: 14.99,
		genre: "Prentenboeken",
		category: "youth",
		cover: "/images/covers/9789048323593.jpg"
	},
	{
		isbn: "9789030511731",
		title: "Rutger, Thomas & Paco - Het Waterpark",
		author: "Rutger Vink",
		description: "Rutger, Thomas en Paco dromen van een waterpark waar honden óók welkom zijn. Samen bedenken ze Paqualand, het coolste zwemparadijs ooit!",
		price: 19.99,
		genre: "Kinderboeken",
		category: "youth",
		cover: "/images/covers/9789030511731.jpg"
	},
	{
		isbn: "9789047718246",
		title: "Gruffaloma",
		author: "Julia Donaldson",
		description: "'Kind,' zei de Gruffalo. 'Dit wordt genieten. Jouw Gruffaloma komt op visite.' Het derde prentenboek met de Gruffalo en de muis.",
		price: 15.99,
		genre: "Prentenboeken",
		category: "youth",
		cover: "/images/covers/9789047718246.jpg"
	},
	{
		isbn: "9789025781897",
		title: "Schiet op, schildpadjes",
		author: "Rachel Bright",
		description: "Een spannend prentenboek vol vaart over moed en keuzes maken. De pas uitgekomen schildpadjes racen naar de zee, maar Dodo moet kiezen tussen winnen en haar verdwaalde broertje helpen.",
		price: 16.99,
		genre: "Prentenboeken",
		category: "youth",
		cover: "/images/covers/9789025781897.jpg"
	},
	{
		isbn: "9789062229802",
		title: "Alex en de gemene tweelingbroer",
		author: "Alex Klein, Jelmer Jepsen",
		description: "Als Alex hoort dat hij een geheime tweelingbroer heeft, kan hij zijn oren niet geloven. Axel is ontstaan uit een geheim experiment van een gekke professor.",
		price: 16.99,
		genre: "Kinderboeken",
		category: "youth",
		cover: "/images/covers/9789062229802.jpg"
	},
	{
		isbn: "9789043944892",
		title: "De Zoete Zusjes stelen de show",
		author: "Hanneke de Zoete",
		description: "Terwijl Bram oefent voor de klasmusical, organiseren Saar en Janna hun eigen talentenshow. De hele buurt mag meedoen, van ballet tot goocheltrucs.",
		price: 16.5,
		genre: "Prentenboeken",
		category: "youth",
		cover: "/images/covers/9789043944892.jpg"
	},
	{
		isbn: "9789493521407",
		title: "Ik mis je",
		author: "Anky De Frangh, Julie Vangeel",
		description: "Soms moet je afscheid nemen. Aan de schoolpoort, aan de deur van de klas, of gewoon voor een paar uurtjes. En dat kan, voor kind én ouder, best spannend zijn.",
		price: 17.99,
		genre: "Kinderboeken",
		category: "youth",
		cover: "/images/covers/9789493521407.jpg"
	},
	{
		isbn: "9789047700135",
		title: "Raad eens hoeveel ik van je hou",
		author: "Sam McBratney",
		description: "Hazeltje en Grote Haas willen elkaar graag laten zien hoeveel ze van elkaar houden.",
		price: 12.99,
		genre: "Prentenboeken",
		category: "youth",
		cover: "/images/covers/9789047700135.jpg"
	},
	{
		isbn: "9789026177422",
		title: "Partypooper",
		author: "Jeff Kinney",
		description: "Bram is jarig! Hij kijkt uit naar een groot feest vol cadeaus, vrienden en lol. Maar zijn ouders blijken zijn verjaardag te zijn vergeten...",
		price: 18.5,
		genre: "Kinderboeken",
		category: "youth",
		cover: "/images/covers/9789026177422.jpg"
	}
];
//#endregion
//#region app/featured-books/HeroBook.tsx
function HeroBook({ book, catchPhrase }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-8 py-16 border-r border-stone-300",
		children: [/* @__PURE__ */ jsx("div", {
			className: "shrink-0",
			children: /* @__PURE__ */ jsx("img", {
				src: book.cover,
				alt: `Boekcover van ${book.title}`,
				className: "h-121.5 aspect-2/3 object-cover"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "pb-2 text-amber-700 font-serif italic text-xl",
					children: catchPhrase
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-2xl font-serif font-medium",
					children: book.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "pb-4",
					children: /* @__PURE__ */ jsx("a", {
						className: "text-stone-500 underline decoration-amber-700 cursor-pointer",
						children: book.author
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-stone-500",
					children: book.description
				}),
				/* @__PURE__ */ jsx("p", {
					className: "pb-8",
					children: /* @__PURE__ */ jsx("a", {
						className: "text-amber-700 cursor-pointer underline",
						children: "Meer lezen"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-4 items-center",
					children: [
						/* @__PURE__ */ jsx("button", {
							className: "px-6 py-3 border text-amber-700 border-amber-700 rounded cursor-pointer hover:bg-amber-700 hover:text-white",
							children: "In winkelwagen"
						}),
						/* @__PURE__ */ jsx("button", {
							className: "text-amber-700 cursor-pointer",
							children: /* @__PURE__ */ jsx(FavouriteIcon, {})
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "text-xl",
							children: ["€", book.price.toFixed(2)]
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region app/featured-books/FeaturedBookItem.tsx
function FeaturedBookItem({ book, catchPhrase, onClick }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[auto_1fr] gap-4 group hover:cursor-pointer",
		onClick,
		children: [/* @__PURE__ */ jsx("img", {
			src: book.cover,
			alt: `Boekcover van ${book.title}`,
			className: "w-23 aspect-2/3 object-cover"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-amber-700 font-serif italic text-xs",
					children: catchPhrase
				}),
				/* @__PURE__ */ jsx("p", {
					className: "font-serif font-medium text-lg group-hover:underline",
					children: book.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-stone-500 group-hover:underline",
					children: book.author
				})
			]
		})]
	});
}
//#endregion
//#region app/featured-books/FeaturedBooks.tsx
var feauturedIsbns = [
	"9789021056531",
	"9789044662368",
	"9789022343135",
	"9789403139135"
];
function FeaturedBooks() {
	const catchPhrases = [
		"Nieuw deze maand",
		"Gezien op TikTok",
		"Keuze van onze staff",
		"Bestseller"
	];
	const featuredBooks = feauturedIsbns.map((isbn) => books.find((b) => b.isbn === isbn));
	const [currentIndex, setCurrentIndex] = useState(0);
	const [heroBook, setHeroBook] = useState(() => books.find((b) => b.isbn === feauturedIsbns[currentIndex]));
	useEffect(() => {
		setHeroBook(books.find((b) => b.isbn === feauturedIsbns[currentIndex]));
	}, [currentIndex]);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 max-w-6xl mx-auto",
		children: [/* @__PURE__ */ jsx(HeroBook, {
			book: heroBook,
			catchPhrase: catchPhrases[currentIndex]
		}), /* @__PURE__ */ jsx("ul", {
			className: "flex flex-col gap-2",
			children: featuredBooks.map((book, index) => /* @__PURE__ */ jsx(FeaturedBookItem, {
				book,
				catchPhrase: catchPhrases[index],
				onClick: () => setCurrentIndex(index)
			}, book.isbn))
		})]
	});
}
//#endregion
//#region app/media-carousell/MediaCarousell.tsx
function MediaCarousell({ title, books }) {
	const trackRef = useRef(null);
	const [pageCount, setPageCount] = useState(1);
	const [currentPage, setCurrentPage] = useState(0);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const updateScrollState = () => {
		const track = trackRef.current;
		if (!track) return;
		const { scrollLeft, scrollWidth, clientWidth } = track;
		setPageCount(Math.max(1, Math.ceil(scrollWidth / clientWidth)));
		setCurrentPage(scrollLeft + clientWidth >= scrollWidth - 1 ? Math.ceil(scrollWidth / clientWidth) - 1 : Math.round(scrollLeft / clientWidth));
		setCanScrollLeft(scrollLeft > 0);
		setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
	};
	useEffect(() => {
		updateScrollState();
		window.addEventListener("resize", updateScrollState);
		return () => window.removeEventListener("resize", updateScrollState);
	}, [books]);
	const scrollByPage = (direction) => {
		const track = trackRef.current;
		if (!track) return;
		track.scrollBy({
			left: direction * track.clientWidth,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "max-w-6xl mx-auto py-8 group/carousel",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-end justify-between pb-2",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-serif font-medium",
				children: title
			}), pageCount > 1 && /* @__PURE__ */ jsx("ol", {
				className: "flex gap-1 opacity-0 transition-opacity group-hover/carousel:opacity-100",
				children: Array.from({ length: pageCount }, (_, index) => /* @__PURE__ */ jsx("li", { className: `h-0.5 w-4 ${index === currentPage ? "bg-amber-700" : "bg-stone-300"}` }, index))
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ jsx("ul", {
					ref: trackRef,
					onScroll: updateScrollState,
					className: "flex gap-4 py-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden",
					children: books.map((book) => /* @__PURE__ */ jsxs("li", {
						className: "relative shrink-0 snap-start group/item cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10 first:origin-left last:origin-right",
						children: [/* @__PURE__ */ jsx("img", {
							src: book.cover,
							alt: `Boekcover van ${book.title}`,
							className: "h-60 aspect-2/3 object-cover shadow-md group-hover/item:shadow-xl"
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-x-0 bottom-0 p-2 bg-linear-to-t from-black/80 to-transparent text-white opacity-0 transition-opacity group-hover/item:opacity-100",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-serif font-medium text-sm leading-tight",
									children: book.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-stone-300",
									children: book.author
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-xs pt-1",
									children: ["€", book.price.toFixed(2)]
								})
							]
						})]
					}, book.isbn))
				}),
				canScrollLeft && /* @__PURE__ */ jsx(CarousellButton, {
					direction: "left",
					onClick: () => scrollByPage(-1)
				}),
				canScrollRight && /* @__PURE__ */ jsx(CarousellButton, {
					direction: "right",
					onClick: () => scrollByPage(1)
				})
			]
		})]
	});
}
function CarousellButton({ direction, onClick }) {
	const isLeft = direction === "left";
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		"aria-label": isLeft ? "Vorige boeken" : "Volgende boeken",
		className: `absolute inset-y-6 z-20 w-12 flex items-center justify-center text-white cursor-pointer opacity-0 transition-opacity group-hover/carousel:opacity-100 focus-visible:opacity-100 ${isLeft ? "left-0 bg-linear-to-r from-black/60 to-transparent" : "right-0 bg-linear-to-l from-black/60 to-transparent"}`,
		children: /* @__PURE__ */ jsx("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			strokeWidth: 2,
			stroke: "currentColor",
			className: "size-8 transition-transform hover:scale-125",
			children: /* @__PURE__ */ jsx("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: isLeft ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"
			})
		})
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	handle: () => handle,
	meta: () => meta
});
function meta({}) {
	return [{ title: "De Oude Letter" }, {
		name: "description",
		content: "Voorbeeldwebsite voor een online boekwinkel."
	}];
}
var handle = { heroSearch: true };
var fictionBooks = books.filter((book) => book.category === "fiction");
var nonFictionBooks = books.filter((book) => book.category === "non-fiction");
var childrenBooks = books.filter((book) => book.category === "youth");
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(HeroSearch, {}),
		/* @__PURE__ */ jsx(FeaturedBooks, {}),
		/* @__PURE__ */ jsx(MediaCarousell, {
			title: "Fictie",
			books: fictionBooks
		}),
		/* @__PURE__ */ jsx(MediaCarousell, {
			title: "Non-Fictie",
			books: nonFictionBooks
		}),
		/* @__PURE__ */ jsx(MediaCarousell, {
			title: "Kinderboeken",
			books: childrenBooks
		})
	] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DuKvaX82.js",
		"imports": ["/assets/jsx-runtime-SYb1tFyZ.js", "/assets/errorBoundaries-dabU_zF8.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Bwp5ZAb_.js",
			"imports": [
				"/assets/jsx-runtime-SYb1tFyZ.js",
				"/assets/errorBoundaries-dabU_zF8.js",
				"/assets/Favourite-FkFxQF_T.js"
			],
			"css": ["/assets/root-eb88RHxW.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-D-Vt02RP.js",
			"imports": ["/assets/jsx-runtime-SYb1tFyZ.js", "/assets/Favourite-FkFxQF_T.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-fd842c62.js",
	"version": "fd842c62",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
