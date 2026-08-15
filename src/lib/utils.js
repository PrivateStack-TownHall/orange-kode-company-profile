import clsx from "clsx";

/**
 * Merge conditional classNames.
 */
export function cn(...inputs) {
  return clsx(...inputs);
}

/**
 * Format a number with thousands separators (Indonesian locale).
 */
export function formatNumber(value) {
  return new Intl.NumberFormat("id-ID").format(value);
}

/**
 * Format a price in Indonesian Rupiah.
 */
export function formatPrice(value) {
  return `Rp${new Intl.NumberFormat("id-ID").format(value)}`;
}

/**
 * Slugify a string for use in URLs.
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
