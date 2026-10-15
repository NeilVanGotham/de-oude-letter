import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useMatches } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
			className: "px-4 py-2 md:p-4 grid grid-cols-[1fr_auto] md:grid-cols-3 gap-y-2 items-center max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: "col-start-1 col-end-2 row-start-1 row-end-2 font-serif text-2xl sm:text-4xl font-semibold italic tracking-tight",
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
					className: "col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-3 md:col-end-4 flex gap-1 sm:gap-4 justify-end",
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
								className: "sr-only sm:not-sr-only group-hover:underline",
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
								className: "sr-only sm:not-sr-only group-hover:underline",
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
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/de-oude-letter/assets/entry.client-BXBlwXSH.js",
		"imports": ["/de-oude-letter/assets/jsx-runtime-SYb1tFyZ.js", "/de-oude-letter/assets/errorBoundaries-CQIrAlAz.js"],
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
			"module": "/de-oude-letter/assets/root-DH4mYqfB.js",
			"imports": [
				"/de-oude-letter/assets/jsx-runtime-SYb1tFyZ.js",
				"/de-oude-letter/assets/errorBoundaries-CQIrAlAz.js",
				"/de-oude-letter/assets/Favourite-FkFxQF_T.js"
			],
			"css": ["/de-oude-letter/assets/root-CX4oVuh-.css"],
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
			"module": "/de-oude-letter/assets/home-CFQwt3RC.js",
			"imports": ["/de-oude-letter/assets/jsx-runtime-SYb1tFyZ.js", "/de-oude-letter/assets/Favourite-FkFxQF_T.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/de-oude-letter/assets/manifest-6d6090eb.js",
	"version": "6d6090eb",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var route1 = { default: () => null };
var assetsBuildDirectory = "build\\client";
var basename = "/de-oude-letter/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = false;
var isSpaMode = true;
var prerender = [];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/de-oude-letter/";
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
		module: route1
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
