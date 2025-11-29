 import { createClient } from "@sanity/client";

  export const sanityClient = createClient({
    projectId: "9f69jymo",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-01",
  });