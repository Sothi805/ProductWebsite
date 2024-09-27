// import axios, { AxiosError, ResponseType, CancelToken } from "axios";

// const TIME_OUT = 50 * 1000;

// export const axiosInstance = axios.create({
//   withCredentials: true,
//   baseURL: import.meta.env.VITE_HOST,
//   // timeout: TIME_OUT,
//   // signal: AbortSignal.timeout(TIME_OUT),
// });

// let caches: any = {};

// axiosInstance.interceptors.request.use(function (config) {
//   if (caches[config.url ?? ""]) {
//     return {
//       ...config,
//       cancelToken: new CancelToken((cancel) =>
//         cancel("Cancel repeating request")
//       ),
//     };
//   }

//   caches[config.url ?? ""] = true;
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     caches[response.config.url ?? ""] = false;
//     if (response.data) {
//       if (response.status === 200 || response.status === 201) {
//         return Promise.resolve(response);
//       }
//     }

//     return Promise.reject(response);
//   },
//   (error) => {
//     caches[error.config.url ?? ""] = false;
//     return Promise.reject(error);
//   }
// );

// const request = async (
//   method: string,
//   url: string,
//   data?: any,
//   responseType?: ResponseType,
//   headers?: any
// ): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         axiosInstance({
//           method,
//           url,
//           data,
//          headers: {
//             "B1S-ReplaceCollectionsOnPatch":
//               method.toLowerCase() === "patch" ? true : false,
//             ...headers,
//           },
//           responseType: responseType ?? "json",
//         })
//           .then((response) => {
//             resolve({ data: response.data, headers: response.headers });
//           })
//           .catch((e) => {
//             if (e?.code === AxiosError.ERR_NETWORK) {
//               reject(new Error("::ERR_CERT_AUTHORITY_INVALID"));
//             }

//             if (e?.status === 401 && window.location.pathname !== "/login") {
//               window.location.href = "/login";
//               return;
//             }

//             if (e?.status === 204) {
//               resolve("Update Successfully");
//             }

//             if (e.code === "ERR_CANCELED") {
//               reject("Connection timeout");
//             }

//             let error = e?.response?.data?.error?.message?.value;
//             reject(error);
//           });
//       } catch (e) {
//         console.log(e);
//       }
//     }, 1000);
//   });
// };

// export default request;
import axios, { AxiosError, ResponseType, CancelToken } from "axios";
import { Cookies } from "react-cookie";

const TIME_OUT = 50 * 1000;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_HOST,
  // timeout: TIME_OUT,
  // signal: AbortSignal.timeout(TIME_OUT),
});

let caches: any = {};

// axiosInstance.interceptors.request.use(function (config) {
//   if (caches[config.url ?? ""]) {
//     return {
//       ...config,
//       cancelToken: new CancelToken((cancel:any) =>
//         cancel("Cancel repeating request")
//       ),
//     };
//   }

//   caches[config.url ?? ""] = true;
//   return config;
// });

axiosInstance.interceptors.response.use(
  (response) => {
    caches[response.config.url ?? ""] = false;
    if (response.data) {
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      }
    }

    return Promise.reject(response);
  },
  (error) => {
    caches[error.config.url ?? ""] = false;
    return Promise.reject(error);
  }
);
const cookies = new Cookies();

const request = async (
  method: string,
  url: string,
  data?: any,
  responseType?: ResponseType,
  headers?: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        axiosInstance({
          method,
          url,
          data,
          headers: {
            // "B1S-ReplaceCollectionsOnPatch":
            //   method.toLowerCase() === "patch" ? true : false,
            Authorization: cookies.get("token")
              ? `Bearer ${cookies.get("token")}`
              : "",
            ...headers,
          },
          responseType: responseType ?? "json",
        })
          .then((response) => {
            resolve({ data: response.data, headers: response.headers });
          })
          .catch((e) => {
            if (e?.code === AxiosError.ERR_NETWORK) {
              reject(new Error("::ERR_CERT_AUTHORITY_INVALID"));
            }

            if (e?.status === 401 && window.location.pathname !== "/login") {
              window.location.href = "/login";
              return;
            }

            if (e?.status === 204) {
              resolve("Update Successfully");
            }

            if (e.code === "ERR_CANCELED") {
              reject("Connection timeout");
            }

            let error = e?.response?.data?.error?.message?.value;
            reject(error);
          });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  });
};

export default request;
