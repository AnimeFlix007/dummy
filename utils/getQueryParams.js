export const getQueryParams = (q) =>
  q?.location?.search
    ?.replace("?", "")
    ?.split("&")
    ?.map((e) => e.split("=").map(decodeURIComponent))
    ?.reduce((r, [k, v]) => ((r[k] = decodeURIComponent(v)), r), {});
