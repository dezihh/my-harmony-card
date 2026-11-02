/**
 * Favorite (channel logo) normalization, independent of rendering.
 */

export interface FavoriteService {
  name: string;
  data?: Record<string, unknown>;
  target?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface Favorite {
  number?: string | number;
  service?: FavoriteService;
  contextPath?: string;
  image: string;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * Turns one raw `favorites` entry into the shape the card renders.
 * `service` may be a plain string or an object with name/data/target.
 */
export function normalizeFavorite(
  raw: Record<string, unknown>,
  activityKey: string,
  index: number
): Favorite {
  const { number, service, image, data, target, ...extra } = raw;

  if (!service) {
    return {
      number: number as string | number | undefined,
      image: image as string,
    };
  }

  const serviceObject = isPlainObject(service) ? service : {};
  const name =
    typeof service === "string"
      ? service
      : (serviceObject.name as string | undefined);

  return {
    number: number as string | number | undefined,
    service: {
      ...extra,
      name,
      data: (serviceObject.data as Record<string, unknown> | undefined) ?? data,
      target:
        (serviceObject.target as Record<string, unknown> | undefined) ?? target,
    } as FavoriteService,
    contextPath: `activities.${activityKey}.favorites[${index}]`,
    image: image as string,
  };
}

export function normalizeFavorites(
  favorites: unknown,
  activityKey: string
): Favorite[] {
  if (!Array.isArray(favorites)) {
    return [];
  }
  return favorites
    .filter(isPlainObject)
    .map((favorite, index) =>
      normalizeFavorite(favorite as Record<string, unknown>, activityKey, index)
    );
}
