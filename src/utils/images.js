const BASE = import.meta.env.BASE_URL

// Manifest bases are stored as "/images/name"; BASE_URL is "/" or "/repo/".
function url(base, width, ext) {
  return `${BASE}${base.slice(1)}-${width}.${ext}`
}

export function buildSrcset(image, ext) {
  return image.widths.map((width) => `${url(image.base, width, ext)} ${width}w`).join(', ')
}

export function fallbackSrc(image) {
  return url(image.base, image.widths.at(-1), 'jpg')
}