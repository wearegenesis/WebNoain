// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // SUSTITUYE ESTO: Ve a tu carpeta 'studio' -> archivo 'sanity.config.ts'
  // y copia el valor de 'projectId' que aparece ahí.
  projectId: "swu4391l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-15",
});

// Esto sirve para que Sanity nos dé URLs de las imágenes que subes
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
